"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsDataSource = void 0;
const apollo_datasource_1 = require("apollo-datasource");
const errors_1 = require("../../../errors");
const errors_enum_1 = require("./errors-enum");
class MetricsDataSource extends apollo_datasource_1.DataSource {
    constructor(_internalCollector) {
        super();
        this._internalCollector = _internalCollector;
    }
    async getMetrics(queue, start, end) {
        return await this._collector.extract(queue, start, end);
    }
    async clearAllMetrics() {
        await this._collector.clearAll();
        return true;
    }
    async clearMetrics(queue) {
        await this._collector.clear(queue);
        return true;
    }
    _throwInternalError(e) {
        throw new errors_1.BullMonitorError(e);
    }
    _throwNoCollector() {
        this._throwInternalError(errors_enum_1.MetricsErrorEnum.NO_COLLECTOR);
    }
    get _collector() {
        if (!this._internalCollector) {
            this._throwNoCollector();
        }
        return this._internalCollector;
    }
}
exports.MetricsDataSource = MetricsDataSource;
//# sourceMappingURL=index.js.map