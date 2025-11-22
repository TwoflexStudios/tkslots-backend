"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BullMonitorExpress = void 0;
const root_1 = require("../root");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const apollo_server_core_1 = require("apollo-server-core");
const expressVersion = require('express/package.json').version;
const defaultInitParams = {
    disableBodyParser: expressVersion.startsWith('5') ? true : undefined,
};
class BullMonitorExpress extends root_1.BullMonitor {
    async init({ disableBodyParser, httpServer, } = defaultInitParams) {
        const router = express_1.default.Router();
        const bodyParserConfig = disableBodyParser ? false : undefined;
        router.get('/', (_req, res) => {
            res.type('html');
            res.send(this.renderUi());
        });
        this.createServer(apollo_server_express_1.ApolloServer, httpServer && [apollo_server_core_1.ApolloServerPluginDrainHttpServer({ httpServer })]);
        await this.server.start();
        this.server.applyMiddleware({
            app: router,
            bodyParserConfig,
        });
        this.router = router;
    }
}
exports.BullMonitorExpress = BullMonitorExpress;
//# sourceMappingURL=index.js.map