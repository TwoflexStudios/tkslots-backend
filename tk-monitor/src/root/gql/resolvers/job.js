"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobResolver = void 0;
const json_1 = require("../../services/json");
exports.JobResolver = {
    JobStatus: {
        completed: 'completed',
        waiting: 'waiting',
        active: 'active',
        delayed: 'delayed',
        failed: 'failed',
        paused: 'paused',
    },
    Job: {
        data({ data }) {
            return json_1.JsonService.maybeStringify(data);
        },
        delay({ opts }) {
            return opts.delay;
        },
        processingTime(job, _vars, { dataSources: { bull } }) {
            return bull.extractJobProcessingTime(job);
        },
        logs(job) {
            return job.queue.getJobLogs(job.id);
        },
        returnValue(job) {
            return json_1.JsonService.maybeStringify(job.returnvalue);
        },
        progress(job) {
            return job.progress;
        },
        opts(job) {
            return json_1.JsonService.maybeStringify(job.opts);
        },
        status(job) {
            return job.getState();
        },
    },
};
//# sourceMappingURL=job.js.map