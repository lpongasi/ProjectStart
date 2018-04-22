import { ChangePasswordViewModel } from 'shared/AppModels/ChangePasswordViewModel';
import { EnableAuthenticatorViewModel } from 'shared/AppModels/EnableAuthenticatorViewModel';
import { IndexViewModel } from 'shared/AppModels/IndexViewModel';
import { RemoveLoginViewModel } from 'shared/AppModels/RemoveLoginViewModel';
import { SetPasswordViewModel } from 'shared/AppModels/SetPasswordViewModel';
import { Api } from 'shared/Component/api';


// State for get: Manage/index
// get: Manage/index
export const getIndexActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.Index.get';
export const getIndex = (localData?: (data: any) => void): Promise<any> => Api(getIndexActionId, 'get', `/Manage/index`, null, true , localData);
// State for post: Manage/index
// post: Manage/index
export const postIndexActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.Index.post';
export const postIndex = (model: IndexViewModel, localData?: (data: any) => void): Promise<any> => Api(postIndexActionId, 'post', `/Manage/index`, model, true , localData);
// State for post: Manage/sendVerificationEmail
// post: Manage/sendVerificationEmail
export const postSendVerificationEmailActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.SendVerificationEmail.post';
export const postSendVerificationEmail = (model: IndexViewModel, localData?: (data: any) => void): Promise<any> => Api(postSendVerificationEmailActionId, 'post', `/Manage/sendVerificationEmail`, model, true , localData);
// State for get: Manage/changePassword
// get: Manage/changePassword
export const getChangePasswordActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.ChangePassword.get';
export const getChangePassword = (localData?: (data: any) => void): Promise<any> => Api(getChangePasswordActionId, 'get', `/Manage/changePassword`, null, true , localData);
// State for post: Manage/changePassword
// post: Manage/changePassword
export const postChangePasswordActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.ChangePassword.post';
export const postChangePassword = (model: ChangePasswordViewModel, localData?: (data: any) => void): Promise<any> => Api(postChangePasswordActionId, 'post', `/Manage/changePassword`, model, true , localData);
// State for get: Manage/setPassword
// get: Manage/setPassword
export const getSetPasswordActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.SetPassword.get';
export const getSetPassword = (localData?: (data: any) => void): Promise<any> => Api(getSetPasswordActionId, 'get', `/Manage/setPassword`, null, true , localData);
// State for post: Manage/setPassword
// post: Manage/setPassword
export const postSetPasswordActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.SetPassword.post';
export const postSetPassword = (model: SetPasswordViewModel, localData?: (data: any) => void): Promise<any> => Api(postSetPasswordActionId, 'post', `/Manage/setPassword`, model, true , localData);
// State for get: Manage/externalLogins
// get: Manage/externalLogins
export const getExternalLoginsActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.ExternalLogins.get';
export const getExternalLogins = (localData?: (data: any) => void): Promise<any> => Api(getExternalLoginsActionId, 'get', `/Manage/externalLogins`, null, true , localData);
// State for post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
// post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
export const postLinkLoginActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.LinkLogin.post';
export const postLinkLogin = (provider: string, localData?: (data: any) => void): Promise<any> => Api(postLinkLoginActionId, 'post', `/Manage/linkLogin?provider=${encodeURIComponent(provider)}`, null, true , localData);
// State for get: Manage/linkLoginCallback
// get: Manage/linkLoginCallback
export const getLinkLoginCallbackActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.LinkLoginCallback.get';
export const getLinkLoginCallback = (localData?: (data: any) => void): Promise<any> => Api(getLinkLoginCallbackActionId, 'get', `/Manage/linkLoginCallback`, null, true , localData);
// State for post: Manage/removeLogin
// post: Manage/removeLogin
export const postRemoveLoginActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.RemoveLogin.post';
export const postRemoveLogin = (model: RemoveLoginViewModel, localData?: (data: any) => void): Promise<any> => Api(postRemoveLoginActionId, 'post', `/Manage/removeLogin`, model, true , localData);
// State for get: Manage/twoFactorAuthentication
// get: Manage/twoFactorAuthentication
export const getTwoFactorAuthenticationActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.TwoFactorAuthentication.get';
export const getTwoFactorAuthentication = (localData?: (data: any) => void): Promise<any> => Api(getTwoFactorAuthenticationActionId, 'get', `/Manage/twoFactorAuthentication`, null, true , localData);
// State for get: Manage/disable2faWarning
// get: Manage/disable2faWarning
export const getDisable2faWarningActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.Disable2faWarning.get';
export const getDisable2faWarning = (localData?: (data: any) => void): Promise<any> => Api(getDisable2faWarningActionId, 'get', `/Manage/disable2faWarning`, null, true , localData);
// State for post: Manage/disable2fa
// post: Manage/disable2fa
export const postDisable2faActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.Disable2fa.post';
export const postDisable2fa = (localData?: (data: any) => void): Promise<any> => Api(postDisable2faActionId, 'post', `/Manage/disable2fa`, null, true , localData);
// State for get: Manage/enableAuthenticator
// get: Manage/enableAuthenticator
export const getEnableAuthenticatorActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.EnableAuthenticator.get';
export const getEnableAuthenticator = (localData?: (data: any) => void): Promise<any> => Api(getEnableAuthenticatorActionId, 'get', `/Manage/enableAuthenticator`, null, true , localData);
// State for post: Manage/enableAuthenticator
// post: Manage/enableAuthenticator
export const postEnableAuthenticatorActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.EnableAuthenticator.post';
export const postEnableAuthenticator = (model: EnableAuthenticatorViewModel, localData?: (data: any) => void): Promise<any> => Api(postEnableAuthenticatorActionId, 'post', `/Manage/enableAuthenticator`, model, true , localData);
// State for get: Manage/resetAuthenticatorWarning
// get: Manage/resetAuthenticatorWarning
export const getResetAuthenticatorWarningActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.ResetAuthenticatorWarning.get';
export const getResetAuthenticatorWarning = (localData?: (data: any) => void): Promise<any> => Api(getResetAuthenticatorWarningActionId, 'get', `/Manage/resetAuthenticatorWarning`, null, true , localData);
// State for post: Manage/resetAuthenticator
// post: Manage/resetAuthenticator
export const postResetAuthenticatorActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.ResetAuthenticator.post';
export const postResetAuthenticator = (localData?: (data: any) => void): Promise<any> => Api(postResetAuthenticatorActionId, 'post', `/Manage/resetAuthenticator`, null, true , localData);
// State for get: Manage/generateRecoveryCodes
// get: Manage/generateRecoveryCodes
export const getGenerateRecoveryCodesActionId = 'ProjectStart.WebApp.Controllers.Client.ManageController.GenerateRecoveryCodes.get';
export const getGenerateRecoveryCodes = (localData?: (data: any) => void): Promise<any> => Api(getGenerateRecoveryCodesActionId, 'get', `/Manage/generateRecoveryCodes`, null, true , localData);

