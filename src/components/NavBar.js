import React from 'react';
//import PropTypes from 'prop-types';



class NavBar extends React.Component {
  constructor(props) {
    super();
    this.burgerToggle = this.burgerToggle.bind(this);
  }
  
  burgerToggle() {
    const links = document.querySelector('.narrow-links');
    links.style.display = links.style.display == 'block' ? 'none' : 'block';
  }

  render() {
    return (
      <nav>
        <div className="nav-wide">
          <div className="wide">
            <a href="#">Cinema</a>
            <a href="#">Movies</a>
            <a href="#">News</a>
          </div>
        </div>
        <div className="nav-narrow"> 
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrow-links">
            <a href="#" onClick={this.burgerToggle}>Cinema</a>
            <a href="#" onClick={this.burgerToggle}>Movies</a>
            <a href="#" onClick={this.burgerToggle}>News</a>
          </div>
        </div>
      </nav>
    )
  }
}

// NavBar.propTypes = {
//   handleClick: PropTypes.func,    
// }

export default NavBar;


