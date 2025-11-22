"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMQAdapter = exports.BullMQJobAdapter = void 0;
const bullmq_1 = require("bullmq");
const queue_1 = require("./queue");
const json_1 = require("./services/json");
class BullMQJobAdapter extends queue_1.Job {
    constructor(_job, _queue) {
        super();
        this._job = _job;
        this._queue = _queue;
    }
    // getters
    get rawJob() {
        return this._job;
    }
    get queue() {
        return this._queue;
    }
    get id() {
        return String(this._job.id);
    }
    get name() {
        return this._job.name;
    }
    get data() {
        return this._job.data;
    }
    get returnvalue() {
        return this._job.returnvalue;
    }
    get progress() {
        return json_1.JsonService.maybeStringify(this._job.progress || '0', 0);
    }
    get attemptsMade() {
        return this._job.attemptsMade;
    }
    get failedReason() {
        return this._job.failedReason;
    }
    get stacktrace() {
        return this._job.stacktrace;
    }
    get opts() {
        return this._job.opts;
    }
    get processedOn() {
        return this._job.processedOn || undefined;
    }
    get finishedOn() {
        return this._job.finishedOn || undefined;
    }
    get timestamp() {
        return this._job.timestamp || undefined;
    }
    // public methods
    async getState() {
        const status = await this._job.getState();
        return status;
    }
    async moveToCompleted(returnValue) {
        return this._job.moveToCompleted(returnValue, this._queue.token);
    }
    async moveToFailed(reason) {
        return this._job.moveToFailed(reason, this._queue.token);
    }
    async promote() {
        return this._job.promote();
    }
    async discard() {
        return this._job.discard();
    }
    async update(data) {
        return this._job.update(data);
    }
    async retry() {
        return this._job.retry();
    }
    async remove() {
        return this._job.remove();
    }
    async log(row) {
        await this._job.log(row);
    }
}
exports.BullMQJobAdapter = BullMQJobAdapter;
class BullMQAdapter extends queue_1.Queue {
    constructor(_queue, config) {
        super(_queue, config);
        this._queue = _queue;
        this._id = Buffer.from((this._queue.opts.prefix ?? 'bullmq') + this.name).toString('base64');
    }
    // getters
    get provider() {
        return queue_1.QueueProvider.Bullmq;
    }
    get queueEvents() {
        if (!this._queueEvents) {
            this._queueEvents = new bullmq_1.QueueEvents(this._queue.name, this._queue.opts);
        }
        return this._queueEvents;
    }
    get client() {
        return this._queue.client;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._queue.name;
    }
    get token() {
        return this._queue.token;
    }
    // setters
    set onGlobalJobCompletion(callback) {
        const oldCb = this._globalJobCompletionCb;
        if (oldCb) {
            this.queueEvents.off('completed', oldCb);
        }
        if (callback) {
            const normalizedCallback = (value) => {
                callback(value.jobId);
            };
            this._globalJobCompletionCb = normalizedCallback;
            this.queueEvents.on('completed', normalizedCallback);
        }
        else {
            this._globalJobCompletionCb = undefined;
        }
    }
    // public methods
    toKey(queueType) {
        return this._queue.toKey(queueType);
    }
    async count() {
        return this._queue.count();
    }
    async add(name, data, opts) {
        const job = await this._queue.add(name, data, opts);
        return this.normalizeJob(job);
    }
    async pause() {
        return this._queue.pause();
    }
    async resume() {
        return this._queue.resume();
    }
    async clean(grace, status, limit = Number.MAX_SAFE_INTEGER) {
        return await this._queue.clean(grace, limit, status);
    }
    async empty() {
        return this._queue.drain();
    }
    async isPaused() {
        return this._queue.isPaused();
    }
    async getJob(id) {
        const job = await this._queue.getJob(id);
        if (job) {
            return this.normalizeJob(job);
        }
    }
    jobFromJSON(json, jobId) {
        return this.normalizeJob(bullmq_1.Job.fromJSON(this._queue, json, jobId));
    }
    async getJobs(types, start, end, asc) {
        const jobs = await this._queue.getJobs(types, start, end, asc);
        return jobs.map((job) => this.normalizeJob(job));
    }
    async getJobCounts() {
        const statuses = [
            'active',
            'completed',
            'failed',
            'delayed',
            'waiting',
            'paused',
            'getPrioritizedCount' in this._queue && 'prioritized',
        ].filter(Boolean);
        const counts = await this._queue.getJobCounts(...statuses);
        return counts;
    }
    async getActiveCount() {
        return this._queue.getActiveCount();
    }
    async getCompletedCount() {
        return this._queue.getCompletedCount();
    }
    async getFailedCount() {
        return this._queue.getFailedCount();
    }
    async getDelayedCount() {
        return this._queue.getDelayedCount();
    }
    async getWaitingCount() {
        return this._queue.getWaitingCount();
    }
    async getPausedCount() {
        return this._queue.getJobCountByTypes('paused');
    }
    async removeJobs() {
        throw new Error('Not implemented');
    }
    async getJobLogs(jobId) {
        return this._queue.getJobLogs(jobId);
    }
    async close() {
        await this._queue.close();
        if (this._queueEvents) {
            await this._queueEvents.close();
        }
    }
    // private methods
    normalizeJob(job) {
        return new BullMQJobAdapter(job, this);
    }
}
exports.BullMQAdapter = BullMQAdapter;
//# sourceMappingURL=bullmq-adapter.js.map