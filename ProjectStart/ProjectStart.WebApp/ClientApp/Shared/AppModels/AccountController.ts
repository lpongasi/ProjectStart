import { ExternalLoginViewModel } from 'shared/AppModels/ExternalLoginViewModel';
import { ForgotPasswordViewModel } from 'shared/AppModels/ForgotPasswordViewModel';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { LoginWith2faViewModel } from 'shared/AppModels/LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from 'shared/AppModels/LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import { ResetPasswordViewModel } from 'shared/AppModels/ResetPasswordViewModel';
import { Response } from 'shared/AppModels/Response';
import { Api } from 'shared/Component/api';


// State for get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
// get: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginActionId = 'ProjectStart.WebApp.Controllers.AccountController.Login.get';
export const getLogin = (returnUrl: string = null): Promise<any> => Api(getLoginActionId, 'get', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// State for post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/login?returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginActionId = 'ProjectStart.WebApp.Controllers.AccountController.Login.post';
export const postLogin = (model: LoginViewModel, returnUrl: string = null): Promise<Response<string>> => Api(postLoginActionId, 'post', `/Account/login?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// State for get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
// get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWith2faActionId = 'ProjectStart.WebApp.Controllers.AccountController.LoginWith2fa.get';
export const getLoginWith2fa = (rememberMe: boolean, returnUrl: string = null): Promise<any> => Api(getLoginWith2faActionId, 'get', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
// State for post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWith2faActionId = 'ProjectStart.WebApp.Controllers.AccountController.LoginWith2fa.post';
export const postLoginWith2fa = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string = null): Promise<any> => Api(postLoginWith2faActionId, 'post', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model);
// State for get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
// get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWithRecoveryCodeActionId = 'ProjectStart.WebApp.Controllers.AccountController.LoginWithRecoveryCode.get';
export const getLoginWithRecoveryCode = (returnUrl: string = null): Promise<any> => Api(getLoginWithRecoveryCodeActionId, 'get', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// State for post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWithRecoveryCodeActionId = 'ProjectStart.WebApp.Controllers.AccountController.LoginWithRecoveryCode.post';
export const postLoginWithRecoveryCode = (model: LoginWithRecoveryCodeViewModel, returnUrl: string = null): Promise<any> => Api(postLoginWithRecoveryCodeActionId, 'post', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// State for get: Account/lockout
// get: Account/lockout
export const getLockoutActionId = 'ProjectStart.WebApp.Controllers.AccountController.Lockout.get';
export const getLockout = (): Promise<any> => Api(getLockoutActionId, 'get', `/Account/lockout`, null);
// State for get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
// get: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const getRegisterActionId = 'ProjectStart.WebApp.Controllers.AccountController.Register.get';
export const getRegister = (returnUrl: string = null): Promise<any> => Api(getRegisterActionId, 'get', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, null);
// State for post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/register?returnUrl=${encodeURIComponent(returnUrl)}
export const postRegisterActionId = 'ProjectStart.WebApp.Controllers.AccountController.Register.post';
export const postRegister = (model: RegisterViewModel, returnUrl: string = null): Promise<any> => Api(postRegisterActionId, 'post', `/Account/register?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// State for post: Account/logout
// post: Account/logout
export const postLogoutActionId = 'ProjectStart.WebApp.Controllers.AccountController.Logout.post';
export const postLogout = (): Promise<any> => Api(postLogoutActionId, 'post', `/Account/logout`, null);
// State for post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginActionId = 'ProjectStart.WebApp.Controllers.AccountController.ExternalLogin.post';
export const postExternalLogin = (provider: string, returnUrl: string = null): Promise<any> => Api(postExternalLoginActionId, 'post', `/Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null);
// State for get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
// get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
export const getExternalLoginCallbackActionId = 'ProjectStart.WebApp.Controllers.AccountController.ExternalLoginCallback.get';
export const getExternalLoginCallback = (returnUrl: string = null, remoteError: string = null): Promise<any> => Api(getExternalLoginCallbackActionId, 'get', `/Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null);
// State for post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginConfirmationActionId = 'ProjectStart.WebApp.Controllers.AccountController.ExternalLoginConfirmation.post';
export const postExternalLoginConfirmation = (model: ExternalLoginViewModel, returnUrl: string = null): Promise<any> => Api(postExternalLoginConfirmationActionId, 'post', `/Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model);
// State for get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
// get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
export const getConfirmEmailActionId = 'ProjectStart.WebApp.Controllers.AccountController.ConfirmEmail.get';
export const getConfirmEmail = (userId: string, code: string): Promise<any> => Api(getConfirmEmailActionId, 'get', `/Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null);
// State for get: Account/forgotPassword
// get: Account/forgotPassword
export const getForgotPasswordActionId = 'ProjectStart.WebApp.Controllers.AccountController.ForgotPassword.get';
export const getForgotPassword = (): Promise<any> => Api(getForgotPasswordActionId, 'get', `/Account/forgotPassword`, null);
// State for post: Account/forgotPassword
// post: Account/forgotPassword
export const postForgotPasswordActionId = 'ProjectStart.WebApp.Controllers.AccountController.ForgotPassword.post';
export const postForgotPassword = (model: ForgotPasswordViewModel): Promise<any> => Api(postForgotPasswordActionId, 'post', `/Account/forgotPassword`, model);
// State for get: Account/forgotPasswordConfirmation
// get: Account/forgotPasswordConfirmation
export const getForgotPasswordConfirmationActionId = 'ProjectStart.WebApp.Controllers.AccountController.ForgotPasswordConfirmation.get';
export const getForgotPasswordConfirmation = (): Promise<any> => Api(getForgotPasswordConfirmationActionId, 'get', `/Account/forgotPasswordConfirmation`, null);
// State for get: Account/resetPassword?code=${encodeURIComponent(code)}
// get: Account/resetPassword?code=${encodeURIComponent(code)}
export const getResetPasswordActionId = 'ProjectStart.WebApp.Controllers.AccountController.ResetPassword.get';
export const getResetPassword = (code: string = null): Promise<any> => Api(getResetPasswordActionId, 'get', `/Account/resetPassword?code=${encodeURIComponent(code)}`, null);
// State for post: Account/resetPassword
// post: Account/resetPassword
export const postResetPasswordActionId = 'ProjectStart.WebApp.Controllers.AccountController.ResetPassword.post';
export const postResetPassword = (model: ResetPasswordViewModel): Promise<any> => Api(postResetPasswordActionId, 'post', `/Account/resetPassword`, model);
// State for get: Account/resetPasswordConfirmation
// get: Account/resetPasswordConfirmation
export const getResetPasswordConfirmationActionId = 'ProjectStart.WebApp.Controllers.AccountController.ResetPasswordConfirmation.get';
export const getResetPasswordConfirmation = (): Promise<any> => Api(getResetPasswordConfirmationActionId, 'get', `/Account/resetPasswordConfirmation`, null);
// State for get: Account/accessDenied
// get: Account/accessDenied
export const getAccessDeniedActionId = 'ProjectStart.WebApp.Controllers.AccountController.AccessDenied.get';
export const getAccessDenied = (): Promise<any> => Api(getAccessDeniedActionId, 'get', `/Account/accessDenied`, null);

