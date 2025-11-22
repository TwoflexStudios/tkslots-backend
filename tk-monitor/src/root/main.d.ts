import { Queue } from './queue';
import type { ApolloServerBase, Config as ApolloConfig } from 'apollo-server-core';
import type { Config } from './typings/config';
export declare abstract class BullMonitor<TServer extends ApolloServerBase> {
    private _queues;
    private _queuesMap;
    private _ui;
    private _metricsCollector?;
    constructor(config: Config);
    get queues(): Queue[];
    abstract init(...args: any): Promise<any>;
    setQueues(queues: Config['queues']): void;
    startMetricsCollector(): void;
    stopMetricsCollector(): void;
    protected gqlBasePath: string;
    protected config: Required<Config>;
    protected server: TServer;
    protected createServer(Server: new (config: ApolloConfig) => TServer, plugins?: ApolloConfig['plugins']): void;
    protected startServer(): Promise<void>;
    protected renderUi(): string;
    protected get baseUrl(): string;
    protected get uiEndpoint(): string;
    protected get gqlEndpoint(): string;
    private _initQueues;
    private _validateQueues;
    private _normalizeConfig;
    private _initMetricsCollector;
}
