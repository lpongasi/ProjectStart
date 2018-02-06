/**
 * Interface for: ProjectStart.WebApp.Models.AccountViewModels.RegisterViewModel
 */
export interface IRegisterViewModel  {
    email: string;
    password: string;
    confirmPassword: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.AccountViewModels.RegisterViewModel
 */
export class RegisterViewModel  implements IRegisterViewModel {
    email: string;
    password: string;
    confirmPassword: string;
    constructor() {
    // nothing
    }
}
