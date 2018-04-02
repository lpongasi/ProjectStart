/**
 * Interface for: ProjectStart.ViewModel.AccountViewModels.RegisterViewModel
 */
export interface IRegisterViewModel  {
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    middleName: string;
    address: string;
    address2: string;
    postalCode: string;
    city: string;
}
/**
 * Base view model for ProjectStart.ViewModel.AccountViewModels.RegisterViewModel
 */
export class RegisterViewModel  implements IRegisterViewModel {
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    middleName: string;
    address: string;
    address2: string;
    postalCode: string;
    city: string;
}
