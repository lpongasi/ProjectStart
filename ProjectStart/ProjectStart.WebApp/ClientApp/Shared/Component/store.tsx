import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from './logger';
import allReducers from 'shared/Reducer/index';

const Enhancer = isProd ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk, logger));

export default createStore(allReducers, Enhancer);