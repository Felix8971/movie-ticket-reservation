import 'regenerator-runtime/runtime';
import { /*call,*/ put, /*takeEvery,*/ takeLatest } from 'redux-saga/effects'
const url = 'http://localhost:3001';
import {transactionModal, bookMovieAction} from '../actions';
const getUserId = () => {
  return 'he6fe54u4s56o71d36z51no';
}

// worker Saga: will be fired on MOVIES_FETCH_REQUESTED actions
function* fetchMovies(action) {
  try {
    const movies = yield fetch(url + '/movies/').then(response => response.json());
    const transactions = yield fetch(url + '/transactions/').then(response => response.json());
    const bookedMovies = transactions.filter(elem => elem.userId == getUserId());
    debugger;
    //normaly we should do that server side but we don't have real server here
    for (let i=0;i<movies.length;i++) {
      for (let j=0;j<bookedMovies.length;j++) {
        if ( movies[i].id == bookedMovies[j].movieId ) {
          movies[i].booked = true;
        }
      };
    };
    // dispatch a action to the store with the movies array
    yield put({type: 'MOVIES_FETCH_SUCCEEDED', movies});
  } catch (e) {
    yield put({type: 'MOVIES_FETCH_FAILED', message: e.message});
  }
}


function* bookMovie(action) {
  debugger;

  try {
    debugger;
    const response = yield fetch(url + '/transactions', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: `{ "movieId": ${action.data.id}, "price": ${action.data.price}, "currency": "${action.data.currency}", "userId": "${action.data.userId}" }`,
    });

    const msg = `Congratulations!\nYour seat for the film ${action.data.title} has been booked.\nPlease check your emails for more informations.`;
    //const id = yield response.json().id;
    yield put(transactionModal(msg));
    yield put(bookMovieAction(action.data.id-1));

  } catch (e) {
    yield put(transactionModal('Sorry an error occurred !'));
  }
}

/*
  Starts fetchMovies on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
/*function* mySaga() {
  yield takeEvery('MOVIES_FETCH_REQUESTED', fetchMovies);
}*/

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('MOVIES_FETCH_REQUESTED', fetchMovies);
  yield takeLatest('BOOK_A_MOVIE', bookMovie);
}

export default mySaga;