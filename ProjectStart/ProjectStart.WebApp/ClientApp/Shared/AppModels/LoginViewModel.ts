
export interface ILoginViewModel  {
    email: string;
    password: string;
    rememberMe: boolean;
}
export class LoginViewModel  implements ILoginViewModel {
    email: string;
    password: string;
    rememberMe: boolean;
}
