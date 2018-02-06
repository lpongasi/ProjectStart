/**
 * Interface for: ProjectStart.WebApp.Models.ManageViewModels.IndexViewModel
 */
export interface IIndexViewModel  {
    username: string;
    isEmailConfirmed: boolean;
    email: string;
    phoneNumber: string;
    statusMessage: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ManageViewModels.IndexViewModel
 */
export class IndexViewModel  implements IIndexViewModel {
    username: string;
    isEmailConfirmed: boolean;
    email: string;
    phoneNumber: string;
    statusMessage: string;
    constructor() {
    // nothing
    }
}
