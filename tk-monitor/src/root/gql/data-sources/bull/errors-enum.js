"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullErrorEnum = void 0;
var BullErrorEnum;
(function (BullErrorEnum) {
    BullErrorEnum["QUEUE_NOT_FOUND"] = "Queue not found";
    BullErrorEnum["JOB_NOT_FOUND"] = "Job not found";
    BullErrorEnum["DATA_SEARCH_STATUS_REQUIRED"] = "Job status is required for data search";
    BullErrorEnum["BAD_OFFSET"] = "Offset should be >= 0";
    BullErrorEnum["BAD_LIMIT"] = "Limit should be >= 1";
})(BullErrorEnum = exports.BullErrorEnum || (exports.BullErrorEnum = {}));
//# sourceMappingURL=errors-enum.js.map