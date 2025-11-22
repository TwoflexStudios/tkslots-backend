"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const job_1 = require("./job");
const queue_1 = require("./queue");
const mutation_1 = require("./mutation");
const query_1 = require("./query");
const scalars_1 = require("./scalars");
exports.resolvers = [
    scalars_1.scalarsResolver,
    job_1.JobResolver,
    queue_1.queueResolver,
    mutation_1.mutationResolver,
    query_1.queryResolver,
];
//# sourceMappingURL=index.js.map