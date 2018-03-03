/**
 * Interface for: ProjectStart.ViewModel.ManageViewModels.EnableAuthenticatorViewModel
 */
export interface IEnableAuthenticatorViewModel  {
    code: string;
    sharedKey: string;
    authenticatorUri: string;
}
/**
 * Base view model for ProjectStart.ViewModel.ManageViewModels.EnableAuthenticatorViewModel
 */
export class EnableAuthenticatorViewModel  implements IEnableAuthenticatorViewModel {
    code: string;
    sharedKey: string;
    authenticatorUri: string;
}
