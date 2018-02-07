/**
 * Interface for: ProjectStart.WebApp.Models.ManageViewModels.ExternalLoginsViewModel
 */
export interface IExternalLoginsViewModel  {
    currentLogins: any[];
    otherLogins: any[];
    showRemoveButton: boolean;
    statusMessage: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ManageViewModels.ExternalLoginsViewModel
 */
export class ExternalLoginsViewModel  implements IExternalLoginsViewModel {
    currentLogins: any[];
    otherLogins: any[];
    showRemoveButton: boolean;
    statusMessage: string;
}
