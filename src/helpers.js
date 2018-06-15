
import fetch from 'isomorphic-fetch';
const url = 'http://localhost:3001';

export const getMovies = (self, id = '') => { 
  fetch(url + '/movies/' + id) 
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
      if ( self ) {
        self.setState({ movies: data });
      }
    })
    .then(function (data) {
      //callback();
      return data;
    })
    .catch(function(error) {
      if ( self ) { 
        self.props.dispatch({
          type: 'OPEN_TRANSACTION_MODAL',
          message: 'Sorry an error occurred !',
        });
      }
    })
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
      self.props.dispatch({
        type: 'OPEN_TRANSACTION_MODAL',
        message: `Congratulations!\nYour seat for the film ${data.title} has been booked.\nPlease check your emails for more informations.`,
      });
    })
    .catch(function(error) {
      self.props.dispatch({
        type: 'OPEN_TRANSACTION_MODAL',
        message: 'Sorry an error occurred !',
      });
    });
}