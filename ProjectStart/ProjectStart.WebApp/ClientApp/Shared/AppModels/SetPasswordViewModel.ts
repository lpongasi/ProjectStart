
export interface ISetPasswordViewModel  {
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
export class SetPasswordViewModel  implements ISetPasswordViewModel {
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
