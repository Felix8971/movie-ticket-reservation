import { combineReducers } from 'redux'

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

const detailsModalReducer = (state = null, action) => {
  switch (action.type) {
    case 'OPEN_DETAILS_MODAL':
      return action.data
    default:
      return state
  }
}


const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return action.data
    case 'BOOK_MOVIE':
      const _state =  Object.assign([], state);
      _state[action.id].booked = true; 
      return _state;
    default:
      return state
  }
}


export default combineReducers({
  detailsModalReducer,
  activeSeatModal,
  activeTransactionModal,
  moviesReducer,
})
