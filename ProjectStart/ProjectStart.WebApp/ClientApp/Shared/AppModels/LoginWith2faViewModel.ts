/**
 * Interface for: ProjectStart.ViewModel.AccountViewModels.LoginWith2faViewModel
 */
export interface ILoginWith2faViewModel  {
    twoFactorCode: string;
    rememberMachine: boolean;
    rememberMe: boolean;
}
/**
 * Base view model for ProjectStart.ViewModel.AccountViewModels.LoginWith2faViewModel
 */
export class LoginWith2faViewModel  implements ILoginWith2faViewModel {
    twoFactorCode: string;
    rememberMachine: boolean;
    rememberMe: boolean;
}
