"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
exports.queryResolver = {
    Query: {
        async redisInfo(_, __, { dataSources: { bull } }) {
            return await bull.getRedisInfo();
        },
        async metrics(_, args, { dataSources: { metrics } }) {
            return await metrics.getMetrics(args.queue, args.start, args.end);
        },
        queues(_, __, { dataSources: { bull } }) {
            return bull.getQueues();
        },
        queue(_, args, { dataSources: { bull } }) {
            return bull.getQueueById(args.id);
        },
        async jobs(_, args, { dataSources: { bull } }) {
            return await bull.getQueueJobs(args);
        },
        async job(_parent, { queue, id }, { dataSources: { bull } }) {
            return await bull.getJob(queue, id);
        },
    },
};
//# sourceMappingURL=query.js.map