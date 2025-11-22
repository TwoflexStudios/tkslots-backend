"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerSearch = void 0;
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const jsonata_1 = __importDefault(require("jsonata"));
const constants_1 = require("./constants");
class PowerSearch {
    constructor(_queue) {
        this._queue = _queue;
    }
    async search(args) {
        let expr;
        try {
            expr = (0, jsonata_1.default)(args.search);
        }
        catch (_e) {
            return [];
        }
        const it = this._getIterator(args);
        if (!it)
            return [];
        const start = args.offset;
        const end = args.limit + start;
        const acc = [];
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
        mainLoop: for await (const jobs of it.generator()) {
            for (const job of jobs) {
                if (this._evalSearch(job, expr)) {
                    acc.push(job);
                }
                if (acc.length >= end) {
                    break mainLoop;
                }
            }
        }
        it.destroy();
        return acc.slice(start, end);
    }
    _getIterator(args) {
        const redisKey = this._queue.toKey(args.status);
        const config = {
            scanCount: args.scanCount,
        };
        switch (args.status) {
            case 'completed':
            case 'failed':
            case 'delayed':
            case 'prioritized':
                return new SetIterator(this._queue, redisKey, config);
            case 'active':
            case 'waiting':
            case 'paused':
                return new ListIterator(this._queue, redisKey, config);
        }
    }
    _evalSearch(job, expr) {
        try {
            const result = expr.evaluate(job.rawJob);
            if (!result)
                return false;
            return typeof result === 'object' ? !(0, isEmpty_1.default)(result) : !!result;
        }
        catch (_e) {
            return false;
        }
    }
}
exports.PowerSearch = PowerSearch;
class AbstractIterator {
    constructor(_queue, config) {
        this._queue = _queue;
        this._scanCount = config.scanCount || constants_1.DEFAULT_DATA_SEARCH_SCAN_COUNT;
    }
    async _extractJobs(ids) {
        const client = await this._queue.client;
        const pipeline = client.pipeline();
        ids.forEach((id) => pipeline.hgetall(this._queue.toKey(id)));
        const jobs = await pipeline.exec();
        return jobs.reduce((acc, [error, job], idx) => {
            if (!error && job) {
                acc.push(this._queue.jobFromJSON(job, ids[idx]));
            }
            return acc;
        }, []);
    }
}
class SetIterator extends AbstractIterator {
    constructor(queue, _key, config) {
        super(queue, config);
        this._key = _key;
    }
    async *generator() {
        const client = await this._queue.client;
        this._stream = client.zscanStream(this._key, {
            count: this._scanCount,
        });
        for await (const ids of this._stream) {
            this._stream.pause();
            const filteredIds = ids.filter((_k, idx) => !(idx % 2));
            const jobs = await this._extractJobs(filteredIds);
            yield jobs;
            this._stream.resume();
        }
    }
    destroy() {
        if (this._stream) {
            this._stream.destroy();
        }
    }
}
class ListIterator extends AbstractIterator {
    constructor(queue, _key, config) {
        super(queue, config);
        this._key = _key;
        this._cursor = 0;
    }
    async *generator() {
        const client = await this._queue.client;
        this._ids = await client.lrange(this._key, 0, -1);
        while (true) {
            try {
                const ids = this._nextChunk;
                if ((0, isEmpty_1.default)(ids)) {
                    return;
                }
                const jobs = await this._extractJobs(ids);
                this._incCursor(jobs.length);
                yield jobs;
            }
            catch (e) {
                console.error(e);
                return;
            }
        }
    }
    // noop
    destroy() { }
    _incCursor(n) {
        this._cursor += n;
    }
    get _nextChunk() {
        return this._ids.slice(this._cursor, this._cursor + this._scanCount);
    }
}
//# sourceMappingURL=data-search.js.map