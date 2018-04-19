import { UserViewModel, IUserViewModel} from 'shared/AppModels/UserViewModel';
/**
 * Interface for: ProjectStart.ViewModel.AccountViewModels.RegisterViewModel
 */
export interface IRegisterViewModel extends IUserViewModel {
    password: string;
    confirmPassword: string;
}
/**
 * Base view model for ProjectStart.ViewModel.AccountViewModels.RegisterViewModel
 */
export class RegisterViewModel extends UserViewModel implements IRegisterViewModel {
    password: string;
    confirmPassword: string;
}
