﻿import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Home from 'container/Home';
import Navigation from 'container/Navbar';
import ErrorPage from 'shared/errorPage';
import Login from 'shared/Form/Login';
import Page from 'container/Page';


export default () => (
<div>
    <Navigation />
    <div className="container">
        <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Home/Index" component={Home} />
                <Route exact path="/Account/Login" component={Login} />
                <Route path="/Page" component={Page} />
                <Route component={ErrorPage} />
        </Switch>
    </div>
</div>
);
