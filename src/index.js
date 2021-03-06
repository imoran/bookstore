import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

// what's this?
// registerServiceWorker();