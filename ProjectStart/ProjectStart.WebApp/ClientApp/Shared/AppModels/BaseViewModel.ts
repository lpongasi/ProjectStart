import { IPageContent } from 'shared/AppModels/IPageContent';

export interface IBaseViewModel<T>  {
    currentPage: T;
    metaTags: { [key: string]: string; };
}
export class BaseViewModel<T>  implements IBaseViewModel<T> {
    currentPage: T;
    metaTags: { [key: string]: string; };
}
