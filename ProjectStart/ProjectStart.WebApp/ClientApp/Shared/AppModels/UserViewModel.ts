/**
 * Interface for: ProjectStart.ViewModel.AccountViewModels.UserViewModel
 */
export interface IUserViewModel  {
    email: string;
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
 * Base view model for ProjectStart.ViewModel.AccountViewModels.UserViewModel
 */
export class UserViewModel  implements IUserViewModel {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    middleName: string;
    address: string;
    address2: string;
    postalCode: string;
    city: string;
}
