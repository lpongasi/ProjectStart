import { combineReducers } from 'redux';
import manageItem from './manageItem';
import loading from './loading';

const allreducers = combineReducers({
    manageItem,
    loading
});

export default allreducers;