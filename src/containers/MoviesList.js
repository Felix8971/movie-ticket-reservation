import { connect } from 'react-redux';
import { seats } from '../actions';
import MoviesList from '../components/MoviesList';

//import { VisibilityFilters } from '../actions'

const getVisibleMovies = (movies, filter) => {//trier par genre ?
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(t => t.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(t => !t.completed)
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }

  return movies;
}

const mapStateToProps = state => ({
  movies: getVisibleMovies(state.movies, state.filter),
})

const mapDispatchToProps = dispatch => ({
  seats: id => dispatch(seats(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)
