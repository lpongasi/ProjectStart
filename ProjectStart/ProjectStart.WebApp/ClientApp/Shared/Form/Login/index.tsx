import * as React from 'react';
import { postLogin } from 'shared/AppModels/AccountController';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import { connect } from 'react-redux';
import Input from 'shared/Form/Input';

@connect(state => ({
    login: state.form.login,
}), null)
export default class LoginForm extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    public submit() {
        postLogin({ ...this.props.login }).then(lolDone => {
            console.log("LOL THE DONE", lolDone);
        });
    }
    public render() {
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
                    <button onClick={() => this.submit()} className="btn btn-primary">CLICK ME!</button>
                </div>
            </div>
        );
    }
}
