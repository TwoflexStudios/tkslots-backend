import type { IResolvers } from '@graphql-tools/utils';
import type { BullDataSource, MetricsDataSource, PoliciesDataSource } from '../data-sources';
declare type DataSources = {
    dataSources: {
        bull: BullDataSource;
        metrics: MetricsDataSource;
        policies: PoliciesDataSource;
    };
};
export declare type TResolvers = IResolvers<any, DataSources>;
export {};
