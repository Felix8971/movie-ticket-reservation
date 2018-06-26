import React from 'react'
import PropTypes from 'prop-types'
import Close from '../cancel-button.svg';
import Button from './Button';
import {movieType} from './types';

const userId = 'he6fe54u4s56o71d36z51no';//should be defined if the user register somewhere

class SelectSeat extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }

    const handleBuy = this.props.handleBuy;
    // const currency = this.props.item.currency;
    // const id = this.props.item.id;
    // const title = this.props.item.title;
    // const prices = this.props.item.prices;

    //I can use object destructuring to write less code.
    const {id, title, currency, prices} = this.props.item;

    const buttons = Object.entries(prices).map((elem) => {
      //console.log(elem);
      const type = elem[0];
      const price = elem[1];
      return (
        <Button key={type} handleClick={() => { handleBuy({ id, title, currency, price, userId }) }}>
          {type} seat: {price} {currency}
        </Button>
      )
    });

    return (
      <div className="seat-btn-bg" >
        <Close className="close-btn" width={40} height={40} onClick={this.props.handleClose} />
        <div className="seat-btn-container">
          {buttons}
        </div>
      </div>
    )
  }
}

SelectSeat.propTypes = {
  handleBuy: PropTypes.func.isRequired,
  item: movieType.isRequired,//I use centralized PropTypes define in ./types/index.js (DRY principle)
  handleClose:PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}

export default SelectSeat
