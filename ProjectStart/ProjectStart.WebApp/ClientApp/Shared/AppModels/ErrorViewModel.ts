/**
 * Interface for: ProjectStart.ViewModel.ErrorViewModel
 */
export interface IErrorViewModel  {
    requestId: string;
    showRequestId: boolean;
}
/**
 * Base view model for ProjectStart.ViewModel.ErrorViewModel
 */
export class ErrorViewModel  implements IErrorViewModel {
    requestId: string;
    showRequestId: boolean;
}
