import * as React from 'react';
import { Link } from 'react-router-dom';
import { postRegister, postRegisterActionId } from 'shared/AppModels/AccountController';
import { IRegisterViewModel } from 'shared/AppModels/RegisterViewModel';
import {
    Connector,
    FormError,
    FormInputs,
} from 'shared/Component/common';
import { Form } from 'shared/Form/Common';
import Input from 'shared/Form/Input';



type Props = {
    registerViewModel?: IRegisterViewModel;
    formError?: { [key: string]: any };
};

@Connector<any, Props, any>(state => ({
    registerViewModel: FormInputs<IRegisterViewModel>(state.form[postRegisterActionId]),
    formError: FormError(state.form[postRegisterActionId]),
}))

export default class Register extends React.Component<Props, any> {
    public form: Form;
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);

        this.form =
            Form
                .createFrom(postRegisterActionId)
                .addInputs([
                    {
                        name: 'lastName',
                        label: 'Last Name',
                        classNames: 's5',
                    },
                    {
                        name: 'firstName',
                        label: 'First Name',
                        classNames: 's5',
                    },
                    {
                        name: 'middleName',
                        label: 'Middle Name',
                        classNames: 's2',
                    },
                    {
                        name: 'address',
                        label: 'Address',
                    },
                    {
                        name: 'address2',
                        label: 'Alternative Address (Optional)',
                    },
                    {
                        name: 'city',
                        label: 'City',
                        classNames: 's8',
                    },
                    {
                        name: 'postalCode',
                        label: 'Postal Code',
                        classNames: 's4',
                    },
                    {
                        name: 'phoneNumber',
                        label: 'PhoneNumber',
                    },
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
                        name: 'confirmPassword',
                        label: 'Confirm Password',
                        type: 'password',
                    },
                ]);
    }
    public formSubmit(e) {
        e.preventDefault();
        postRegister(this.props.registerViewModel);
    }
    public render() {
        const form = this.form;
        const error = this.props.formError['globalError'];
        return (
            <div>
                <h5>Register Account</h5>
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
                        <button type="submit" className="btn waves-effect waves-green">Register</button>
                        <Link to="/Account/Login" className="btn waves-effect waves-green">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}

