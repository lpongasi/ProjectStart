import { IPageContent } from 'shared/AppModels/IPageContent';
import { T } from 'shared/AppModels/T';
/**
 * Interface for: ProjectStart.ViewModel.BaseViewModel<T>
 */
export interface IBaseViewModel<T>  {
    currentPage: T;
    metaTags: { [key: string]: string; };
}
/**
 * Base view model for ProjectStart.ViewModel.BaseViewModel<T>
 */
export class BaseViewModel<T>  implements IBaseViewModel<T> {
    currentPage: T;
    metaTags: { [key: string]: string; };
}
