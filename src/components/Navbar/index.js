import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import IconBag from '../../assets/icons/shopping-bag.png';
import Logo from '../../assets/icons/crown.png';
import CartPopup from '../../components/CartPopup';

// state es6 js
class Navbar extends React.Component {
  // logic part of comp
  constructor () {
    super()
    this.state = {
      show: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  // handles click
  handleClick () {
    this.setState({show: true})
  }

  render () {
    // our presentational part
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img id="logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <a href="#">Sign in</a>
          <img onClick={this.handleClick} id="bag" src={IconBag} alt="bag" />
        </div>
        {
          this.state.show ? (<CartPopup />) : null
        }
      </div>
    )
  } 
}

export default Navbar;