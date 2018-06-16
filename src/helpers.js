
import fetch from 'isomorphic-fetch';
import {/* seats, */ transactionModal, updateMoviesAction , bookMovieAction } from './actions'
const url = 'http://localhost:3001';

export const getMovies = (self, id = '') => { 

  fetch(url + '/movies/' + id) 
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
      //We add a booked property, it will tell us if the movie has been booked
      //if so we'll add an icon "booked" and remove the "buy seat" button"
      const movies = data.map((elem) => {
        elem.booked = false;
        return elem;
      });
      self.props.dispatch(updateMoviesAction(movies));

      //todo: check the transaction's list and maj the movies already booked by the user  
      // fetch(url + '/transactions')
      // .then(function (resp) { return resp.json(); })
      // .then(function (transac) {
      // });

    })
    .catch(function(error) {
      if ( self ) { 
        self.props.dispatch(transactionModal('Sorry an error occurred !'));
      }
    });  
}

export const transaction = (self, data) => { 
  fetch(url + '/transactions', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: `{ "movieId": ${data.movieId}, "price": ${data.price}, "currency": "${data.currency}", "userId": "${data.userId}" }`,
  })
    .then(function (resp) { return resp.json(); })
    .then(function () {
      const msg = `Congratulations!\nYour seat for the film ${data.title} has been booked.\nPlease check your emails for more informations.`;
      self.props.dispatch(transactionModal(msg));
      self.props.dispatch(bookMovieAction(data.movieId-1));
    })
    .catch(function(error) {
      self.props.dispatch(transactionModal('Sorry an error occurred !'));
    });
}