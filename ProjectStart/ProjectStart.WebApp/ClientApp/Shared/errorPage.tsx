import * as React from 'react';
import { LoginViewModel } from 'shared/AppModels/LoginViewModel';
import Login from 'shared/Form/Login';

export default class ErrorPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //var elem = document.querySelector('.sidenav');
        //(M as any).Sidenav.init(elem);
    }

    render() {
        return (
            <div>
                <h3 className="text danger">Page Not Found</h3>
                <Login />
            </div>
        );
    }
}
