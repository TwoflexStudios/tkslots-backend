"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobTypeDef = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.jobTypeDef = (0, apollo_server_core_1.gql) `
  enum JobStatus {
    completed
    waiting
    active
    delayed
    failed
    paused
    stuck
    unknown
    prioritized
  }
  enum JobStatusClean {
    completed
    wait
    active
    delayed
    failed
    paused
  }
  type JobLogs {
    count: Int!
    logs: [String]!
  }
  type Job {
    id: ID!
    name: String!
    data: String
    status: JobStatus!
    returnValue: String
    progress: String!
    attemptsMade: Int!
    failedReason: String
    stacktrace: [String]!
    logs: JobLogs
    delay: Float
    timestamp: Float
    finishedOn: Float
    processedOn: Float
    processingTime: Float
    opts: String!
  }
`;
//# sourceMappingURL=job.js.map