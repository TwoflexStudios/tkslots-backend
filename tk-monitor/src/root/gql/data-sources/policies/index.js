"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesDataSource = void 0;
const apollo_datasource_1 = require("apollo-datasource");
const errors_1 = require("../../../errors");
const errors_enum_1 = require("./errors-enum");
class PoliciesDataSource extends apollo_datasource_1.DataSource {
    constructor(_queues) {
        super();
        this._queues = _queues;
    }
    isQueueReadonly(id) {
        return this._queues.get(id)?.readonly ?? false;
    }
    raiseIfQueueReadonly(id) {
        if (this.isQueueReadonly(id)) {
            throw new errors_1.BullMonitorError(errors_enum_1.PoliciesErrorEnum.READ_ONLY_QUEUE);
        }
    }
}
exports.PoliciesDataSource = PoliciesDataSource;
//# sourceMappingURL=index.js.map