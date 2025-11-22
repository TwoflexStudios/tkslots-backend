"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const job_1 = require("./job");
const mutations_1 = require("./mutations");
const queue_1 = require("./queue");
const redis_info_1 = require("./redis-info");
const root_query_1 = require("./root-query");
const metrics_1 = require("./metrics");
exports.typeDefs = [
    redis_info_1.redisInfoTypeDef,
    job_1.jobTypeDef,
    queue_1.queueTypeDef,
    metrics_1.metricsTypeDef,
    mutations_1.mutationsTypeDef,
    root_query_1.rootQueryTypeDef,
];
//# sourceMappingURL=index.js.map