
export interface IEnableAuthenticatorViewModel  {
    code: string;
    sharedKey: string;
    authenticatorUri: string;
}
export class EnableAuthenticatorViewModel  implements IEnableAuthenticatorViewModel {
    code: string;
    sharedKey: string;
    authenticatorUri: string;
}
