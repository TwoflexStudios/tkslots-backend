"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metricsTypeDef = void 0;
const apollo_server_core_1 = require("apollo-server-core");
exports.metricsTypeDef = (0, apollo_server_core_1.gql) `
  type QueueMetrics {
    timestamp: Float!
    counts: QueueJobsCounts!
    processingTime: Float
    processingTimeMin: Float
    processingTimeMax: Float
  }
`;
//# sourceMappingURL=metrics.js.map