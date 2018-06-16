import React from 'react';
//import PropTypes from 'prop-types';
//import styled from 'styled-components';
import Close from '../cancel-button.svg';

class Details extends React.Component {
  render() {

  // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    /*
    "title": "Logan",
      "genre": "Action, Drama, Sci-Fi",
      "director": "James Mangold ",
      "stars": "Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook",
      "plot": "In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan's attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.",
      "image": "3.jpg",
      "currency": "THB",
      "prices": {
        "normal": 200,
        "superior": 300,
        "sofa": 600
      }
    */
    
    const data = this.props.data;

    return (
      <div className='bg-modal' >
        <div className='detail-content'>
          <Close className="close-btn" width={40} height={40} onClick={this.props.onCloseModal} />
          
          <img src={'images/'+data.image} className='img-details' />
          <div className='detail-list'>
            <h1>{data.title}</h1>
            <div className="movie-info">
              <div className="name">Genre</div>
              <div className="value">{data.genre}</div>
            </div>
            <div className="movie-info">
              <div className="name">Director</div>
              <div className="value">{data.director}</div>
            </div>
            <div className="movie-info">
              <div className="name">Stars</div>
              <div className="value">{data.stars}</div>
            </div>

            <div className="movie-info">
              <div className="name">Plot</div>
              <div className="value-long">{data.plot}</div>
            </div>            

          </div>
          
        </div>
      </div>
    );
  }
}

//Details.propTypes = {
//onCloseModal: PropTypes.func.isRequired,    
//data: PropTypes.object.isRequired,
//}

export default Details;