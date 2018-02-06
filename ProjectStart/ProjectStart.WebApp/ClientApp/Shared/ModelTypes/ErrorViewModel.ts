/**
 * Interface for: ProjectStart.WebApp.Models.ErrorViewModel
 */
export interface IErrorViewModel  {
    requestId: string;
    showRequestId: boolean;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ErrorViewModel
 */
export class ErrorViewModel  implements IErrorViewModel {
    requestId: string;
    showRequestId: boolean;
    constructor() {
    // nothing
    }
}
