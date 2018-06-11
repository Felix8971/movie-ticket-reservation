import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';


const store = createStore(function(state, action) {
  const _state = state == null ? {
    x: 0,
    y: '',
  } : state;

  switch (action.type) {
    case 'TYPE1':
      return Object.assign({}, _state, {
        donate: _state.x + action.x,
      });
    case 'TYPE2':
      return Object.assign({}, _state, {
        y: action.y,
      });

    default: return _state;
  }
},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
