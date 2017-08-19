import { combineReducers } from 'redux';
import manageItem from './manageItem';

const allreducers = combineReducers({
    manageItem,
});

export default allreducers;