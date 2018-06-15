import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (
      <button className="button" onClick={() => { this.props.handleClick() }}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  handleClick: PropTypes.func,    
}

export default Button;