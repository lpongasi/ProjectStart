import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './component/store';
import MainRoute from './route';
import Bootstrap from './bower_components/bootstrap/'

const renderMain = () => {
    ReactDOM.render(
        <Provider store={Store}>
            <MainRoute />
        </Provider>
        , document.getElementById('main-app'));
}
export default renderMain;