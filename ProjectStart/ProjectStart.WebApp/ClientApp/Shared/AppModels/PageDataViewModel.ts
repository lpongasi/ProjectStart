/**
 * Interface for: ProjectStart.Common.ViewModel.PageDataViewModel
 */
export interface IPageDataViewModel  {
    name: string;
    nameUrl: string;
    title: string;
    description: string;
}
/**
 * Base view model for ProjectStart.Common.ViewModel.PageDataViewModel
 */
export class PageDataViewModel  implements IPageDataViewModel {
    name: string;
    nameUrl: string;
    title: string;
    description: string;
}
