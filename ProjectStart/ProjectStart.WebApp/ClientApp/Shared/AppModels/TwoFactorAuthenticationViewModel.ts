﻿/**
 * Interface for: ProjectStart.ViewModel.ManageViewModels.TwoFactorAuthenticationViewModel
 */
export interface ITwoFactorAuthenticationViewModel  {
    hasAuthenticator: boolean;
    recoveryCodesLeft: number;
    is2faEnabled: boolean;
}
/**
 * Base view model for ProjectStart.ViewModel.ManageViewModels.TwoFactorAuthenticationViewModel
 */
export class TwoFactorAuthenticationViewModel  implements ITwoFactorAuthenticationViewModel {
    hasAuthenticator: boolean;
    recoveryCodesLeft: number;
    is2faEnabled: boolean;
}
