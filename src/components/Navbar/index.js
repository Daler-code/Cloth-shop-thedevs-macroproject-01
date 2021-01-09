import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import IconBag from '../../assets/icons/shopping-bag.png';
import Logo from '../../assets/icons/crown.png';

const Navbar = () => {
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
        <img id="bag" src={IconBag} alt="bag" />
      </div>
    </div>
  )
}

export default Navbar;