import { AxiosPromise } from 'axios';
import { ChangePasswordViewModel } from 'shared/AppModels/ChangePasswordViewModel';
import { EnableAuthenticatorViewModel } from 'shared/AppModels/EnableAuthenticatorViewModel';
import { IndexViewModel } from 'shared/AppModels/IndexViewModel';
import { RemoveLoginViewModel } from 'shared/AppModels/RemoveLoginViewModel';
import { SetPasswordViewModel } from 'shared/AppModels/SetPasswordViewModel';
import { Api } from 'shared/Component/api';


// get: Manage/index?namessss=${encodeURIComponent(namessss)}
export const indexget = (namessss: string): AxiosPromise<any> => Api('get', `/Manage/index?namessss=${encodeURIComponent(namessss)}`, null);
// post: Manage/index
export const indexpost = (model: IndexViewModel): AxiosPromise<any> => Api('post', `/Manage/index`, model);
// post: Manage/sendVerificationEmail
export const sendVerificationEmailpost = (model: IndexViewModel): AxiosPromise<any> => Api('post', `/Manage/sendVerificationEmail`, model);
// get: Manage/changePassword
export const changePasswordget = (): AxiosPromise<any> => Api('get', `/Manage/changePassword`, null);
// post: Manage/changePassword
export const changePasswordpost = (model: ChangePasswordViewModel): AxiosPromise<any> => Api('post', `/Manage/changePassword`, model);
// get: Manage/setPassword
export const setPasswordget = (): AxiosPromise<any> => Api('get', `/Manage/setPassword`, null);
// post: Manage/setPassword
export const setPasswordpost = (model: SetPasswordViewModel): AxiosPromise<any> => Api('post', `/Manage/setPassword`, model);
// get: Manage/externalLogins
export const externalLoginsget = (): AxiosPromise<any> => Api('get', `/Manage/externalLogins`, null);
// post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
export const linkLoginpost = (provider: string): AxiosPromise<any> => Api('post', `/Manage/linkLogin?provider=${encodeURIComponent(provider)}`, null);
// get: Manage/linkLoginCallback
export const linkLoginCallbackget = (): AxiosPromise<any> => Api('get', `/Manage/linkLoginCallback`, null);
// post: Manage/removeLogin
export const removeLoginpost = (model: RemoveLoginViewModel): AxiosPromise<any> => Api('post', `/Manage/removeLogin`, model);
// get: Manage/twoFactorAuthentication
export const twoFactorAuthenticationget = (): AxiosPromise<any> => Api('get', `/Manage/twoFactorAuthentication`, null);
// get: Manage/disable2faWarning
export const disable2faWarningget = (): AxiosPromise<any> => Api('get', `/Manage/disable2faWarning`, null);
// post: Manage/disable2fa
export const disable2fapost = (): AxiosPromise<any> => Api('post', `/Manage/disable2fa`, null);
// get: Manage/enableAuthenticator
export const enableAuthenticatorget = (): AxiosPromise<any> => Api('get', `/Manage/enableAuthenticator`, null);
// post: Manage/enableAuthenticator
export const enableAuthenticatorpost = (model: EnableAuthenticatorViewModel): AxiosPromise<any> => Api('post', `/Manage/enableAuthenticator`, model);
// get: Manage/resetAuthenticatorWarning
export const resetAuthenticatorWarningget = (): AxiosPromise<any> => Api('get', `/Manage/resetAuthenticatorWarning`, null);
// post: Manage/resetAuthenticator
export const resetAuthenticatorpost = (): AxiosPromise<any> => Api('post', `/Manage/resetAuthenticator`, null);
// get: Manage/generateRecoveryCodes
export const generateRecoveryCodesget = (): AxiosPromise<any> => Api('get', `/Manage/generateRecoveryCodes`, null);

