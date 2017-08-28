import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation from './containers/navigation';
import Node from './containers/node';
import Home from './containers/home';
import ManageItem from './containers/manage-item';
import Loading from './containers/loading';

export default () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Loading />
      <Node />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Manage/Item' component={ManageItem} />
      </Switch>
    </div>
  </BrowserRouter>
);
