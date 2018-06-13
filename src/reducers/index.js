import { combineReducers } from 'redux'
//import movies from './movies'
//import seats from './seats'

// const movies = (state = [], action) => {
//   return state
// }

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

// const activeTransactionModal = (state = null, action) => {
//   switch (action.type) {
//     case 'UPDATE_TRANSACTION':
//       return action.id
//     default:
//       return state
//   }
// }

const activeDetailsModal = (state = null, action) => {
  switch (action.type) {
    case 'OPEN_DETAILS_MODAL':
      return action.id
    default:
      return state
  }
}

export default combineReducers({
  activeDetailsModal,
  activeSeatModal,
  activeTransactionModal,
})
