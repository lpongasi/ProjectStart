
export interface IResetPasswordViewModel  {
    email: string;
    password: string;
    confirmPassword: string;
    code: string;
}
export class ResetPasswordViewModel  implements IResetPasswordViewModel {
    email: string;
    password: string;
    confirmPassword: string;
    code: string;
}
