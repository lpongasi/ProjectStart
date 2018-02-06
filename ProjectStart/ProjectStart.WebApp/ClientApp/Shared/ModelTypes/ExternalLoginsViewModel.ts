/**
 * Interface for: ProjectStart.WebApp.Models.ManageViewModels.ExternalLoginsViewModel
 */
export interface IExternalLoginsViewModel  {
    currentLogins: UserLoginInfo[];
    otherLogins: AuthenticationScheme[];
    showRemoveButton: boolean;
    statusMessage: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ManageViewModels.ExternalLoginsViewModel
 */
export class ExternalLoginsViewModel  implements IExternalLoginsViewModel {
    currentLogins: UserLoginInfo[];
    otherLogins: AuthenticationScheme[];
    showRemoveButton: boolean;
    statusMessage: string;
    constructor() {
    // nothing
    }
}
