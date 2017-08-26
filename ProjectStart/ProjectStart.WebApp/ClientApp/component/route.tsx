import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation from './page/navigation';
import Home from './page/home';
import ManageItem from './page/manage-item';

export default () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Manage/Item' component={ManageItem} />
      </Switch>
    </div>
  </BrowserRouter>
);
