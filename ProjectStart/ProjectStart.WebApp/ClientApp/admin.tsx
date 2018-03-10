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
import Page from 'container/admin/Page';


ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/Admin/Page" component={Page} />
                <Route exact path="/Admin/Page/Index" component={Page} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('main-app'));

if ((module as any).hot) {
    (module as any).hot.accept();
}

