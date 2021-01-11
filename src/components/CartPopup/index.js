import React from 'react';

import './styles.css';
import Buttons from '../Buttons';

// class component
class CartPopup extends React.Component {

  render() {
    return (
      <div className="cart-popup-container">
        <Buttons>go to checkout</Buttons>
      </div>
    )
  }
}

export default CartPopup;