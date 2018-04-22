import { UserViewModel, IUserViewModel} from 'shared/AppModels/UserViewModel';

export interface IRegisterViewModel extends IUserViewModel {
    password: string;
    confirmPassword: string;
}
export class RegisterViewModel extends UserViewModel implements IRegisterViewModel {
    password: string;
    confirmPassword: string;
}
