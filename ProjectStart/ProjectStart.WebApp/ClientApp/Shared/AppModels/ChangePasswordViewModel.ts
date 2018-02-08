﻿/**
 * Interface for: ProjectStart.WebApp.Models.ManageViewModels.ChangePasswordViewModel
 */
export interface IChangePasswordViewModel  {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}
/**
 * Base view model for ProjectStart.WebApp.Models.ManageViewModels.ChangePasswordViewModel
 */
export class ChangePasswordViewModel  implements IChangePasswordViewModel {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
    statusMessage: string;
}