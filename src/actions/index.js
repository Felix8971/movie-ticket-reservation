export const seats = id => ({
  type: 'OPEN_SEAT_MODAL',
  id,
});

export const transactionModal = message => ({
  type: 'OPEN_TRANSACTION_MODAL',
  message,
});

export const updateMoviesAction = data => ({
  type: 'GET_MOVIES',
  data,
});

export const bookMovieAction = id => ({
  type: 'BOOK_MOVIE',
  id,
});