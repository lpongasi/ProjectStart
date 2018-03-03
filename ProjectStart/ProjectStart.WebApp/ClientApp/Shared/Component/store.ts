import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from 'shared/Reducer/index';
import logger from './logger';

const Enhancer = isProd ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk, logger));

export default createStore(allReducers, { page: window.currentPage || {} }, Enhancer);
