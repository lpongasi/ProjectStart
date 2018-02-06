/**
 * Interface for: ProjectStart.WebApp.Models.ManageViewModels.EnableAuthenticatorViewModel
 */
export interface IEnableAuthenticatorViewModel  {
    code: string;
    sharedKey: string;
    authenticatorUri: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ManageViewModels.EnableAuthenticatorViewModel
 */
export class EnableAuthenticatorViewModel  implements IEnableAuthenticatorViewModel {
    code: string;
    sharedKey: string;
    authenticatorUri: string;
    constructor() {
    // nothing
    }
}
