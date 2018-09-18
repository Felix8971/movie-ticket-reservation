import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.scss';
import { seats, transactionModal, detailsModal /*helloAction*/} from '../actions';
import NavBar from './NavBar';
import Modal from './Modal';
import Details from './Details';
import CardList from './CardList';
import { getMovies } from '../helpers';

class App extends Component {
  constructor(props) {
    super();
    this.handleCloseDetails = this.handleCloseDetails.bind(this);
    this.handleCloseSeats = this.handleCloseSeats.bind(this);
    this.state = { toto: false }
  }

  componentDidMount() {
    getMovies(this.props.dispatch);//we add movies to the store
  }

  handleCloseSeats() {
    this.props.dispatch(seats(null));
    this.props.dispatch(transactionModal(null));
  }

  handleCloseDetails(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch(detailsModal(null));
    console.log('close');
  }

  render() {
    const activeTransactionModal = this.props.activeTransactionModal;
    const detailsModalData = this.props.detailsModalReducer;
    console.log('this=', this);

    //The number of movie available in a cinema is limited (< 30) so we don't need to implement a pagination system
    return (
      <div>
        <NavBar/>
        <h1 className="title">Now Showing in Thailand</h1>
        <div className="band" >
          <CardList />
          <Modal msg={activeTransactionModal} onCloseModal={this.handleCloseSeats} />
          <Details data={detailsModalData} onCloseModal={this.handleCloseDetails} />
        </div>
      </div>
    );
  }
}

//const mapStateToProps = (state) => { return moviesFilter(state,'BOOKED') };
const mapStateToProps = (state) => { return state };

//Connects the App component to the Redux store.
export default connect(mapStateToProps)(App);
