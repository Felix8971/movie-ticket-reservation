import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styled , { injectGlobal } from 'styled-components';
//import fetch from 'isomorphic-fetch';
import '../style.scss';
import { seats, transactionModal, detailsModal /*,updateMoviesAction , bookMovieAction*/ } from '../actions';
import Modal from './Modal';
import Details from './Details';
import Button from './Button';
import SelectSeat from './SelectSeat'
import { getMovies, transaction } from '../helpers';

class App extends Component {
  constructor(props) {
    super();
    this.handleBuy = this.handleBuy.bind(this);
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
    this.handleCloseDetails = this.handleCloseDetails.bind(this);
    this.handleCloseSeats = this.handleCloseSeats.bind(this);
  }

  componentDidMount() {
    getMovies(this);//we add movies to the store 
  }

  handleCloseSeats() {
    this.props.dispatch(seats(null));
    this.props.dispatch(transactionModal(''));
  }

  handleCloseDetails() {
    this.props.dispatch(detailsModal(null));
  }

  handleOpenDetails(data) {
    this.props.dispatch(detailsModal(data));
  }

  handleBuy(data) {
    transaction(this, data)
  }


  render() {
    const self = this;
    const activeSeatModal = this.props.activeSeatModal;
    const activeTransactionModal = this.props.activeTransactionModal;
    const activeDetailsModal = this.props.activeDetailsModal;

    console.log('this=', this);
    console.log('this.state=', this.state);
    console.log('activeTransactionModal=', activeTransactionModal);

    //The number of movie available in a cinema is limited (< 30) so we don't need to implement a pagination system
    const cardList = this.props.moviesReducer.map(function (item, i) {

      let button;
      if (!item.booked) {
        button = <Button className="button" handleClick={() => {
          self.props.dispatch(seats(i))
        }}>Buy seat</Button>
      } else {
        button = <div>BOOKED!</div>
      }

      return (
        <div key={i} className="item">
          <div className="card">
            <div className="img" onClick={() => { self.handleOpenDetails(item) }} style={{ backgroundImage: 'url(images/' + item.image + ')' }}></div>
            <article>
              <h1 className="movie-title">{item.title}</h1>
              {button}
            </article>
            <SelectSeat
              show={i == activeSeatModal}
              handleClose={self.handleCloseSeats}
              handleBuy={self.handleBuy}
              item={item}
            />
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1 className="title">Now Showing in Thailand</h1>
        <div className="band" >
          {cardList}
          <Modal show={!!activeTransactionModal} msg={activeTransactionModal}
            onCloseModal={this.handleCloseSeats}>
          </Modal>
          <Details show={!!activeDetailsModal} data={activeDetailsModal}
            onCloseModal={this.handleCloseDetails} >
          </Details>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(App);
