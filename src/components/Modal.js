import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ReactDOM from  'react-dom';

class Modal extends React.Component {
  render() {
    // Render nothing if the msg prop is empty
    if (!this.props.msg) {
      return null;
    }

    //Use of createPortal to render the modal inside the document body (to prevent z-index problems)
    return (
      ReactDOM.createPortal(
        <div className='bg-modal' >
          <div className='modal-content'>
            <p>{this.props.msg}</p>
            <Button handleClick={this.props.onCloseModal}>
              Close
            </Button>
          </div>
        </div>,
        document.getElementById('modal-root') )
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,    
  msg: PropTypes.string,
}

export default Modal;