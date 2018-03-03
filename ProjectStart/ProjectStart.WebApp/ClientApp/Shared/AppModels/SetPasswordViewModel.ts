/**
 * Interface for: ProjectStart.ViewModel.ManageViewModels.SetPasswordViewModel
 */
export interface ISetPasswordViewModel  {
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
/**
 * Base view model for ProjectStart.ViewModel.ManageViewModels.SetPasswordViewModel
 */
export class SetPasswordViewModel  implements ISetPasswordViewModel {
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
