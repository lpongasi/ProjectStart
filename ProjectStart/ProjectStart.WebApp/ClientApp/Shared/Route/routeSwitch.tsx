import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import ErrorPage from 'shared/errorPage';
import Navigation from 'container/Navbar';

export default () => (
<div>
    <Navigation />
    <div className="container">
        <Switch>
            <Route component={ErrorPage} />
        </Switch>
    </div>
</div>
);
