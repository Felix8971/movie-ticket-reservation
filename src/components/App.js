import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styled , { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import '../style.scss'
import SelectSeat from './SelectSeat'
import { seats, transactionModal } from '../actions'
import Modal from './Modal'
import Button from './Button';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
    };
    this.handleBuy = this.handleBuy.bind(this);
    this.handleCloseSeats = this.handleCloseSeats.bind(this);
  }

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/movies')
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        //this.props.dispatch({type:'MOVIE_UPDATE', movies:data})
        self.setState({ movies: data })
      })
      .catch(function(error) {
        self.props.dispatch({
          type: 'OPEN_TRANSACTION_MODAL',
          message: 'Sorry an error occurred !',
        });
      });
  }

  handleCloseSeats() {
    this.props.dispatch(seats(null));
    this.props.dispatch(transactionModal(''));
  }

  handleBuy(data) {
    const self = this;

    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: `{ "movieId": ${data.movieId}, "price": ${data.price}, "currency": "${data.currency}" }`,
    })
      .then(function (resp) { return resp.json(); })
      .then(function () {

        self.props.dispatch({
          type: 'OPEN_TRANSACTION_MODAL',
          message: `Congratulations!\nYour seat for the film ${data.title} has been booked.\nPlease check your emails for more details.`,
        });
      })
      .catch(function(error) {
        self.props.dispatch({
          type: 'OPEN_TRANSACTION_MODAL',
          message: 'Sorry an error occurred !',
        });
      });

    //todo : treat error
  }


  render() {
    const self = this;
    console.log('this=', this);
    console.log('this.state=', this.state);
    const activeSeatModal = this.props.activeSeatModal;
    const activeTransactionModal = this.props.activeTransactionModal;

    console.log('activeTransactionModal=', activeTransactionModal);

    //The number of movie available in our cinema is limited so we don't need to implement a pagination system
    const cardList = this.state.movies.map(function (item, i) {
      return (
        <div key={i} className="item-1">
          <div className="card">
            <div className="img" style={{ backgroundImage: 'url(images/' + item.image + ')' }}></div>
            <article>
              <h1 className="movie-title">{item.title}</h1>
              <Button className="button" handleClick={() => {
                self.props.dispatch(seats(i))
              }}>Buy seat</Button>
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
          <Modal show={activeTransactionModal} msg={activeTransactionModal}
            onCloseModal={this.handleCloseSeats}>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(App);
