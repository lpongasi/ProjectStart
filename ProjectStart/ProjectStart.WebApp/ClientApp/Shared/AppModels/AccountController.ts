﻿import { AxiosPromise } from 'axios';
import { IResponse } from 'shared/AppModels/AppResponse';
import { ExternalLoginViewModel } from 'shared/AppModels/ExternalLoginViewModel';
import { ForgotPasswordViewModel } from 'shared/AppModels/ForgotPasswordViewModel';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { LoginWith2faViewModel } from 'shared/AppModels/LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from 'shared/AppModels/LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import { ResetPasswordViewModel } from 'shared/AppModels/ResetPasswordViewModel';
import { Api } from 'shared/Component/api';


// get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const loginget = (returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const loginpost = (model: LoginViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const loginWith2faget = (rememberMe: boolean, returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const loginWith2fapost = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const loginWithRecoveryCodeget = (returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const loginWithRecoveryCodepost = (model: LoginWithRecoveryCodeViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/lockout
export const lockoutget = (): AxiosPromise<IResponse> => Api('get', `/Account/lockout`, null);
// get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const registerget = (returnUrl: string): AxiosPromise<IResponse> => Api('get', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const registerpost = (model: RegisterViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// post: Account/logout
export const logoutpost = (): AxiosPromise<IResponse> => Api('post', `/Account/logout`, null);
// post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
export const externalLoginpost = (provider: string, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
// get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
export const externalLoginCallbackget = (returnUrl: string, remoteError: string): AxiosPromise<IResponse> => Api('get', `/Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null);
// post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
export const externalLoginConfirmationpost = (model: ExternalLoginViewModel, returnUrl: string): AxiosPromise<IResponse> => Api('post', `/Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
export const confirmEmailget = (userId: string, code: string): AxiosPromise<IResponse> => Api('get', `/Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null);
// get: Account/forgotPassword
export const forgotPasswordget = (): AxiosPromise<IResponse> => Api('get', `/Account/forgotPassword`, null);
// post: Account/forgotPassword
export const forgotPasswordpost = (model: ForgotPasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Account/forgotPassword`, model);
// get: Account/forgotPasswordConfirmation
export const forgotPasswordConfirmationget = (): AxiosPromise<IResponse> => Api('get', `/Account/forgotPasswordConfirmation`, null);
// get: Account/resetPassword?code=${encodeURIComponent(code)}
export const resetPasswordget = (code: string): AxiosPromise<IResponse> => Api('get', `/Account/resetPassword?code=${encodeURIComponent(code)}`, null);
// post: Account/resetPassword
export const resetPasswordpost = (model: ResetPasswordViewModel): AxiosPromise<IResponse> => Api('post', `/Account/resetPassword`, model);
// get: Account/resetPasswordConfirmation
export const resetPasswordConfirmationget = (): AxiosPromise<IResponse> => Api('get', `/Account/resetPasswordConfirmation`, null);
// get: Account/accessDenied
export const accessDeniedget = (): AxiosPromise<IResponse> => Api('get', `/Account/accessDenied`, null);

