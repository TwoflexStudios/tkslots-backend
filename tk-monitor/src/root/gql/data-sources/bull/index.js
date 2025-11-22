"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullDataSource = void 0;
const apollo_datasource_1 = require("apollo-datasource");
const json_1 = require("../../../services/json");
const gql_1 = require("../../../typings/gql");
const redis_info_1 = __importDefault(require("redis-info"));
const data_search_1 = require("../../../data-search");
const isNil_1 = __importDefault(require("lodash/isNil"));
const errors_1 = require("../../../errors");
const errors_enum_1 = require("./errors-enum");
class BullDataSource extends apollo_datasource_1.DataSource {
    constructor(_queues, _queuesMap, _config) {
        super();
        this._queues = _queues;
        this._queuesMap = _queuesMap;
        this._config = _config;
    }
    // queries
    getQueueById(id, throwIfNotFound) {
        const queue = this._queuesMap.get(id);
        if (!queue && throwIfNotFound) {
            this._throwQueueNotFound();
        }
        return queue;
    }
    getQueues() {
        return this._queues;
    }
    async getQueueJobs({ queue, limit = 20, offset = 0, status, id, ids, order = gql_1.OrderEnum.Desc, dataSearch, }) {
        if (!(0, isNil_1.default)(offset) && offset < 0) {
            this._throwInternalError(errors_enum_1.BullErrorEnum.BAD_OFFSET);
        }
        if (!(0, isNil_1.default)(limit) && limit < 1) {
            this._throwInternalError(errors_enum_1.BullErrorEnum.BAD_LIMIT);
        }
        const bullQueue = this.getQueueById(queue, true);
        if (ids) {
            return await Promise.all(ids.map((id) => bullQueue.getJob(id))).then(this._filterJobs);
        }
        else if (id) {
            const job = await bullQueue.getJob(id);
            return job ? [job] : [];
        }
        else if (dataSearch) {
            if (status) {
                const searcher = new data_search_1.PowerSearch(bullQueue);
                return await searcher
                    .search({
                    status,
                    search: dataSearch,
                    offset: offset,
                    limit: limit,
                    scanCount: this._config.textSearchScanCount,
                })
                    .then(this._filterJobs);
            }
            else {
                this._throwInternalError(errors_enum_1.BullErrorEnum.DATA_SEARCH_STATUS_REQUIRED);
            }
        }
        else if (status) {
            return await bullQueue
                .getJobs([status], offset, offset + limit - 1, order === gql_1.OrderEnum.Asc)
                .then(this._filterJobs);
        }
        {
            return [];
        }
    }
    async getJob(queueId, id, throwIfNotFound) {
        const queue = this.getQueueById(queueId, true);
        const job = await queue.getJob(id);
        if (!job && throwIfNotFound) {
            this._throwJobNotFound();
        }
        return job;
    }
    extractJobProcessingTime(job) {
        if (!job.processedOn || !job.finishedOn)
            return 0;
        return job.finishedOn - job.processedOn;
    }
    async getQueueJobsCounts(id) {
        const queue = this.getQueueById(id);
        return await queue?.getJobCounts();
    }
    async getQueueFailedCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.getFailedCount();
    }
    async getQueueCompletedCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.getCompletedCount();
    }
    async getQueueDelayedCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.getDelayedCount();
    }
    async getQueueActiveCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.getActiveCount();
    }
    async getQueueWaitingCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.getWaitingCount();
    }
    async getQueuePausedCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.getPausedCount();
    }
    async getQueueWaitingOrDelayedJobsCount(id) {
        const queue = this.getQueueById(id);
        return await queue?.count();
    }
    async getRedisInfo() {
        if (this._queuesMap.size > 0) {
            const firstQueue = this._queues[0];
            const client = await firstQueue.client;
            const rawInfo = await client.info();
            return redis_info_1.default.parse(rawInfo);
        }
        return null;
    }
    // mutations
    async createJob({ queue: queueId, name = null, data = {}, options = {}, }) {
        const queue = this.getQueueById(queueId, true);
        return await queue.add(name, json_1.JsonService.maybeParse(data), json_1.JsonService.maybeParse(options));
    }
    async removeJobsByPattern(args) {
        const queue = this.getQueueById(args.queue, true);
        await queue.removeJobs(args.pattern);
        return true;
    }
    async pauseQueue(id) {
        const queue = this.getQueueById(id, true);
        await queue.pause();
        return queue;
    }
    async cleanQueue(args) {
        const queue = this.getQueueById(args.queue, true);
        return await queue.clean(args.grace, args.status, args.limit || undefined);
    }
    async emptyQueue(args) {
        const queue = this.getQueueById(args.queue, true);
        await queue.empty();
        return queue;
    }
    async closeQueue(args) {
        const queue = this.getQueueById(args.queue, true);
        await queue.close();
        return queue;
    }
    async resumeQueue(args) {
        const queue = this.getQueueById(args.queue, true);
        await queue.resume();
        return queue;
    }
    async promoteJob(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.promote();
        return job;
    }
    async discardJob(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.discard();
        return job;
    }
    async updateJobData(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.update(json_1.JsonService.maybeParse(args.data));
        return job;
    }
    async createJobLog(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.log(args.row);
        return job;
    }
    async retryJob(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.retry();
        return job;
    }
    async retryJobs(args) {
        const jobs = await Promise.all(args.jobs.map((jobId) => this.getJob(args.queue, jobId, true)));
        await Promise.all(jobs.map((job) => job?.retry()));
        return jobs;
    }
    async removeJobById(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.remove();
        return job;
    }
    async removeJobs(args) {
        const jobs = await Promise.all(args.jobs.map((jobId) => this.getJob(args.queue, jobId, true)));
        await Promise.all(jobs.map((job) => job?.remove()));
        return jobs;
    }
    async moveJobToCompleted(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.moveToCompleted();
        return job;
    }
    async moveJobToFailed(args) {
        const job = await this.getJob(args.queue, args.id, true);
        await job?.moveToFailed({
            message: '',
        });
        return job;
    }
    _filterJobs(jobs) {
        return jobs.filter(Boolean);
    }
    _throwInternalError(e) {
        throw new errors_1.BullMonitorError(e);
    }
    _throwQueueNotFound() {
        this._throwInternalError(errors_enum_1.BullErrorEnum.QUEUE_NOT_FOUND);
    }
    _throwJobNotFound() {
        this._throwInternalError(errors_enum_1.BullErrorEnum.JOB_NOT_FOUND);
    }
}
exports.BullDataSource = BullDataSource;
//# sourceMappingURL=index.js.map