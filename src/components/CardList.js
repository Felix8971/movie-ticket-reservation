import React from 'react'
import SelectSeat from './SelectSeat'
import {detailsModal, helloAction, seats, transactionModal} from '../actions';
import connect from 'react-redux/es/connect/connect';
import Button from './Button';
import {transaction} from '../helpers';

class CardList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const self = this;

    return this.props.movies.map(function (item, i) {

      let button;
      if (!item.booked) {
        button = <Button className="button" handleClick={() => {
          self.props.onOpenSeatModal(i)
        }}>Buy seat</Button>
      } else {
        button = <div><i className="fas fa-loveseat"></i>BOOKED!</div>
      }

      return (
        <div key={i} className="item">
          <div className="card">
            <div className="img" onClick={() => { self.props.onOpenDetails(item) }} style={{ backgroundImage: 'url(images/' + item.image + ')' }}></div>
            <article>
              <h1 className="movie-title">{item.title}</h1>
              {button}
            </article>
            <SelectSeat
              show={i == self.props.activeSeatModal}
              handleClose={self.props.onCloseSeat}
              handleBuy={self.props.handleBuy}
              item={item}
            />
          </div>
        </div>
      );
    });

  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer,
    activeSeatModal: state.activeSeatModal,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onOpenDetails : (data) => {
      dispatch(helloAction('Felix'));
      dispatch(detailsModal(data));
    },
    onOpenSeatModal : (i) => {
      dispatch(seats(i));
    },
    onCloseSeat : () => {
      dispatch(seats(null));
      dispatch(transactionModal(null));
    },
    handleBuy : (data) => {
      transaction(dispatch, data);
    },
  };
}

//Connects the App component to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
