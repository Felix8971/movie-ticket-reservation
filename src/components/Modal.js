import React from 'react';
//import PropTypes from 'prop-types';
//import styled from 'styled-components';
import Button from './Button';


class Modal extends React.Component {
  render() {

  // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className='bg-modal' >
        <div className='modal-content'>
          <p>{this.props.msg}</p>
          <Button handleBuy={this.props.onCloseModal}>
            Close
          </Button>
        </div>
      </div>
    );
  }
}

export default Modal;