import type { SimpleIntervalSchedule } from 'toad-scheduler';
import type { Queue } from '../queue';
export declare type MetricsConfig = {
    redisPrefix?: string;
    collectInterval?: SimpleIntervalSchedule;
    maxMetrics?: number;
    blacklist?: string[];
    startImmediately?: boolean;
};
export declare type QueueConfig = {
    readonly?: boolean;
};
export declare type Config = {
    queues: Queue[];
    gqlIntrospection?: boolean;
    baseUrl?: string;
    textSearchScanCount?: number;
    metrics?: MetricsConfig | false;
};
