import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styled , { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import '../style.scss'
import SelectSeat from './SelectSeat'
import { seats } from '../actions'
import Modal from './Modal'


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
      });
  }

  handleCloseSeats() {
    this.props.dispatch(seats(null));
    this.props.dispatch({
      type: 'OPEN_TRANSACTION_MODAL',
      message: '',
    });
  }

  // onCloseModal(){
  //   this.props.dispatch(seats(null))
  // }

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
          message: `Reservation faite ${data.price} !`,
        });
      });
  }


  render() {
    const self = this;
    console.log('this=',this);
    console.log('this.state=', this.state);
    const activeSeatModal = this.props.activeSeatModal;
    const activeTransactionModal = this.props.activeTransactionModal;

    console.log('activeTransactionModal=', activeTransactionModal);

    const cardList = this.state.movies.map(function (item, i) {
      return (
        <div key={i} className="item-1">
          <div className="card">
            <div className="img" style={{ backgroundImage: 'url(images/' + item.image + ')' }}></div>
            <article>
              <h1 className="title">{item.title}</h1>
              <button className="button" onClick={() => {
                self.props.dispatch(seats(i))
              }}>Buy seat</button>
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
      <div className="band" >
        <Modal show={activeTransactionModal} msg={'Hi !'} 
          onCloseModal={this.handleCloseSeats}>
        </Modal>
        {cardList}
      </div>
    );
  }
}

export default connect((state) => state)(App);
