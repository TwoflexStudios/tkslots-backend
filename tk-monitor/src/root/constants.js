"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_METRICS_CONFIG = exports.DEFAULT_ROOT_CONFIG = exports.DEFAULT_DATA_SEARCH_SCAN_COUNT = exports.DEV = exports.PROD = void 0;
exports.PROD = process.env.NODE_ENV === 'production';
exports.DEV = !exports.PROD;
exports.DEFAULT_DATA_SEARCH_SCAN_COUNT = 500;
exports.DEFAULT_ROOT_CONFIG = {
    queues: [],
    baseUrl: '',
    gqlIntrospection: exports.DEV,
    textSearchScanCount: exports.DEFAULT_DATA_SEARCH_SCAN_COUNT,
    metrics: false,
};
exports.DEFAULT_METRICS_CONFIG = {
    redisPrefix: 'bull_monitor::metrics::',
    collectInterval: { hours: 1 },
    maxMetrics: 100,
    blacklist: [],
    startImmediately: true,
};
//# sourceMappingURL=constants.js.map