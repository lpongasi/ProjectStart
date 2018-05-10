
export interface IFilterDataViewModel<T>  {
    data: T[];
    page: number;
    pageSize: number;
    totalRecord: number;
}
export class FilterDataViewModel<T>  implements IFilterDataViewModel<T> {
    data: T[];
    page: number;
    pageSize: number;
    totalRecord: number;
}
