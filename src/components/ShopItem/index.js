import React from 'react';

import './styles.css';


const ShopItem = ({ item }) => {

  const {image, price, name} = item;

  return (
    <div className="shop-item">
      <div className="shop-item-container" >
        <img src={image} alt="..." />
      </div>
      <div className="shop-item-footer">
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  )
}

export default ShopItem;