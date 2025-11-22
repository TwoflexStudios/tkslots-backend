import type { Queue, JobStatus, Job } from './queue';
declare type TSearchArgs = {
    status: JobStatus;
    limit: number;
    offset: number;
    search: string;
    scanCount?: number;
};
declare type TJobsList = Job[];
export declare class PowerSearch {
    private _queue;
    constructor(_queue: Queue);
    search(args: TSearchArgs): Promise<TJobsList>;
    private _getIterator;
    private _evalSearch;
}
export {};
