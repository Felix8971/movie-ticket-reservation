import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styled , { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import '../style.scss'
import { seats, transactionModal, updateMoviesAction, bookMovieAction } from '../actions'
import Modal from './Modal'
import Button from './Button';
import SelectSeat from './SelectSeat'
import { getMovies, transaction } from '../helpers'

class App extends Component {
  constructor(props) {
    super();
    // this.state = {
    //   _movies: [],
    // };
    this.handleBuy = this.handleBuy.bind(this);
    this.handleCloseSeats = this.handleCloseSeats.bind(this);
  }

  componentDidMount() {
    //getMovies(this);
    const self = this;
    fetch('http://localhost:3001/movies') 
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
        //I add a booked property, it will tell us if the movie has been booked
        //if so we'll add an icon "booked" and remove the "buy seat" button"
        const movies = data.map((elem) => {
          elem.booked = false;
          return elem;
        });
        self.props.dispatch(updateMoviesAction(movies));
    })
    
  }


  componentWillMount(){
    
  }

  handleCloseSeats() {
    this.props.dispatch(seats(null));
    this.props.dispatch(transactionModal(''));
  }

  handleBuy(data) {
    transaction(this, data)
  }


  render() {
    const self = this;
    console.log('this=', this);
    console.log('this.state=', this.state);
    const activeSeatModal = this.props.activeSeatModal;
    const activeTransactionModal = this.props.activeTransactionModal;

    console.log('activeTransactionModal=', activeTransactionModal);
    //setTimeout( ()=>{ self.props.dispatch(bookMovieAction(2)) },3000);
    //The number of movie available in a cinema is limited (< 30) so we don't need to implement a pagination system
    const cardList = this.props.moviesReducer.map(function (item, i) {
      
      let button;
      if ( !item.booked ){
        button = <Button className="button" handleClick={() => {
          self.props.dispatch(seats(i))
        }}>Buy seat</Button>
      }else{
        button = <div>BOOKED!</div>
      }
      
      return (
        <div key={i} className="item">
          <div className="card">
            <div className="img" style={{ backgroundImage: 'url(images/' + item.image + ')' }}></div>
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
          <Modal show={activeTransactionModal} msg={activeTransactionModal}
            onCloseModal={this.handleCloseSeats}>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(App);
