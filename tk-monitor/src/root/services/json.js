"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonService = void 0;
exports.JsonService = {
    maybeStringify(data, space = 2) {
        if (data && typeof data === 'object') {
            try {
                return JSON.stringify(data, null, space);
            }
            catch (_e) {
                return data;
            }
        }
        return data;
    },
    maybeParse(data) {
        if (data && typeof data === 'string') {
            try {
                return JSON.parse(data);
            }
            catch (_e) {
                return data;
            }
        }
        return data;
    },
};
//# sourceMappingURL=json.js.map