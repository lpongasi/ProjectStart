
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mode } from '../Configs/global';
import Logger from './component/logger';
import allReducers from './reducer';
import MainRoute from './route';

let middleware = [thunk, Logger].concat(mode.IS_DEV ? [Logger] : []);

const store = createStore(allReducers, applyMiddleware(...middleware));
ReactDOM.render(
  <Provider store={store}>
    <MainRoute />
  </Provider>
  , document.getElementById('main-app'));