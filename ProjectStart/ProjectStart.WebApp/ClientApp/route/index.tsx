import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation from '../component/navigation';
import Home from '../component/page/home';
import ManageItem from '../component/page/manage-item';

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
