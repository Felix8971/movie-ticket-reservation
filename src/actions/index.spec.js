import * as actions from './index'


describe('todo actions', () => {
  it('seats should create ADD_OPEN_SEAT_MODALTODO action', () => {
    expect(actions.seats(1)).toEqual({
      type: 'OPEN_SEAT_MODAL',
      id: 1,
    })
  })

  it('transactionModal should create OPEN_TRANSACTION_MODAL action', () => {
    expect(actions.transactionModal("Transaction done!")).toEqual({
      type: 'OPEN_TRANSACTION_MODAL',
      message: "Transaction done!",
    })
  })
  
})

