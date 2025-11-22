import type { Queue, JobCounts } from './queue';
import type { MetricsConfig } from './typings/config';
declare type TMetrics = {
    queue: string;
    timestamp: number;
    counts: JobCounts;
    processingTime?: number;
    processingTimeMin?: number;
    processingTimeMax?: number;
};
export declare class MetricsCollector {
    private _config;
    private _processingTimeGauge;
    private _queues;
    private _scheduler;
    private _schedulerJob;
    private _isActive;
    constructor(queues: Queue[], _config: Required<MetricsConfig>);
    startCollecting(): void;
    stopCollecting(): void;
    extract(queue: string, start?: number, end?: number): Promise<TMetrics[]>;
    clear(queue: string): Promise<void>;
    clearAll(): Promise<void>;
    set queues(queues: Queue[]);
    private _maybeCreateSchedulerJob;
    private _taskFn;
    private _collect;
    private _persist;
    private _attachCompletionCbs;
    private _detachCompletionCbs;
    private _onJobComplete;
    private _extractProcessingTime;
    private _normalizeProcessingTime;
    private _buildPersistKey;
    private get _redisClient();
}
export {};
