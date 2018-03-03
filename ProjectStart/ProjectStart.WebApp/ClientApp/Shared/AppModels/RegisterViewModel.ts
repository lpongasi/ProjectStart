/**
 * Interface for: ProjectStart.ViewModel.AccountViewModels.RegisterViewModel
 */
export interface IRegisterViewModel  {
    email: string;
    password: string;
    confirmPassword: string;
}
/**
 * Base view model for ProjectStart.ViewModel.AccountViewModels.RegisterViewModel
 */
export class RegisterViewModel  implements IRegisterViewModel {
    email: string;
    password: string;
    confirmPassword: string;
}
