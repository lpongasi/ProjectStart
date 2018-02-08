import { AxiosPromise } from 'axios';
import { IResponse } from 'shared/AppModels/AppResponse';
import { ChangePasswordViewModel } from 'shared/AppModels/ChangePasswordViewModel';
import { EnableAuthenticatorViewModel } from 'shared/AppModels/EnableAuthenticatorViewModel';
import { IndexViewModel } from 'shared/AppModels/IndexViewModel';
import { RemoveLoginViewModel } from 'shared/AppModels/RemoveLoginViewModel';
import { SetPasswordViewModel } from 'shared/AppModels/SetPasswordViewModel';
import { Api } from 'shared/Component/api';


// get: Manage/index?namessss=${encodeURIComponent(namessss)}
export const indexget = (namessss: string): AxiosPromise<IResponse> => Api('get', `/Manage/index?namessss=${encodeURIComponent(namessss)}`, null);
// post: Manage/index
export const indexpost = (model: IndexViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/index`, model);
// post: Manage/sendVerificationEmail
export const sendVerificationEmailpost = (model: IndexViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/sendVerificationEmail`, model);
// get: Manage/changePassword
export const changePasswordget = (): AxiosPromise<IResponse> => Api('get', `/Manage/changePassword`, null);
// post: Manage/changePassword
export const changePasswordpost = (model: ChangePasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/changePassword`, model);
// get: Manage/setPassword
export const setPasswordget = (): AxiosPromise<IResponse> => Api('get', `/Manage/setPassword`, null);
// post: Manage/setPassword
export const setPasswordpost = (model: SetPasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/setPassword`, model);
// get: Manage/externalLogins
export const externalLoginsget = (): AxiosPromise<IResponse> => Api('get', `/Manage/externalLogins`, null);
// post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
export const linkLoginpost = (provider: string): AxiosPromise<IResponse> => Api('post', `/Manage/linkLogin?provider=${encodeURIComponent(provider)}`, null);
// get: Manage/linkLoginCallback
export const linkLoginCallbackget = (): AxiosPromise<IResponse> => Api('get', `/Manage/linkLoginCallback`, null);
// post: Manage/removeLogin
export const removeLoginpost = (model: RemoveLoginViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/removeLogin`, model);
// get: Manage/twoFactorAuthentication
export const twoFactorAuthenticationget = (): AxiosPromise<IResponse> => Api('get', `/Manage/twoFactorAuthentication`, null);
// get: Manage/disable2faWarning
export const disable2faWarningget = (): AxiosPromise<IResponse> => Api('get', `/Manage/disable2faWarning`, null);
// post: Manage/disable2fa
export const disable2fapost = (): AxiosPromise<IResponse> => Api('post', `/Manage/disable2fa`, null);
// get: Manage/enableAuthenticator
export const enableAuthenticatorget = (): AxiosPromise<IResponse> => Api('get', `/Manage/enableAuthenticator`, null);
// post: Manage/enableAuthenticator
export const enableAuthenticatorpost = (model: EnableAuthenticatorViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/enableAuthenticator`, model);
// get: Manage/resetAuthenticatorWarning
export const resetAuthenticatorWarningget = (): AxiosPromise<IResponse> => Api('get', `/Manage/resetAuthenticatorWarning`, null);
// post: Manage/resetAuthenticator
export const resetAuthenticatorpost = (): AxiosPromise<IResponse> => Api('post', `/Manage/resetAuthenticator`, null);
// get: Manage/generateRecoveryCodes
export const generateRecoveryCodesget = (): AxiosPromise<IResponse> => Api('get', `/Manage/generateRecoveryCodes`, null);

