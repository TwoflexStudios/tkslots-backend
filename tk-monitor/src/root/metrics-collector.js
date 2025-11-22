"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsCollector = void 0;
const json_1 = require("./services/json");
const toad_scheduler_1 = require("toad-scheduler");
const sum_1 = __importDefault(require("lodash/sum"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const round_1 = __importDefault(require("lodash/round"));
class MetricsCollector {
    constructor(queues, _config) {
        this._config = _config;
        this._processingTimeGauge = new Map();
        this._isActive = false;
        this._taskFn = async () => {
            try {
                const metrics = await this._collect();
                await this._persist(metrics);
            }
            catch (e) {
                console.error('[bull-monitor] metrics collector error: ', e);
            }
        };
        this._scheduler = new toad_scheduler_1.ToadScheduler();
        this._queues = queues.filter((q) => !_config.blacklist.includes(q.name));
    }
    startCollecting() {
        this._maybeCreateSchedulerJob();
        this._scheduler.addSimpleIntervalJob(this._schedulerJob);
        this._attachCompletionCbs();
        this._isActive = true;
    }
    stopCollecting() {
        this._scheduler.stop();
        this._detachCompletionCbs();
        this._isActive = false;
    }
    async extract(queue, start = 0, end = -1) {
        const key = this._buildPersistKey(queue);
        const client = await this._redisClient;
        const metrics = await client.lrange(key, start, end);
        return metrics.map(json_1.JsonService.maybeParse).filter(Boolean);
    }
    async clear(queue) {
        const client = await this._redisClient;
        await client.del(this._buildPersistKey(queue));
    }
    async clearAll() {
        const client = await this._redisClient;
        const pipeline = client.pipeline();
        this._queues.forEach((queue) => {
            pipeline.del(this._buildPersistKey(queue.id));
        });
        await pipeline.exec();
    }
    set queues(queues) {
        this._queues = queues.filter((q) => !this._config.blacklist.includes(q.name));
        const queuesSet = new Set(this._queues.map(({ id }) => id));
        this._processingTimeGauge.forEach((_, queueId) => {
            if (!queuesSet.has(queueId)) {
                this._processingTimeGauge.delete(queueId);
            }
        });
        if (this._isActive) {
            this._attachCompletionCbs();
        }
    }
    _maybeCreateSchedulerJob() {
        if (!this._schedulerJob) {
            const task = new toad_scheduler_1.AsyncTask('collect-metrics', this._taskFn);
            this._schedulerJob = new toad_scheduler_1.SimpleIntervalJob(this._config.collectInterval, task);
        }
    }
    async _collect() {
        const timestamp = Date.now();
        return await Promise.all(this._queues.map(async (queue) => {
            const processingTime = this._extractProcessingTime(queue.id);
            this._processingTimeGauge.set(queue.id, []);
            return {
                timestamp,
                queue: queue.id,
                counts: await queue.getJobCounts(),
                ...processingTime,
            };
        }));
    }
    async _persist(metrics) {
        const client = await this._redisClient;
        const lpopPipeline = client.pipeline();
        await Promise.all(metrics.map(async (metric) => {
            const key = this._buildPersistKey(metric.queue);
            const listLen = await client.rpush(key, JSON.stringify(metric));
            if (listLen > this._config.maxMetrics) {
                lpopPipeline.lpop(key);
            }
        }));
        await lpopPipeline.exec();
    }
    _attachCompletionCbs() {
        this._detachCompletionCbs();
        for (const queue of this._queues) {
            const cb = this._onJobComplete.bind(this, queue);
            queue.onGlobalJobCompletion = cb;
        }
    }
    _detachCompletionCbs() {
        for (const queue of this._queues) {
            queue.onGlobalJobCompletion = null;
        }
    }
    async _onJobComplete(queue, jobId) {
        const job = await queue.getJob(jobId);
        if (!job?.finishedOn || !job.processedOn) {
            return;
        }
        const dur = job.finishedOn - job.processedOn;
        const gauge = this._processingTimeGauge;
        const stats = gauge.get(queue.id);
        if (!stats) {
            gauge.set(queue.id, [dur]);
        }
        else {
            stats.push(dur);
        }
    }
    _extractProcessingTime(queue) {
        const stats = this._processingTimeGauge.get(queue);
        if ((0, isEmpty_1.default)(stats))
            return {};
        return {
            processingTime: this._normalizeProcessingTime((0, sum_1.default)(stats) / stats.length),
            processingTimeMin: this._normalizeProcessingTime(Math.min(...stats)),
            processingTimeMax: this._normalizeProcessingTime(Math.max(...stats)),
        };
    }
    _normalizeProcessingTime(time) {
        return (0, round_1.default)(time, 2);
    }
    _buildPersistKey(queue) {
        return this._config.redisPrefix + queue;
    }
    get _redisClient() {
        return this._queues[0].client;
    }
}
exports.MetricsCollector = MetricsCollector;
//# sourceMappingURL=metrics-collector.js.map