/**
 * Interface for: ProjectStart.ViewModel.ManageViewModels.ExternalLoginsViewModel
 */
export interface IExternalLoginsViewModel  {
    currentLogins: any[];
    otherLogins: any[];
    showRemoveButton: boolean;
    statusMessage: string;
}
/**
 * Base view model for ProjectStart.ViewModel.ManageViewModels.ExternalLoginsViewModel
 */
export class ExternalLoginsViewModel  implements IExternalLoginsViewModel {
    currentLogins: any[];
    otherLogins: any[];
    showRemoveButton: boolean;
    statusMessage: string;
}
