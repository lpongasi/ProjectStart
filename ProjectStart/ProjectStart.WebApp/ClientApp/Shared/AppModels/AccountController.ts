import { AxiosPromise } from 'axios';
import { IResponse } from 'shared/AppModels/AppResponse';
import { ExternalLoginViewModel } from 'shared/AppModels/ExternalLoginViewModel';
import { ForgotPasswordViewModel } from 'shared/AppModels/ForgotPasswordViewModel';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { LoginWith2faViewModel } from 'shared/AppModels/LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from 'shared/AppModels/LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import { ResetPasswordViewModel } from 'shared/AppModels/ResetPasswordViewModel';
import { Api } from 'shared/Component/api';

export default class AccountController {
    // get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
    public loginget = (returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
    public loginpost = (model: LoginViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
    public loginWith2faget = (rememberMe: boolean, returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
    public loginWith2fapost = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
    public loginWithRecoveryCodeget = (returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
    public loginWithRecoveryCodepost = (model: LoginWithRecoveryCodeViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/lockout
    public lockoutget = (): AxiosPromise<IResponse> => Api('get', `/Account/lockout`, null);
    // get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
    public registerget = (returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
    public registerpost = (model: RegisterViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // post: Account/logout
    public logoutpost = (): AxiosPromise<IResponse> => Api('post', `/Account/logout`, null);
    // post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
    public externalLoginpost = (provider: string, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
    // get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
    public externalLoginCallbackget = (returnUrl: string, remoteError: string): AxiosPromise<IResponse> => Api('get', `/Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null);
    // post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
    public externalLoginConfirmationpost = (model: ExternalLoginViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model);
    // get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
    public confirmEmailget = (userId: string, code: string): AxiosPromise<IResponse> => Api('get', `/Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null);
    // get: Account/forgotPassword
    public forgotPasswordget = (): AxiosPromise<IResponse> => Api('get', `/Account/forgotPassword`, null);
    // post: Account/forgotPassword
    public forgotPasswordpost = (model: ForgotPasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Account/forgotPassword`, model);
    // get: Account/forgotPasswordConfirmation
    public forgotPasswordConfirmationget = (): AxiosPromise<IResponse> => Api('get', `/Account/forgotPasswordConfirmation`, null);
    // get: Account/resetPassword?code=${encodeURIComponent(code)}
    public resetPasswordget = (code: string): AxiosPromise<IResponse> => Api('get', `/Account/resetPassword?code=${encodeURIComponent(code)}`, null);
    // post: Account/resetPassword
    public resetPasswordpost = (model: ResetPasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Account/resetPassword`, model);
    // get: Account/resetPasswordConfirmation
    public resetPasswordConfirmationget = (): AxiosPromise<IResponse> => Api('get', `/Account/resetPasswordConfirmation`, null);
    // get: Account/accessDenied
    public accessDeniedget = (): AxiosPromise<IResponse> => Api('get', `/Account/accessDenied`, null);
}
