const seats = (state = 0, action) => {
  switch (action.type) {
    case 'OPEN_SEAT_MODAL':
      console.log('Hello!')
      return action.id
    default:
      return state
  }
}

export default seats