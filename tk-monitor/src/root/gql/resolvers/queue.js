"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueResolver = void 0;
exports.queueResolver = {
    Queue: {
        async count(parent) {
            return await parent.count();
        },
        async failedCount(parent) {
            return await parent.getFailedCount();
        },
        async completedCount(parent) {
            return await parent.getCompletedCount();
        },
        async delayedCount(parent) {
            return await parent.getDelayedCount();
        },
        async activeCount(parent) {
            return await parent.getActiveCount();
        },
        async waitingCount(parent) {
            return await parent.getWaitingCount();
        },
        async pausedCount(parent) {
            return await parent.getPausedCount();
        },
        async jobsCounts(parent) {
            return await parent.getJobCounts();
        },
        async isPaused(parent) {
            return await parent.isPaused();
        },
        async jobs(parent, _, { dataSources: { bull } }) {
            return await bull.getQueueJobs({ queue: parent.id });
        },
        async metrics(parent, _, { dataSources: { metrics } }) {
            return await metrics.getMetrics(parent.id);
        },
    },
};
//# sourceMappingURL=queue.js.map