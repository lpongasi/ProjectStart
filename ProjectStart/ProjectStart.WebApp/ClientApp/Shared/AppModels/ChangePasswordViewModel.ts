
export interface IChangePasswordViewModel  {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
export class ChangePasswordViewModel  implements IChangePasswordViewModel {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
