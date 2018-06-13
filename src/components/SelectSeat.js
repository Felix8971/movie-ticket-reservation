import React from 'react'
import PropTypes from 'prop-types'

class SelectSeat extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }

    const handleBuy = this.props.handleBuy;

    const data = {
      movieId: this.props.item.id,
      price: this.props.item.price, 
      currency: this.props.item.currency,
    };

    return (
      <div className="seat-btn-bg" >
        <div className="seat-btn-container">
          <button className="button" onClick={() => { handleBuy(data) }}>Normal seat: 1.99 USD </button>
          <button className="button" >Superior seat: 2.99 USD </button>
          <button className="button">Sofa seat: 5.99 USD </button>
        </div>
      </div>
    )
  }
}

SelectSeat.propTypes = {
  //   onClick: PropTypes.func.isRequired,
  //   completed: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
}

export default SelectSeat
