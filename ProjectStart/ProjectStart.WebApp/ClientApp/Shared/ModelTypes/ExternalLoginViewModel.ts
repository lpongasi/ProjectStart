/**
 * Interface for: ProjectStart.WebApp.Models.AccountViewModels.ExternalLoginViewModel
 */
export interface IExternalLoginViewModel  {
    email: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.AccountViewModels.ExternalLoginViewModel
 */
export class ExternalLoginViewModel  implements IExternalLoginViewModel {
    email: string;
    constructor() {
    // nothing
    }
}
