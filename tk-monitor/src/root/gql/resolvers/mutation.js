"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationResolver = void 0;
exports.mutationResolver = {
    Mutation: {
        async createJob(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.input.queue);
            return await bull.createJob(args.input);
        },
        async pauseQueue(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return await bull.pauseQueue(args.queue);
        },
        async resumeQueue(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return await bull.resumeQueue(args);
        },
        async cleanQueue(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return await bull.cleanQueue(args);
        },
        async emptyQueue(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return await bull.emptyQueue(args);
        },
        async closeQueue(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return await bull.closeQueue(args);
        },
        moveJobToCompleted(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.moveJobToCompleted(args);
        },
        moveJobToFailed(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.moveJobToFailed(args);
        },
        discardJob(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.discardJob(args);
        },
        promoteJob(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.promoteJob(args);
        },
        removeJob(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.removeJobById(args);
        },
        removeJobs(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.removeJobs(args);
        },
        retryJob(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.retryJob(args);
        },
        retryJobs(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.retryJobs(args);
        },
        removeJobsByPattern(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.removeJobsByPattern(args);
        },
        updateJobData(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.updateJobData(args);
        },
        log(_, args, { dataSources: { bull, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return bull.createJobLog(args);
        },
        async clearMetrics(_, args, { dataSources: { metrics, policies } }) {
            policies.raiseIfQueueReadonly(args.queue);
            return await metrics.clearMetrics(args.queue);
        },
        async clearAllMetrics(_, __, { dataSources: { metrics } }) {
            return await metrics.clearAllMetrics();
        },
    },
};
//# sourceMappingURL=mutation.js.map