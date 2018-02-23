import { ExternalLoginViewModel } from 'shared/AppModels/ExternalLoginViewModel';
import { ForgotPasswordViewModel } from 'shared/AppModels/ForgotPasswordViewModel';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { LoginWith2faViewModel } from 'shared/AppModels/LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from 'shared/AppModels/LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import { ResetPasswordViewModel } from 'shared/AppModels/ResetPasswordViewModel';
import { Response } from 'shared/AppModels/Response';
import { Api } from 'shared/Component/api';
import { ActionTypes, CreateStateAction } from 'shared/Component/common';


// State for get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.Login.get');
// get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const getLogin = (returnUrl: string = null): Promise<any> => Api('get', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, null, getLoginActions);
// State for post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.Login.post');
// post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const postLogin = (model: LoginViewModel, returnUrl: string = null): Promise<Response<string>> => Api('post', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, model, postLoginActions);
// State for get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWith2faActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.LoginWith2fa.get');
// get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWith2fa = (rememberMe: boolean, returnUrl: string = null): Promise<any> => Api('get', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null, getLoginWith2faActions);
// State for post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWith2faActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.LoginWith2fa.post');
// post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWith2fa = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string = null): Promise<any> => Api('post', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model, postLoginWith2faActions);
// State for get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWithRecoveryCodeActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.LoginWithRecoveryCode.get');
// get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWithRecoveryCode = (returnUrl: string = null): Promise<any> => Api('get', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null, getLoginWithRecoveryCodeActions);
// State for post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWithRecoveryCodeActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.LoginWithRecoveryCode.post');
// post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWithRecoveryCode = (model: LoginWithRecoveryCodeViewModel, returnUrl: string = null): Promise<any> => Api('post', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model, postLoginWithRecoveryCodeActions);
// State for get: Account/lockout
export const getLockoutActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.Lockout.get');
// get: Account/lockout
export const getLockout = (): Promise<any> => Api('get', `/Account/lockout`, null, getLockoutActions);
// State for get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const getRegisterActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.Register.get');
// get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const getRegister = (returnUrl: string = null): Promise<any> => Api('get', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, null, getRegisterActions);
// State for post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const postRegisterActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.Register.post');
// post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const postRegister = (model: RegisterViewModel, returnUrl: string = null): Promise<any> => Api('post', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, model, postRegisterActions);
// State for post: Account/logout
export const postLogoutActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.Logout.post');
// post: Account/logout
export const postLogout = (): Promise<any> => Api('post', `/Account/logout`, null, postLogoutActions);
// State for post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ExternalLogin.post');
// post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLogin = (provider: string, returnUrl: string = null): Promise<any> => Api('post', `/Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null, postExternalLoginActions);
// State for get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
export const getExternalLoginCallbackActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ExternalLoginCallback.get');
// get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
export const getExternalLoginCallback = (returnUrl: string = null, remoteError: string = null): Promise<any> => Api('get', `/Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null, getExternalLoginCallbackActions);
// State for post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginConfirmationActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ExternalLoginConfirmation.post');
// post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginConfirmation = (model: ExternalLoginViewModel, returnUrl: string = null): Promise<any> => Api('post', `/Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model, postExternalLoginConfirmationActions);
// State for get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
export const getConfirmEmailActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ConfirmEmail.get');
// get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
export const getConfirmEmail = (userId: string, code: string): Promise<any> => Api('get', `/Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null, getConfirmEmailActions);
// State for get: Account/forgotPassword
export const getForgotPasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ForgotPassword.get');
// get: Account/forgotPassword
export const getForgotPassword = (): Promise<any> => Api('get', `/Account/forgotPassword`, null, getForgotPasswordActions);
// State for post: Account/forgotPassword
export const postForgotPasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ForgotPassword.post');
// post: Account/forgotPassword
export const postForgotPassword = (model: ForgotPasswordViewModel): Promise<any> => Api('post', `/Account/forgotPassword`, model, postForgotPasswordActions);
// State for get: Account/forgotPasswordConfirmation
export const getForgotPasswordConfirmationActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ForgotPasswordConfirmation.get');
// get: Account/forgotPasswordConfirmation
export const getForgotPasswordConfirmation = (): Promise<any> => Api('get', `/Account/forgotPasswordConfirmation`, null, getForgotPasswordConfirmationActions);
// State for get: Account/resetPassword?code=${encodeURIComponent(code)}
export const getResetPasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ResetPassword.get');
// get: Account/resetPassword?code=${encodeURIComponent(code)}
export const getResetPassword = (code: string = null): Promise<any> => Api('get', `/Account/resetPassword?code=${encodeURIComponent(code)}`, null, getResetPasswordActions);
// State for post: Account/resetPassword
export const postResetPasswordActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ResetPassword.post');
// post: Account/resetPassword
export const postResetPassword = (model: ResetPasswordViewModel): Promise<any> => Api('post', `/Account/resetPassword`, model, postResetPasswordActions);
// State for get: Account/resetPasswordConfirmation
export const getResetPasswordConfirmationActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.ResetPasswordConfirmation.get');
// get: Account/resetPasswordConfirmation
export const getResetPasswordConfirmation = (): Promise<any> => Api('get', `/Account/resetPasswordConfirmation`, null, getResetPasswordConfirmationActions);
// State for get: Account/accessDenied
export const getAccessDeniedActions: ActionTypes = CreateStateAction('ProjectStart.WebApp.Controllers.AccountController.AccessDenied.get');
// get: Account/accessDenied
export const getAccessDenied = (): Promise<any> => Api('get', `/Account/accessDenied`, null, getAccessDeniedActions);

