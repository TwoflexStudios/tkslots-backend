/// <reference types="node" />
import { BullMonitor } from '@bull-monitor/root';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import type { Server as HttpServer } from 'http';
export declare type InitParams = {
    disableBodyParser?: boolean;
    httpServer?: HttpServer;
};
export declare class BullMonitorExpress extends BullMonitor<ApolloServer> {
    router: Express.Router;
    init({ disableBodyParser, httpServer, }?: InitParams): Promise<void>;
}
