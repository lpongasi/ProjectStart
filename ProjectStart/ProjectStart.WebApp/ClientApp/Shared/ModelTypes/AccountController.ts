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
export default class AccountController {
    // get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
    public Login_get = (returnUrl: string): AxiosPromise<Response> => Api('get', `Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
    public Login_post = (model: LoginViewModel, returnUrl: string): AxiosPromise<Response> => Api('post', `Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
    public LoginWith2fa_get = (rememberMe: boolean, returnUrl: string): AxiosPromise<Response> => Api('get', `Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
    public LoginWith2fa_post = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string): AxiosPromise<Response> => Api('post', `Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
    public LoginWithRecoveryCode_get = (returnUrl: string): AxiosPromise<Response> => Api('get', `Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
    public LoginWithRecoveryCode_post = (model: LoginWithRecoveryCodeViewModel, returnUrl: string): AxiosPromise<Response> => Api('post', `Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/lockout
    public Lockout_get = (): AxiosPromise<Response> => Api('get', `Account/lockout`, null);
    // get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
    public Register_get = (returnUrl: string): AxiosPromise<Response> => Api('get', `Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
    public Register_post = (model: RegisterViewModel, returnUrl: string): AxiosPromise<Response> => Api('post', `Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // post: Account/logout
    public Logout_post = (): AxiosPromise<Response> => Api('post', `Account/logout`, null);
    // post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
    public ExternalLogin_post = (provider: string, returnUrl: string): AxiosPromise<Response> => Api('post', `Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
    public ExternalLoginCallback_get = (returnUrl: string, remoteError: string): AxiosPromise<Response> => Api('get', `Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null);
    // post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
    public ExternalLoginConfirmation_post = (model: ExternalLoginViewModel, returnUrl: string): AxiosPromise<Response> => Api('post', `Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
    public ConfirmEmail_get = (userId: string, code: string): AxiosPromise<Response> => Api('get', `Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null);
    // get: Account/forgotPassword
    public ForgotPassword_get = (): AxiosPromise<Response> => Api('get', `Account/forgotPassword`, null);
    // post: Account/forgotPassword
    public ForgotPassword_post = (model: ForgotPasswordViewModel): AxiosPromise<Response> => Api('post', `Account/forgotPassword`, model);
    // get: Account/forgotPasswordConfirmation
    public ForgotPasswordConfirmation_get = (): AxiosPromise<Response> => Api('get', `Account/forgotPasswordConfirmation`, null);
    // get: Account/resetPassword?code=${encodeURIComponent(code)}
    public ResetPassword_get = (code: string): AxiosPromise<Response> => Api('get', `Account/resetPassword?code=${encodeURIComponent(code)}`, null);
    // post: Account/resetPassword
    public ResetPassword_post = (model: ResetPasswordViewModel): AxiosPromise<Response> => Api('post', `Account/resetPassword`, model);
    // get: Account/resetPasswordConfirmation
    public ResetPasswordConfirmation_get = (): AxiosPromise<Response> => Api('get', `Account/resetPasswordConfirmation`, null);
    // get: Account/accessDenied
    public AccessDenied_get = (): AxiosPromise<Response> => Api('get', `Account/accessDenied`, null);
}
