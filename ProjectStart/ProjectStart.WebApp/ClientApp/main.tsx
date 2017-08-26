﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Component/store';
import MainRoute from './Component/route';


ReactDOM.render(
  <Provider store={Store}>
    <MainRoute />
  </Provider>
  , document.getElementById('main-app'));