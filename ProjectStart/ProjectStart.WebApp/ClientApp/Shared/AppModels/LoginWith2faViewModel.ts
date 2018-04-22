
export interface ILoginWith2faViewModel  {
    twoFactorCode: string;
    rememberMachine: boolean;
    rememberMe: boolean;
}
export class LoginWith2faViewModel  implements ILoginWith2faViewModel {
    twoFactorCode: string;
    rememberMachine: boolean;
    rememberMe: boolean;
}
