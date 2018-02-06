${
    // Enable extension methods by adding using Typewriter.Extensions.*
    using Typewriter.Extensions.Types;
	using Typewriter.Extensions.WebApi;
	string ReturnType(Method m) => m.Type.Name == "IActionResult" ? "Response" : m.Type.Name;
    string ServiceName(Class c) => c.Name.Replace("ApiController", "Controller");
    string ParentServiceName(Method m) => ServiceName((Class)m.Parent);
    string LoudName(Property property)
    {
        return property.Name.ToUpperInvariant();
    }
}import { AxiosPromise } from 'axios';
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
$Classes(*Controller)[export default class $ServiceName {$Methods[
    // $HttpMethod: $Url
    public $Name_$HttpMethod = ($Parameters[$name: $Type][, ]): AxiosPromise<$ReturnType> => Api('$HttpMethod', `$Url`, $RequestData);]
}]
