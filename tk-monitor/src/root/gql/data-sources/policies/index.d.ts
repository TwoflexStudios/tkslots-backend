import { DataSource } from 'apollo-datasource';
import { Queue } from '../../../queue';
export declare class PoliciesDataSource extends DataSource {
    private _queues;
    constructor(_queues: Map<string, Queue>);
    isQueueReadonly(id: string): boolean;
    raiseIfQueueReadonly(id: string): void;
}
