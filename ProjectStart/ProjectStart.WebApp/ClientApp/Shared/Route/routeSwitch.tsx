import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Register from 'container/Client/Account/Register';
import Login from 'container/Client/Account/Login';
import ErrorPage from 'shared/errorPage';


export default class RouteSwitch extends React.Component {

    public render() {
        return (
            <div>
                <div className="container">
                    <Switch>
                        <Route exact path="/Account/Register" component={Register} />
                        <Route exact path="/Account/Login" component={Login} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </div>
        );
    }

} 
