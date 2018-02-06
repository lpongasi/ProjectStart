/**
 * Interface for: ProjectStart.WebApp.Models.ManageViewModels.RemoveLoginViewModel
 */
export interface IRemoveLoginViewModel  {
    loginProvider: string;
    providerKey: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ManageViewModels.RemoveLoginViewModel
 */
export class RemoveLoginViewModel  implements IRemoveLoginViewModel {
    loginProvider: string;
    providerKey: string;
    constructor() {
    // nothing
    }
}
