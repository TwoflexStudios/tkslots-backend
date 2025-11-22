"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMonitorError = void 0;
class BullMonitorError extends Error {
    constructor(msg) {
        super(msg);
        this.message = msg;
        this.name = 'BullMonitorError';
    }
}
exports.BullMonitorError = BullMonitorError;
//# sourceMappingURL=errors.js.map