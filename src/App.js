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
        selection: 0,
      };

    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/movies')
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
          self.setState({ movies: data })
        });

    }

    render() {
      const imgUrl1 = 'images/1.jpg';
      const imgUrl2 = 'images/2.jpg';

      // backgroundImage: 'url(' + imgUrl + ')',
      // backgroundSize: 'cover',
      // backgroundPosition: 'center center',

      return (
        <div className="band">
          <div className="item-1">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}></div>
              <article>
                <h1>Thor</h1>
                <button className="button">Buy seat</button>
              </article>
              <div className="seat-btn-bg">
                <div className="set-btn-container">
                  <button className="button">Normal seat: 1.99 USD </button>
                  <button className="button">Superior seat: 2.99 USD </button>
                  <button className="button">Sofa seat: 5.99 USD </button>
                </div>
              </div>
            </div>
          </div>
          <div className="item-2">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl2 + ')' }}></div>
              <article>
                <h1>Wonder woman</h1>
                <button className="button">Buy seat</button>
              </article>
            </div>
          </div>
          <div className="item-3">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}></div>
              <article>
                <h1>Logan</h1>
                <button className="button">Buy seat</button>
              </article>
            </div>
          </div>

          <div className="item-4">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}></div>
              <article>
                <h1>Despicable me 3</h1>
                <button className="button">Buy seat</button>
              </article>
            </div>
          </div>

          <div className="item-5">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}></div>
              <article>
                <h1>Star war</h1>
                <button className="button">Buy seat</button>
              </article>
            </div>
          </div>

          <div className="item-6">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}></div>
              <article>
                <h1>The karate kid</h1>
                <button className="button">Buy seat</button>
              </article>
            </div>
          </div>

          <div className="item-7">
            <div className="card">
              <div className='img' style={{ backgroundImage: 'url(' + imgUrl1 + ')' }}></div>
              <article>
                <h1>John wick</h1>
                <button className="button">Buy seat</button>
              </article>
            </div>
          </div>
        </div>

      );
    }
  },

);
