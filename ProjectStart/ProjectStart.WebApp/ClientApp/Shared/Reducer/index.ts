import { combineReducers } from 'redux';
import { RootState } from 'shared/Component/common';
import form from './form';
import page from './page';


export default combineReducers<RootState>({
    form,
    page,
});
