import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from 'shared/Component/store';
import MainRoute from 'shared/Route';



var module: any;

ReactDOM.render(
    <Provider store={Store}>
        <MainRoute />
    </Provider>
    , document.getElementById('main-app'));

if (module.hot) {
    module.hot.accept();
}