
export interface ITwoFactorAuthenticationViewModel  {
    hasAuthenticator: boolean;
    recoveryCodesLeft: number;
    is2faEnabled: boolean;
}
export class TwoFactorAuthenticationViewModel  implements ITwoFactorAuthenticationViewModel {
    hasAuthenticator: boolean;
    recoveryCodesLeft: number;
    is2faEnabled: boolean;
}
