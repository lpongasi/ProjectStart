import { ChangePasswordViewModel } from 'shared/AppModels/ChangePasswordViewModel';
import { EnableAuthenticatorViewModel } from 'shared/AppModels/EnableAuthenticatorViewModel';
import { IndexViewModel } from 'shared/AppModels/IndexViewModel';
import { RemoveLoginViewModel } from 'shared/AppModels/RemoveLoginViewModel';
import { SetPasswordViewModel } from 'shared/AppModels/SetPasswordViewModel';
import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for get: Manage/index?namessss=${encodeURIComponent(namessss)}
export const getIndexActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.Index.get');
// get: Manage/index?namessss=${encodeURIComponent(namessss)}
export const getIndex = (namessss: string): Promise<any> => Api('get', `/Manage/index?namessss=${encodeURIComponent(namessss)}`, null, getIndexActions);
// State for post: Manage/index
export const postIndexActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.Index.post');
// post: Manage/index
export const postIndex = (model: IndexViewModel): Promise<any> => Api('post', `/Manage/index`, model, postIndexActions);
// State for post: Manage/sendVerificationEmail
export const postSendVerificationEmailActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.SendVerificationEmail.post');
// post: Manage/sendVerificationEmail
export const postSendVerificationEmail = (model: IndexViewModel): Promise<any> => Api('post', `/Manage/sendVerificationEmail`, model, postSendVerificationEmailActions);
// State for get: Manage/changePassword
export const getChangePasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.ChangePassword.get');
// get: Manage/changePassword
export const getChangePassword = (): Promise<any> => Api('get', `/Manage/changePassword`, null, getChangePasswordActions);
// State for post: Manage/changePassword
export const postChangePasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.ChangePassword.post');
// post: Manage/changePassword
export const postChangePassword = (model: ChangePasswordViewModel): Promise<any> => Api('post', `/Manage/changePassword`, model, postChangePasswordActions);
// State for get: Manage/setPassword
export const getSetPasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.SetPassword.get');
// get: Manage/setPassword
export const getSetPassword = (): Promise<any> => Api('get', `/Manage/setPassword`, null, getSetPasswordActions);
// State for post: Manage/setPassword
export const postSetPasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.SetPassword.post');
// post: Manage/setPassword
export const postSetPassword = (model: SetPasswordViewModel): Promise<any> => Api('post', `/Manage/setPassword`, model, postSetPasswordActions);
// State for get: Manage/externalLogins
export const getExternalLoginsActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.ExternalLogins.get');
// get: Manage/externalLogins
export const getExternalLogins = (): Promise<any> => Api('get', `/Manage/externalLogins`, null, getExternalLoginsActions);
// State for post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
export const postLinkLoginActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.LinkLogin.post');
// post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
export const postLinkLogin = (provider: string): Promise<any> => Api('post', `/Manage/linkLogin?provider=${encodeURIComponent(provider)}`, null, postLinkLoginActions);
// State for get: Manage/linkLoginCallback
export const getLinkLoginCallbackActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.LinkLoginCallback.get');
// get: Manage/linkLoginCallback
export const getLinkLoginCallback = (): Promise<any> => Api('get', `/Manage/linkLoginCallback`, null, getLinkLoginCallbackActions);
// State for post: Manage/removeLogin
export const postRemoveLoginActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.RemoveLogin.post');
// post: Manage/removeLogin
export const postRemoveLogin = (model: RemoveLoginViewModel): Promise<any> => Api('post', `/Manage/removeLogin`, model, postRemoveLoginActions);
// State for get: Manage/twoFactorAuthentication
export const getTwoFactorAuthenticationActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.TwoFactorAuthentication.get');
// get: Manage/twoFactorAuthentication
export const getTwoFactorAuthentication = (): Promise<any> => Api('get', `/Manage/twoFactorAuthentication`, null, getTwoFactorAuthenticationActions);
// State for get: Manage/disable2faWarning
export const getDisable2faWarningActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.Disable2faWarning.get');
// get: Manage/disable2faWarning
export const getDisable2faWarning = (): Promise<any> => Api('get', `/Manage/disable2faWarning`, null, getDisable2faWarningActions);
// State for post: Manage/disable2fa
export const postDisable2faActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.Disable2fa.post');
// post: Manage/disable2fa
export const postDisable2fa = (): Promise<any> => Api('post', `/Manage/disable2fa`, null, postDisable2faActions);
// State for get: Manage/enableAuthenticator
export const getEnableAuthenticatorActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.EnableAuthenticator.get');
// get: Manage/enableAuthenticator
export const getEnableAuthenticator = (): Promise<any> => Api('get', `/Manage/enableAuthenticator`, null, getEnableAuthenticatorActions);
// State for post: Manage/enableAuthenticator
export const postEnableAuthenticatorActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.EnableAuthenticator.post');
// post: Manage/enableAuthenticator
export const postEnableAuthenticator = (model: EnableAuthenticatorViewModel): Promise<any> => Api('post', `/Manage/enableAuthenticator`, model, postEnableAuthenticatorActions);
// State for get: Manage/resetAuthenticatorWarning
export const getResetAuthenticatorWarningActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.ResetAuthenticatorWarning.get');
// get: Manage/resetAuthenticatorWarning
export const getResetAuthenticatorWarning = (): Promise<any> => Api('get', `/Manage/resetAuthenticatorWarning`, null, getResetAuthenticatorWarningActions);
// State for post: Manage/resetAuthenticator
export const postResetAuthenticatorActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.ResetAuthenticator.post');
// post: Manage/resetAuthenticator
export const postResetAuthenticator = (): Promise<any> => Api('post', `/Manage/resetAuthenticator`, null, postResetAuthenticatorActions);
// State for get: Manage/generateRecoveryCodes
export const getGenerateRecoveryCodesActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.ManageController.GenerateRecoveryCodes.get');
// get: Manage/generateRecoveryCodes
export const getGenerateRecoveryCodes = (): Promise<any> => Api('get', `/Manage/generateRecoveryCodes`, null, getGenerateRecoveryCodesActions);

