import { AxiosPromise } from 'axios';
import { Api } from 'shared/component/api';
import { ChangePasswordViewModel } from './ChangePasswordViewModel';
import { EnableAuthenticatorViewModel } from './EnableAuthenticatorViewModel';
import { ExternalLoginViewModel } from './ExternalLoginViewModel';
import { ForgotPasswordViewModel } from './ForgotPasswordViewModel';
import { IndexViewModel } from './IndexViewModel';
import { LoginViewModel } from './LoginViewModel';
import { LoginWith2faViewModel } from './LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from './LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from './RegisterViewModel';
import { RemoveLoginViewModel } from './RemoveLoginViewModel';
import { ResetPasswordViewModel } from './ResetPasswordViewModel';
import { SetPasswordViewModel } from './SetPasswordViewModel';
export default class ManageController {
    // get: Manage/index?namessss=${encodeURIComponent(namessss)}
    public Index_get = (namessss: string): AxiosPromise<Response> => Api('get', `Manage/index?namessss=${encodeURIComponent(namessss)}`, null);
    // post: Manage/index
    public Index_post = (model: IndexViewModel): AxiosPromise<Response> => Api('post', `Manage/index`, model);
    // post: Manage/sendVerificationEmail
    public SendVerificationEmail_post = (model: IndexViewModel): AxiosPromise<Response> => Api('post', `Manage/sendVerificationEmail`, model);
    // get: Manage/changePassword
    public ChangePassword_get = (): AxiosPromise<Response> => Api('get', `Manage/changePassword`, null);
    // post: Manage/changePassword
    public ChangePassword_post = (model: ChangePasswordViewModel): AxiosPromise<Response> => Api('post', `Manage/changePassword`, model);
    // get: Manage/setPassword
    public SetPassword_get = (): AxiosPromise<Response> => Api('get', `Manage/setPassword`, null);
    // post: Manage/setPassword
    public SetPassword_post = (model: SetPasswordViewModel): AxiosPromise<Response> => Api('post', `Manage/setPassword`, model);
    // get: Manage/externalLogins
    public ExternalLogins_get = (): AxiosPromise<Response> => Api('get', `Manage/externalLogins`, null);
    // post: Manage/linkLogin?provider=${encodeURIComponent(provider)}
    public LinkLogin_post = (provider: string): AxiosPromise<Response> => Api('post', `Manage/linkLogin?provider=${encodeURIComponent(provider)}`, null);
    // get: Manage/linkLoginCallback
    public LinkLoginCallback_get = (): AxiosPromise<Response> => Api('get', `Manage/linkLoginCallback`, null);
    // post: Manage/removeLogin
    public RemoveLogin_post = (model: RemoveLoginViewModel): AxiosPromise<Response> => Api('post', `Manage/removeLogin`, model);
    // get: Manage/twoFactorAuthentication
    public TwoFactorAuthentication_get = (): AxiosPromise<Response> => Api('get', `Manage/twoFactorAuthentication`, null);
    // get: Manage/disable2faWarning
    public Disable2faWarning_get = (): AxiosPromise<Response> => Api('get', `Manage/disable2faWarning`, null);
    // post: Manage/disable2fa
    public Disable2fa_post = (): AxiosPromise<Response> => Api('post', `Manage/disable2fa`, null);
    // get: Manage/enableAuthenticator
    public EnableAuthenticator_get = (): AxiosPromise<Response> => Api('get', `Manage/enableAuthenticator`, null);
    // post: Manage/enableAuthenticator
    public EnableAuthenticator_post = (model: EnableAuthenticatorViewModel): AxiosPromise<Response> => Api('post', `Manage/enableAuthenticator`, model);
    // get: Manage/resetAuthenticatorWarning
    public ResetAuthenticatorWarning_get = (): AxiosPromise<Response> => Api('get', `Manage/resetAuthenticatorWarning`, null);
    // post: Manage/resetAuthenticator
    public ResetAuthenticator_post = (): AxiosPromise<Response> => Api('post', `Manage/resetAuthenticator`, null);
    // get: Manage/generateRecoveryCodes
    public GenerateRecoveryCodes_get = (): AxiosPromise<Response> => Api('get', `Manage/generateRecoveryCodes`, null);
}
