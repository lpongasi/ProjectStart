import { ExternalLoginViewModel } from 'shared/AppModels/ExternalLoginViewModel';
import { ForgotPasswordViewModel } from 'shared/AppModels/ForgotPasswordViewModel';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { LoginWith2faViewModel } from 'shared/AppModels/LoginWith2faViewModel';
import { LoginWithRecoveryCodeViewModel } from 'shared/AppModels/LoginWithRecoveryCodeViewModel';
import { RegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import { ResetPasswordViewModel } from 'shared/AppModels/ResetPasswordViewModel';
import { Response } from 'shared/AppModels/Response';
import { Api } from 'shared/Component/api';


// State for post: Account/login
// post: Account/login
export const postLoginActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.Login.post';
export const postLogin = (model: LoginViewModel, localData?: (data: Response<string>) => void): Promise<Response<string>> => Api(postLoginActionId, 'post', `/Account/login`, model, true , localData);
// State for get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
// get: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWith2faActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.LoginWith2fa.get';
export const getLoginWith2fa = (rememberMe: boolean, returnUrl: string = null, localData?: (data: any) => void): Promise<any> => Api(getLoginWith2faActionId, 'get', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, null, true , localData);
// State for post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWith2faActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.LoginWith2fa.post';
export const postLoginWith2fa = (model: LoginWith2faViewModel, rememberMe: boolean, returnUrl: string = null, localData?: (data: any) => void): Promise<any> => Api(postLoginWith2faActionId, 'post', `/Account/loginWith2fa?rememberMe=${rememberMe}&returnUrl=${encodeURIComponent(returnUrl)}`, model, true , localData);
// State for get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
// get: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const getLoginWithRecoveryCodeActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.LoginWithRecoveryCode.get';
export const getLoginWithRecoveryCode = (returnUrl: string = null, localData?: (data: any) => void): Promise<any> => Api(getLoginWithRecoveryCodeActionId, 'get', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, null, true , localData);
// State for post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}
export const postLoginWithRecoveryCodeActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.LoginWithRecoveryCode.post';
export const postLoginWithRecoveryCode = (model: LoginWithRecoveryCodeViewModel, returnUrl: string = null, localData?: (data: any) => void): Promise<any> => Api(postLoginWithRecoveryCodeActionId, 'post', `/Account/loginWithRecoveryCode?returnUrl=${encodeURIComponent(returnUrl)}`, model, true , localData);
// State for get: Account/lockout
// get: Account/lockout
export const getLockoutActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.Lockout.get';
export const getLockout = (localData?: (data: any) => void): Promise<any> => Api(getLockoutActionId, 'get', `/Account/lockout`, null, true , localData);
// State for post: Account/register
// post: Account/register
export const postRegisterActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.Register.post';
export const postRegister = (model: RegisterViewModel, localData?: (data: Response<RegisterViewModel>) => void): Promise<Response<RegisterViewModel>> => Api(postRegisterActionId, 'post', `/Account/register`, model, true , localData);
// State for post: Account/logout
// post: Account/logout
export const postLogoutActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.Logout.post';
export const postLogout = (localData?: (data: any) => void): Promise<any> => Api(postLogoutActionId, 'post', `/Account/logout`, null, true , localData);
// State for post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ExternalLogin.post';
export const postExternalLogin = (provider: string, returnUrl: string = null, localData?: (data: any) => void): Promise<any> => Api(postExternalLoginActionId, 'post', `/Account/externalLogin?provider=${encodeURIComponent(provider)}&returnUrl=${encodeURIComponent(returnUrl)}`, null, true , localData);
// State for get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
// get: Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}
export const getExternalLoginCallbackActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ExternalLoginCallback.get';
export const getExternalLoginCallback = (returnUrl: string = null, remoteError: string = null, localData?: (data: any) => void): Promise<any> => Api(getExternalLoginCallbackActionId, 'get', `/Account/externalLoginCallback?returnUrl=${encodeURIComponent(returnUrl)}&remoteError=${encodeURIComponent(remoteError)}`, null, true , localData);
// State for post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
// post: Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}
export const postExternalLoginConfirmationActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ExternalLoginConfirmation.post';
export const postExternalLoginConfirmation = (model: ExternalLoginViewModel, returnUrl: string = null, localData?: (data: any) => void): Promise<any> => Api(postExternalLoginConfirmationActionId, 'post', `/Account/externalLoginConfirmation?returnUrl=${encodeURIComponent(returnUrl)}`, model, true , localData);
// State for get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
// get: Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}
export const getConfirmEmailActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ConfirmEmail.get';
export const getConfirmEmail = (userId: string, code: string, localData?: (data: any) => void): Promise<any> => Api(getConfirmEmailActionId, 'get', `/Account/confirmEmail?userId=${encodeURIComponent(userId)}&code=${encodeURIComponent(code)}`, null, true , localData);
// State for get: Account/forgotPassword
// get: Account/forgotPassword
export const getForgotPasswordActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ForgotPassword.get';
export const getForgotPassword = (localData?: (data: any) => void): Promise<any> => Api(getForgotPasswordActionId, 'get', `/Account/forgotPassword`, null, true , localData);
// State for post: Account/forgotPassword
// post: Account/forgotPassword
export const postForgotPasswordActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ForgotPassword.post';
export const postForgotPassword = (model: ForgotPasswordViewModel, localData?: (data: any) => void): Promise<any> => Api(postForgotPasswordActionId, 'post', `/Account/forgotPassword`, model, true , localData);
// State for get: Account/forgotPasswordConfirmation
// get: Account/forgotPasswordConfirmation
export const getForgotPasswordConfirmationActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ForgotPasswordConfirmation.get';
export const getForgotPasswordConfirmation = (localData?: (data: any) => void): Promise<any> => Api(getForgotPasswordConfirmationActionId, 'get', `/Account/forgotPasswordConfirmation`, null, true , localData);
// State for get: Account/resetPassword?code=${encodeURIComponent(code)}
// get: Account/resetPassword?code=${encodeURIComponent(code)}
export const getResetPasswordActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ResetPassword.get';
export const getResetPassword = (code: string = null, localData?: (data: any) => void): Promise<any> => Api(getResetPasswordActionId, 'get', `/Account/resetPassword?code=${encodeURIComponent(code)}`, null, true , localData);
// State for post: Account/resetPassword
// post: Account/resetPassword
export const postResetPasswordActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ResetPassword.post';
export const postResetPassword = (model: ResetPasswordViewModel, localData?: (data: any) => void): Promise<any> => Api(postResetPasswordActionId, 'post', `/Account/resetPassword`, model, true , localData);
// State for get: Account/resetPasswordConfirmation
// get: Account/resetPasswordConfirmation
export const getResetPasswordConfirmationActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.ResetPasswordConfirmation.get';
export const getResetPasswordConfirmation = (localData?: (data: any) => void): Promise<any> => Api(getResetPasswordConfirmationActionId, 'get', `/Account/resetPasswordConfirmation`, null, true , localData);
// State for get: Account/accessDenied
// get: Account/accessDenied
export const getAccessDeniedActionId = 'ProjectStart.WebApp.Controllers.Client.AccountController.AccessDenied.get';
export const getAccessDenied = (localData?: (data: any) => void): Promise<any> => Api(getAccessDeniedActionId, 'get', `/Account/accessDenied`, null, true , localData);

