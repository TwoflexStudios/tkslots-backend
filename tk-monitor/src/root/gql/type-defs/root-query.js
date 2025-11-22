"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootQueryTypeDef = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.rootQueryTypeDef = (0, apollo_server_core_1.gql) `
  type Query {
    queues: [Queue!]
    queue(id: ID!): Queue
    metrics(queue: ID!, start: Int = 0, end: Int = -1): [QueueMetrics!]
    jobs(
      queue: ID!
      offset: Int
      limit: Int
      status: JobStatus
      order: OrderEnum
      id: ID
      ids: [ID]
      dataSearch: String
    ): [Job!]!
    job(queue: ID!, id: ID!): Job
    redisInfo: RedisInfo
  }
`;
//# sourceMappingURL=root-query.js.map