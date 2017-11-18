import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Home from './containers/home';
import ManageItem from './containers/manage-item';

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Manage/Item' component={ManageItem} />
    </Switch>
);
