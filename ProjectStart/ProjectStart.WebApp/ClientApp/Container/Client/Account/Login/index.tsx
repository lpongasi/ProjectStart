import * as React from 'react';
import { Link } from 'react-router-dom';
import { postLogin, postLoginActionId } from 'shared/AppModels/AccountController';
import { ILoginViewModel } from 'shared/AppModels/LoginViewModel';
import {
    Connector,
    FormError,
    FormInputs,
} from 'shared/Component/common';
import { Form } from 'shared/Form/Common';
import Input from 'shared/Form/Input';



type Props = {
    loginViewModel?: ILoginViewModel;
    formError?: { [key: string]: any };
};

@Connector<any, Props, any>(state => ({
    loginViewModel: FormInputs<ILoginViewModel>(state.form[postLoginActionId]),
    formError: FormError(state.form[postLoginActionId]),
}))

export default class Register extends React.Component<Props, any> {
    public form: Form;
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);

        this.form =
            Form
                .createFrom(postLoginActionId)
                .addInputs([
                    {
                        name: 'email',
                        label: 'Email',
                    },
                    {
                        name: 'password',
                        label: 'Password',
                        type: 'password',
                    },
                    {
                        name: 'rememberMe',
                        label: 'Remember me',
                        type: 'checkbox',
                        classNames: 'filled-in',
                    },
                ]);
    }
    public formSubmit(e) {
        e.preventDefault();
        postLogin(this.props.loginViewModel);
    }
    public render() {
        const form = this.form;
        const error = this.props.formError['globalError'];
        return (
            <div>
                <h5>Login</h5>
                <hr />
                {error && (<div className="row">
                    <div className="col s12 text-danger">
                        {error}
                    </div>
                </div>)}
                <form method="post" id={form.id} onSubmit={this.formSubmit}>
                    <div className="row">
                        {form.inputs.map(item => (
                            <Input key={item.id} {...item} />
                        ))}
                    </div>
                    <div className="row">
                        <button type="submit" className="btn waves-effect waves-green">Login</button>
                        <Link to="/Account/Register" className="btn waves-effect waves-green">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}

