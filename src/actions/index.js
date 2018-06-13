export const seats = id => ({
  type: 'OPEN_SEAT_MODAL',
  id,
});

export const transactionModal = message => ({
  type: 'OPEN_TRANSACTION_MODAL',
  message,
});
