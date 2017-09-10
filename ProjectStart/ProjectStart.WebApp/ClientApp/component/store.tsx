import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';
import allReducers from '../reducer';

const middleware = [thunk, logger];

export default createStore(allReducers, applyMiddleware(...middleware));