/**
 * Interface for: ProjectStart.ViewModel.AccountViewModels.LoginViewModel
 */
export interface ILoginViewModel  {
    email: string;
    password: string;
    rememberMe: boolean;
}
/**
 * Base view model for ProjectStart.ViewModel.AccountViewModels.LoginViewModel
 */
export class LoginViewModel  implements ILoginViewModel {
    email: string;
    password: string;
    rememberMe: boolean;
}
