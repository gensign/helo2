import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Hash Router
import {HashRouter} from 'react-router-dom';

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));