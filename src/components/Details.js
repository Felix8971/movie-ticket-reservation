import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import Close from '../cancel-button.svg';
import {movieType} from './types';
import { connect } from 'react-redux';


//I can use a functional component instead of a class component because
//my component just render props without logic state and life cycle events
const  Details = props => {


  if (!props.data) {
    return null;
  }

  //Functional Component (with destructuring of props)
  const Info = ({name, value}) => (
    <div className="movie-info">
      <div className="name">{name}</div>
      <div className="value">{value}</div>
    </div>
  );

  const data = props.data;
  const imgLarge = data.image.split('.')[0] + '_big.jpg';

  // const test = (e) => {
  //   e.stopPropagation();
  //   this.props.dispatch(detailsModal(null));
  //   console.log('close');
  // }

  return (
    <div className='bg-modal' onClick={props.onCloseModal}>
      <div className='detail-content' onClick={ proxy => proxy.stopPropagation()}>
        <Close className="close-btn" width={40} height={40} onClick={props.onCloseModal} />
        <img src={'images/'+imgLarge} className='img-details' />
        <div className='detail-list'>
          <h1>{data.title}</h1>
          <p>{props.hello}</p>
          <Info name='Genre' value={data.genre}/>
          <Info name='Director' value={data.director}/>
          <Info name='Stars' value={data.stars}/>
          <Info name='Plot' value={data.plot}/>
        </div>
      </div>
    </div>
  );
}



Details.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  data: movieType,//I use centralized PropTypes define in ./types/index.js (DRY principle)
  hello: PropTypes.string,
}


const mapStateToProps = (state) => {
  return {
    hello: state.helloReducer,
  }
};

//Connects the App component to the Redux store.
export default connect(mapStateToProps)(Details);
