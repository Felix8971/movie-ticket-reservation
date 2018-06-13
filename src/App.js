import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styled , { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import './style.scss'
import SelectSeat from './components/SelectSeat'
import { seats } from './actions'


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: [],
      //seats: 0,//{ open: false, id: null },
      // modalTransaction: { open: false, data: {} },
      // detailsMovie: { open: false, id: null },
    };
    this.handleBuy = this.handleBuy.bind(this);
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
          message: `Reservation faite ${data.price} !`,
        });
      });
    
    //this.props.dispatch({ type: 'OPEN_TRANSACTION_MODAL', id: 1111 })
  }

  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/movies')
      .then(function (resp) { return resp.json(); })
      .then(function (data) {
        //this.props.dispatch({type:'MOVIE_UPDATE', movies:data})
        self.setState({ movies: data })
      });
    //setTimeout(() => { this.props.dispatch({ type: 'OPEN_SEAT_MODAL', id: 2 }) }, 2000);
  }


  render() {
    const self = this;
    console.log(this);
    console.log('this.state=', this.state);
    const activeSeatModal = this.props.activeSeatModal;
    const activeTransactionModal = this.props.activeTransactionModal;

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

            <SelectSeat show={i == activeSeatModal} handleBuy={self.handleBuy} item={item} />
          </div>
        </div>

      );
    });

    return (
      <div className="band" >
        {cardList}
      </div>
    );
  }
}


export default connect((state) => state)(App);
