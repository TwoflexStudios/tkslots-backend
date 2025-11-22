"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = exports.Job = exports.QueueProvider = exports.JobStatus = void 0;
const gql_1 = require("./typings/gql");
Object.defineProperty(exports, "QueueProvider", { enumerable: true, get: function () { return gql_1.QueueProvider; } });
const gql_2 = require("./typings/gql");
Object.defineProperty(exports, "JobStatus", { enumerable: true, get: function () { return gql_2.JobStatus; } });
class Job {
}
exports.Job = Job;
class Queue {
    constructor(_queue, _config) {
        this._config = _config;
    }
    get readonly() {
        return this._config?.readonly ?? false;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map