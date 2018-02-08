import { AxiosPromise } from 'axios';
import { ExternalLoginViewModel } from 'shared/AppModels/ExternalLoginViewModel';
import { ForgotPasswordViewModel } from 'shared/AppModels/ForgotPasswordViewModel';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { LoginWith2faViewModel } from 'shared/AppModels/LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from 'shared/AppModels/LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import { ResetPasswordViewModel } from 'shared/AppModels/ResetPasswordViewModel';
import { Response } from 'shared/AppModels/Response';
import { Api } from 'shared/Component/api';


// get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const loginget = (returnUrl: string): AxiosPromise<any> => Api('get', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const loginpost = (model: LoginViewModel, returnUrl: string): AxiosPromise<Response> => Api('post', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const loginWith2faget = (rememberMe: boolean, returnUrl: string): AxiosPromise<any> => Api('get', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const loginWith2fapost = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string): AxiosPromise<any> => Api('post', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const loginWithRecoveryCodeget = (returnUrl: string): AxiosPromise<any> => Api('get', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const loginWithRecoveryCodepost = (model: LoginWithRecoveryCodeViewModel, returnUrl: string): AxiosPromise<any> => Api('post', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/lockout
export const lockoutget = (): AxiosPromise<any> => Api('get', `/Account/lockout`, null);
// get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const registerget = (returnUrl: string): AxiosPromise<any> => Api('get', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const registerpost = (model: RegisterViewModel, returnUrl: string): AxiosPromise<any> => Api('post', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// post: Account/logout
export const logoutpost = (): AxiosPromise<any> => Api('post', `/Account/logout`, null);
// post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
export const externalLoginpost = (provider: string, returnUrl: string): AxiosPromise<any> => Api('post', `/Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
// get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
export const externalLoginCallbackget = (returnUrl: string, remoteError: string): AxiosPromise<any> => Api('get', `/Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null);
// post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
export const externalLoginConfirmationpost = (model: ExternalLoginViewModel, returnUrl: string): AxiosPromise<any> => Api('post', `/Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
export const confirmEmailget = (userId: string, code: string): AxiosPromise<any> => Api('get', `/Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null);
// get: Account/forgotPassword
export const forgotPasswordget = (): AxiosPromise<any> => Api('get', `/Account/forgotPassword`, null);
// post: Account/forgotPassword
export const forgotPasswordpost = (model: ForgotPasswordViewModel): AxiosPromise<any> => Api('post', `/Account/forgotPassword`, model);
// get: Account/forgotPasswordConfirmation
export const forgotPasswordConfirmationget = (): AxiosPromise<any> => Api('get', `/Account/forgotPasswordConfirmation`, null);
// get: Account/resetPassword?code=${encodeURIComponent(code)}
export const resetPasswordget = (code: string): AxiosPromise<any> => Api('get', `/Account/resetPassword?code=${encodeURIComponent(code)}`, null);
// post: Account/resetPassword
export const resetPasswordpost = (model: ResetPasswordViewModel): AxiosPromise<any> => Api('post', `/Account/resetPassword`, model);
// get: Account/resetPasswordConfirmation
export const resetPasswordConfirmationget = (): AxiosPromise<any> => Api('get', `/Account/resetPasswordConfirmation`, null);
// get: Account/accessDenied
export const accessDeniedget = (): AxiosPromise<any> => Api('get', `/Account/accessDenied`, null);

