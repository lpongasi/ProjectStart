/**
 * Interface for: ProjectStart.WebApp.Models.AccountViewModels.LoginViewModel
 */
export interface ILoginViewModel  {
    email: string;
    password: string;
    rememberMe: boolean;
}
/**
 * Base view model for ProjectStart.WebApp.Models.AccountViewModels.LoginViewModel
 */
export class LoginViewModel  implements ILoginViewModel {
    email: string;
    password: string;
    rememberMe: boolean;
    constructor() {
    // nothing
    }
}
