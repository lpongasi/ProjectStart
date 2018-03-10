import * as React from 'react';
import { connect } from 'react-redux';
import { postLogin, postLoginActions } from 'shared/AppModels/AccountController';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import Input from 'shared/Form/Input';


//@connect(state => ({
//    login: state.form[postLoginActions.id],
//}))
export default class LoginForm extends React.PureComponent<any, any> {
    constructor(props) {
        super(props);
    }
    public submit() {
        const viewModel: LoginViewModel = { ...this.props.login };
        postLogin(viewModel, '').then(lolDone => {
            console.log('LOL THE DONE', lolDone);
        });
    }
    public render() {
        return (
            <div>
                <div className="row">
                    <Input
                        formName={postLoginActions.id}
                        label="Email"
                        name="email"
                        type="email"
                        clientValidate={false}
                        error={this.state}
                        required
                    />
                    <Input
                        formName={postLoginActions.id}
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