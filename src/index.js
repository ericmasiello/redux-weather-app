import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

/*
 * middleware intercepts actions emitted from action creators before
 * the reach reducers
 * they allow you to block, modify, or pass through actions before
 * they hit the reducer
 * they act as a gatekeeper between action creators and reducers
 */
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
