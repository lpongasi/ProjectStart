/**
 * Interface for: ProjectStart.ViewModel.ManageViewModels.RemoveLoginViewModel
 */
export interface IRemoveLoginViewModel  {
    loginProvider: string;
    providerKey: string;
}
/**
 * Base view model for ProjectStart.ViewModel.ManageViewModels.RemoveLoginViewModel
 */
export class RemoveLoginViewModel  implements IRemoveLoginViewModel {
    loginProvider: string;
    providerKey: string;
}
