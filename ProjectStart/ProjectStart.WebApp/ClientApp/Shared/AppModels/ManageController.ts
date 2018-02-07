import { AxiosPromise } from 'axios';
import { IResponse } from 'shared/AppModels/AppResponse';
import { ChangePasswordViewModel } from 'shared/AppModels/ChangePasswordViewModel';
import { EnableAuthenticatorViewModel } from 'shared/AppModels/EnableAuthenticatorViewModel';
import { IndexViewModel } from 'shared/AppModels/IndexViewModel';
import { RemoveLoginViewModel } from 'shared/AppModels/RemoveLoginViewModel';
import { SetPasswordViewModel } from 'shared/AppModels/SetPasswordViewModel';
import { Api } from 'shared/Component/api';

export default class ManageController {
    // get: Manage/index?namessss=${encodeURIComponent(namessss)}
    public indexget = (namessss: string): AxiosPromise<IResponse> => Api('get', `/Manage/index?namessss=${encodeURIComponent(namessss)}`, null);
    // post: Manage/index
    public indexpost = (model: IndexViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/index`, model);
    // post: Manage/sendVerificationEmail
    public sendVerificationEmailpost = (model: IndexViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/sendVerificationEmail`, model);
    // get: Manage/changePassword
    public changePasswordget = (): AxiosPromise<IResponse> => Api('get', `/Manage/changePassword`, null);
    // post: Manage/changePassword
    public changePasswordpost = (model: ChangePasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/changePassword`, model);
    // get: Manage/setPassword
    public setPasswordget = (): AxiosPromise<IResponse> => Api('get', `/Manage/setPassword`, null);
    // post: Manage/setPassword
    public setPasswordpost = (model: SetPasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/setPassword`, model);
    // get: Manage/externalLogins
    public externalLoginsget = (): AxiosPromise<IResponse> => Api('get', `/Manage/externalLogins`, null);
    // post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
    public linkLoginpost = (provider: string): AxiosPromise<IResponse> => Api('post', `/Manage/linkLogin?provider=${encodeURIComponent(provider)}`, null);
    // get: Manage/linkLoginCallback
    public linkLoginCallbackget = (): AxiosPromise<IResponse> => Api('get', `/Manage/linkLoginCallback`, null);
    // post: Manage/removeLogin
    public removeLoginpost = (model: RemoveLoginViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/removeLogin`, model);
    // get: Manage/twoFactorAuthentication
    public twoFactorAuthenticationget = (): AxiosPromise<IResponse> => Api('get', `/Manage/twoFactorAuthentication`, null);
    // get: Manage/disable2faWarning
    public disable2faWarningget = (): AxiosPromise<IResponse> => Api('get', `/Manage/disable2faWarning`, null);
    // post: Manage/disable2fa
    public disable2fapost = (): AxiosPromise<IResponse> => Api('post', `/Manage/disable2fa`, null);
    // get: Manage/enableAuthenticator
    public enableAuthenticatorget = (): AxiosPromise<IResponse> => Api('get', `/Manage/enableAuthenticator`, null);
    // post: Manage/enableAuthenticator
    public enableAuthenticatorpost = (model: EnableAuthenticatorViewModel): AxiosPromise<IResponse> => Api('post', `/Manage/enableAuthenticator`, model);
    // get: Manage/resetAuthenticatorWarning
    public resetAuthenticatorWarningget = (): AxiosPromise<IResponse> => Api('get', `/Manage/resetAuthenticatorWarning`, null);
    // post: Manage/resetAuthenticator
    public resetAuthenticatorpost = (): AxiosPromise<IResponse> => Api('post', `/Manage/resetAuthenticator`, null);
    // get: Manage/generateRecoveryCodes
    public generateRecoveryCodesget = (): AxiosPromise<IResponse> => Api('get', `/Manage/generateRecoveryCodes`, null);
}
