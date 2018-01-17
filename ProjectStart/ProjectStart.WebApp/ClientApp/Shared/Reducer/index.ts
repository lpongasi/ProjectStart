import { combineReducers } from 'redux';
import form from './form';

export type RootState = {
    form?: any;
};

export default combineReducers<RootState>({
    form,
});
