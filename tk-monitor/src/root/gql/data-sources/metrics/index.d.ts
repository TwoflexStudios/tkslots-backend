import { DataSource } from 'apollo-datasource';
import { MetricsCollector } from '../../../metrics-collector';
export declare class MetricsDataSource extends DataSource {
    private _internalCollector?;
    constructor(_internalCollector?: MetricsCollector | undefined);
    getMetrics(queue: string, start?: number, end?: number): Promise<{
        queue: string;
        timestamp: number;
        counts: import("../../../queue").JobCounts;
        processingTime?: number | undefined;
        processingTimeMin?: number | undefined;
        processingTimeMax?: number | undefined;
    }[]>;
    clearAllMetrics(): Promise<boolean>;
    clearMetrics(queue: string): Promise<boolean>;
    private _throwInternalError;
    private _throwNoCollector;
    private get _collector();
}
