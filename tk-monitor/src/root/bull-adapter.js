"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullAdapter = exports.BullJobAdapter = void 0;
const queue_1 = require("./queue");
// this is required due to bad bull typings
const Bull = __importStar(require("bull"));
class BullJobAdapter extends queue_1.Job {
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
        return String(this._job.progress()) || '0';
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
        return this._job.getState();
    }
    async moveToCompleted(returnValue) {
        return this._job.moveToCompleted(returnValue);
    }
    async moveToFailed(reason) {
        return this._job.moveToFailed(reason);
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
        return this._job.log(row);
    }
}
exports.BullJobAdapter = BullJobAdapter;
class BullAdapter extends queue_1.Queue {
    constructor(_queue, config) {
        super(_queue, config);
        this._queue = _queue;
        this._id = Buffer.from(this._queue.clientName()).toString('base64');
    }
    // getters
    get provider() {
        return queue_1.QueueProvider.Bull;
    }
    get client() {
        return Promise.resolve(this._queue.client);
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._queue.name;
    }
    get token() {
        return '';
    }
    // setters
    set onGlobalJobCompletion(callback) {
        const oldCb = this._globalJobCompletionCb;
        if (oldCb) {
            this._queue.off('global:completed', oldCb);
        }
        this._globalJobCompletionCb = callback;
        if (callback) {
            this._queue.on('global:completed', callback);
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
    async pause(isLocal, doNotWaitActive) {
        return this._queue.pause(isLocal, doNotWaitActive);
    }
    async resume(isLocal) {
        return this._queue.resume(isLocal);
    }
    async clean(grace, status, limit) {
        const jobs = await this._queue.clean(grace, status, limit);
        return jobs.map((job) => String(job.id));
    }
    async empty() {
        return this._queue.empty();
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
        // @ts-ignore
        return this.normalizeJob(Bull.Job.fromJSON(this._queue, json, jobId));
    }
    async getJobs(status, start, end, asc) {
        const jobs = await this._queue.getJobs([status], start, end, asc);
        return jobs.map((job) => this.normalizeJob(job));
    }
    async getJobCounts() {
        return this._queue.getJobCounts();
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
        return this._queue.getPausedCount();
    }
    async removeJobs(pattern) {
        return this._queue.removeJobs(pattern);
    }
    async getJobLogs(jobId) {
        return this._queue.getJobLogs(jobId);
    }
    async close(doNotWaitJobs) {
        return this._queue.close(doNotWaitJobs);
    }
    // private methods
    normalizeJob(job) {
        return new BullJobAdapter(job, this);
    }
}
exports.BullAdapter = BullAdapter;
//# sourceMappingURL=bull-adapter.js.map