/**
 * Interface for: ProjectStart.WebApp.Models.AccountViewModels.LoginWith2faViewModel
 */
export interface ILoginWith2faViewModel  {
    twoFactorCode: string;
    rememberMachine: boolean;
    rememberMe: boolean;
}
/**
 * Base view model for ProjectStart.WebApp.Models.AccountViewModels.LoginWith2faViewModel
 */
export class LoginWith2faViewModel  implements ILoginWith2faViewModel {
    twoFactorCode: string;
    rememberMachine: boolean;
    rememberMe: boolean;
    constructor() {
    // nothing
    }
}
