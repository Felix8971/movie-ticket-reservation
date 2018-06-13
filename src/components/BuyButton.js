
import React from 'react';
import PropTypes from 'prop-types';

class BuyButton extends React.Component {
  render() {
    return (
      <button className="button" onClick={() => { this.props.handleBuy() }}>{this.props.children}</button>
    )
  }
}

BuyButton.propTypes = {
  handleBuy: PropTypes.func,    
}

export default BuyButton;