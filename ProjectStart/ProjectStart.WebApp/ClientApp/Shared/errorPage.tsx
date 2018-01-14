import * as React from 'react';

import Input from 'shared/Form/Input';

export default class ErrorPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <a className="waves-effect waves-light btn">button</a>
                <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
                <a className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>button</a>
                <h1><span className="fas fa-times"> </span> Page Not Found! LOL</h1>
                <button onClick={() => this.setState({
                    firstName: '{1} not Valid {0}',
                    lastName: 'LOL LAST NAME',
                })}>
                    Refresh Error
                </button>
                <div className="row">
                    <Input
                        label="First Name"
                        name="firstName"
                        formName="Login"
                        error={this.state}
                        required
                    />
                    <Input
                        formName="Login"
                        label="Email"
                        name="email"
                        error={this.state}
                    />
                </div>
            </div>
        );
    }
}
