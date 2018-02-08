import * as React from 'react';
import { ILoginViewModel } from 'shared/AppModels/LoginViewModel';
import { connect } from 'react-redux';
import Input from 'shared/Form/Input';

@connect(state => ({
    Login: state.form.login,
}), null)
export default class LoginForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    public submit() {

    }
    public render() {
        console.log(this.props);
        return (
            <div>
                <div className="row">
                    <Input
                        formName="login"
                        label="Email"
                        name="email"
                        type="email"
                        clientValidate={false}
                        error={this.state}
                        required
                    />
                    <Input
                        formName="login"
                        label="Password"
                        name="password"
                        type="password"
                        clientValidate={false}
                        error={this.state}
                    />
                </div>
            </div>
        );
    }
}
