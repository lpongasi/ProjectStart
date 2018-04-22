
export interface IFilterDataViewModel<T>  {
    data: T[];
    totalRecord: number;
}
export class FilterDataViewModel<T>  implements IFilterDataViewModel<T> {
    data: T[];
    totalRecord: number;
}
