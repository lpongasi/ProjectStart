/**
 * Interface for: ProjectStart.WebApp.Models.AccountViewModels.ForgotPasswordViewModel
 */
export interface IForgotPasswordViewModel  {
    email: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.AccountViewModels.ForgotPasswordViewModel
 */
export class ForgotPasswordViewModel  implements IForgotPasswordViewModel {
    email: string;
    constructor() {
    // nothing
    }
}
