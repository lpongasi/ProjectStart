import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from 'shared/Component/store';
import {
    Route,
    Switch,
    BrowserRouter,
} from 'react-router-dom';
import ErrorPage from 'shared/errorPage';
import Page from 'container/Admin/Page';
import User from 'container/Admin/User';


ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/Admin/Page" component={Page} />
                <Route exact path="/Admin/User" component={User} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('main-app'));

if ((module as any).hot) {
    (module as any).hot.accept();
}

