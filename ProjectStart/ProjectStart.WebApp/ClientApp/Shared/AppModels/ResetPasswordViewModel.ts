/**
 * Interface for: ProjectStart.WebApp.Models.AccountViewModels.ResetPasswordViewModel
 */
export interface IResetPasswordViewModel  {
    email: string;
    password: string;
    confirmPassword: string;
    code: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.AccountViewModels.ResetPasswordViewModel
 */
export class ResetPasswordViewModel  implements IResetPasswordViewModel {
    email: string;
    password: string;
    confirmPassword: string;
    code: string;
}
