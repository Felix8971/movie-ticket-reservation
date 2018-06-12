import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(function (state, action) {
  const _state = state == undefined ? {} : state;
  console.log('_state=', state);

  switch (action.type) {

    case 'MOVIE_UPDATE':
      return Object.assign({}, state, {//ne va modifier que la proprieté selectedMovieId dans la copy faite de l'objet state
        movies: action.data,
      });
    case 'DETAILS':
      return Object.assign({}, state, {//ne va modifier que la proprieté selectedMovieId dans la copy faite de l'objet state
        detailsMovie: { open: true, id: action.id },
      });
    case 'SEAT':
      const x = Object.assign({}, state, {
        buySeatModal: 1,
      });
      console.log('x=', x);
      return Object.assign({}, state, {
        buySeatModal: 1,
      });
    default: return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(function(state, action) {
//   const _state = state == null ? {
//     x: 0,
//     y: '',
//   } : state;

//   switch (action.type) {
//     case 'TYPE1':
//       return Object.assign({}, _state, {
//         donate: _state.x + action.x,
//       });
//     case 'TYPE2':
//       return Object.assign({}, _state, {
//         y: action.y,
//       });

//     default: return _state;
//   }
// },  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
