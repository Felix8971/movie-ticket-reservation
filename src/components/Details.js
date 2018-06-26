import React from 'react';
import PropTypes from 'prop-types';
//import styled from 'styled-components';
import Close from '../cancel-button.svg';
import {movieType} from './types';

//I can use a functional componennt instead of a class component because 
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

  return (
    <div className='bg-modal' >
      <div className='detail-content'>
        <Close className="close-btn" width={40} height={40} onClick={props.onCloseModal} />
        <img src={'images/'+imgLarge} className='img-details' />
        <div className='detail-list'>
          <h1>{data.title}</h1>
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
  data: movieType.isRequired,//I use centralized PropTypes define in ./types/index.js (DRY principle)
}

export default Details;