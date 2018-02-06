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
export default class HomeController {
    // post: api/Home/
    public Index_post = (): AxiosPromise<Response> => Api('post', `api/Home/`, null);
    // post: api/Home/
    public About_post = (): AxiosPromise<Response> => Api('post', `api/Home/`, null);
    // post: api/Home/?page=${page}&pageSize=${pageSize}
    public Node_post = (page: number, pageSize: number): AxiosPromise<Response> => Api('post', `api/Home/?page=${page}&pageSize=${pageSize}`, null);
    // post: api/Home/
    public Contact_post = (): AxiosPromise<Response> => Api('post', `api/Home/`, null);
    // post: api/Home/
    public Error_post = (): AxiosPromise<Response> => Api('post', `api/Home/`, null);
}
