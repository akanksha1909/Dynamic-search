import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './redux/reducers'
import App from './App';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)( createStore )

let store = createStoreWithMiddleware( reducers )

if( process.env.NODE_ENV !== 'production' ){
  store = createStoreWithMiddleware( reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
}

//For using this in components to add event listeners
window.__app_root_container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.__app_root_container
);
