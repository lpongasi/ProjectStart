
export interface IFilterQueryViewModel  {
    q: { [key: string]: any; };
    page: number;
    pageSize: number;
    withTotalRecord: boolean;
}
export class FilterQueryViewModel  implements IFilterQueryViewModel {
    q: { [key: string]: any; };
    page: number;
    pageSize: number;
    withTotalRecord: boolean;
}
