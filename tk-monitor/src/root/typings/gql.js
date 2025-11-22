"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueProvider = exports.OrderEnum = exports.JobStatusClean = exports.JobStatus = void 0;
var JobStatus;
(function (JobStatus) {
    JobStatus["Completed"] = "completed";
    JobStatus["Waiting"] = "waiting";
    JobStatus["Active"] = "active";
    JobStatus["Delayed"] = "delayed";
    JobStatus["Failed"] = "failed";
    JobStatus["Paused"] = "paused";
    JobStatus["Stuck"] = "stuck";
    JobStatus["Unknown"] = "unknown";
    JobStatus["Prioritized"] = "prioritized";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var JobStatusClean;
(function (JobStatusClean) {
    JobStatusClean["Completed"] = "completed";
    JobStatusClean["Wait"] = "wait";
    JobStatusClean["Active"] = "active";
    JobStatusClean["Delayed"] = "delayed";
    JobStatusClean["Failed"] = "failed";
    JobStatusClean["Paused"] = "paused";
})(JobStatusClean = exports.JobStatusClean || (exports.JobStatusClean = {}));
var OrderEnum;
(function (OrderEnum) {
    OrderEnum["Asc"] = "ASC";
    OrderEnum["Desc"] = "DESC";
})(OrderEnum = exports.OrderEnum || (exports.OrderEnum = {}));
var QueueProvider;
(function (QueueProvider) {
    QueueProvider["Bull"] = "bull";
    QueueProvider["Bullmq"] = "bullmq";
})(QueueProvider = exports.QueueProvider || (exports.QueueProvider = {}));
//# sourceMappingURL=gql.js.map