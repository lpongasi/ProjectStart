import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from 'shared/Component/store';
import MainRoute from 'shared/Route';

ReactDOM.render(
    <Provider store={Store}>
        <MainRoute />
    </Provider>
    , document.getElementById('main-app'));

if ((module as any).hot) {
    (module as any).hot.accept();
}
