import { combineReducers } from 'redux'
//import movies from './movies'
//import seats from './seats'
import fetch from 'isomorphic-fetch';
const url = 'http://localhost:3001';


const activeSeatModal = (state = null, action) => {
  switch (action.type) {
    case 'OPEN_SEAT_MODAL':
      return action.id
    default:
      return state
  }
}

const activeTransactionModal = (state = null, action) => {
  switch (action.type) {
    case 'OPEN_TRANSACTION_MODAL':
      return action.message
    default:
      return state
  }
}

const activeDetailsModal = (state = null, action) => {
  switch (action.type) {
    case 'OPEN_DETAILS_MODAL':
      return action.id
    default:
      return state
  }
}

//todo : ecrire un reducer pour les films, si state null fetcher la base


//  const movie = (state, action) => {
//   switch (action.type) {
//     case 'BOOK_MOVIE':
//       if (state.id !== action.id) {
//         return state;
//       }

//       return {
//         ...state,
//         booked: true
//       };
//     default:
//       return state;
//   }
// }
//todo : ecrire un reducer pour les films, si state null fetcher la base
 const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.data
    case 'BOOK_MOVIE':
      const _state =  Object.assign([], state);
      debugger;
      _state[action.id].booked = true; 
      return _state;
    default:
      return state
  }
 }


export default combineReducers({
  activeDetailsModal,
  activeSeatModal,
  activeTransactionModal,
  moviesReducer,
})
