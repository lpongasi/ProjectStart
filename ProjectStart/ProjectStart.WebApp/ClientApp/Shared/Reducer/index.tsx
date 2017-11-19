import { combineReducers } from 'redux';
import loading from './loading-reducer';
import node from './node-reducer';
import manageItem from './manageItem-reducer';

const allreducers = combineReducers({
    manageItem,
    loading,
    node
});

export default allreducers;