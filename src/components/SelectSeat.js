import React from 'react'
import PropTypes from 'prop-types'
import Close from '../cancel-button.svg';
import BuyButton from './BuyButton';

class SelectSeat extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }

    const handleBuy = this.props.handleBuy;
    const currency = this.props.item.currency;
    const movieId = this.props.item.id;
    const prices = this.props.item.prices;

    const buttons = Object.entries(prices).map((elem) => {
      console.log(elem);
      const type = elem[0];
      const price = elem[1];
      return (
        <BuyButton key={type} handleBuy={() => { handleBuy({ movieId, currency, price }) }}>
          {type} seat: {price} {currency}
        </BuyButton>
      )
    });


    return (
      <div className="seat-btn-bg" >
        <Close className="closeBtn" width={40} height={40} onClick={this.props.handleClose} />
        <div className="seat-btn-container">
          {buttons}
        </div>
      </div>
    )
  }
}

SelectSeat.propTypes = {
  handleBuy: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  handleClose:PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default SelectSeat
