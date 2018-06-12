import React, { Component } from 'react';
import { connect } from 'react-redux';
//import styled , { injectGlobal } from 'styled-components';
import fetch from 'isomorphic-fetch';
import './style.scss'


export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();
      this.state = {
        movies: [],
        buySeatModal: 0,//{ open: false, id: null },
        modalTransaction: { open: false, data: {} },
        detailsMovie: { open: false, id: null },
      };

    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/movies')
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
          //this.props.dispatch({type:'MOVIE_UPDATE', movies:data})
          self.setState({ movies: data })
        });
      setTimeout(() => { this.props.dispatch({ type: 'SEAT', id: 2 }) }, 2000);
    }

    render() {
      console.log('this.state=', this.state);
      const cardList = this.state.movies.map(function (item, i) {
        return (

          <div key={i} className="item-1">
            <div className="card">
              <div className="img" style={{ backgroundImage: 'url(images/' + item.image + ')' }}></div>
              <article>
                <h1 className="title">{item.title}</h1>
                <button className="button">Buy seat</button>
              </article>
              <div className="seat-btn-bg" >
                <div className="seat-btn-container">
                  <button className="button">Normal seat: 1.99 USD </button>
                  <button className="button">Superior seat: 2.99 USD </button>
                  <button className="button">Sofa seat: 5.99 USD </button>
                </div>
              </div>
            </div>
          </div>

        );
      });

      return (
        <div className="band">
          {cardList}
        </div>
      );
    }
  },

);
