"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMonitor = void 0;
const data_sources_1 = require("./gql/data-sources");
const type_defs_1 = require("./gql/type-defs");
const resolvers_1 = require("./gql/resolvers");
const ui_1 = require("./ui");
const metrics_collector_1 = require("./metrics-collector");
const queue_1 = require("./queue");
const constants_1 = require("./constants");
class BullMonitor {
    constructor(config) {
        this._queues = [];
        this._queuesMap = new Map();
        this.gqlBasePath = '/graphql';
        this.config = this._normalizeConfig(config);
        this._ui = new ui_1.UI();
        this._initQueues(this.config.queues);
        if (this.config.metrics) {
            this._initMetricsCollector();
        }
    }
    get queues() {
        return this._queues;
    }
    setQueues(queues) {
        this._initQueues(queues);
        if (this._metricsCollector && this.config.metrics) {
            this._metricsCollector.queues = this._queues;
        }
    }
    startMetricsCollector() {
        if (this._metricsCollector) {
            this._metricsCollector.stopCollecting();
            this._metricsCollector.startCollecting();
        }
        else {
            console.warn('Metrics collector is not initialized. Please pass the metrics config while initializing bull-monitor: { metrics: { collectInterval: { hours: 1 } } }');
        }
    }
    stopMetricsCollector() {
        this._metricsCollector?.stopCollecting();
    }
    createServer(Server, plugins) {
        this.server = new Server({
            persistedQueries: false,
            typeDefs: type_defs_1.typeDefs,
            resolvers: resolvers_1.resolvers,
            plugins,
            introspection: this.config.gqlIntrospection,
            dataSources: () => ({
                bull: new data_sources_1.BullDataSource(this._queues, this._queuesMap, {
                    textSearchScanCount: this.config.textSearchScanCount,
                }),
                metrics: new data_sources_1.MetricsDataSource(this._metricsCollector),
                policies: new data_sources_1.PoliciesDataSource(this._queuesMap),
            }),
        });
    }
    async startServer() {
        return await this.server.start();
    }
    renderUi() {
        return this._ui.render();
    }
    get baseUrl() {
        return this.config.baseUrl;
    }
    get uiEndpoint() {
        return this.baseUrl || '/';
    }
    get gqlEndpoint() {
        const base = this.baseUrl;
        if (!base) {
            return this.gqlBasePath;
        }
        else if (base.endsWith('/')) {
            return base.slice(0, -1) + this.gqlBasePath;
        }
        return base + this.gqlBasePath;
    }
    _initQueues(rawQueues) {
        this._queues = this._validateQueues(rawQueues);
        this._queuesMap.clear();
        this._queues.forEach((queue) => {
            this._queuesMap.set(queue.id, queue);
        });
    }
    _validateQueues(queues) {
        let hasInvalid = false;
        const validated = queues.filter((queue) => {
            const isValid = queue instanceof queue_1.Queue;
            if (!isValid) {
                hasInvalid = true;
            }
            return isValid;
        });
        if (hasInvalid) {
            console.error('Since version 3.0.0 every queue should be wrapped in bull or bullmq adapter. Check out the bull-monitor docs for more info - https://github.com/s-r-x/bull-monitor');
        }
        return validated;
    }
    _normalizeConfig(config) {
        return {
            ...constants_1.DEFAULT_ROOT_CONFIG,
            ...config,
            metrics: config.metrics
                ? { ...constants_1.DEFAULT_METRICS_CONFIG, ...config.metrics }
                : false,
        };
    }
    _initMetricsCollector() {
        this._metricsCollector = new metrics_collector_1.MetricsCollector(this._queues, this.config.metrics);
        this._metricsCollector.startCollecting();
    }
}
exports.BullMonitor = BullMonitor;
//# sourceMappingURL=main.js.map