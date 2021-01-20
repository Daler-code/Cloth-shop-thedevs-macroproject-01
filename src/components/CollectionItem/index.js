import React from 'react';

import './styles.css';


const CollectionItem = ({name, price, img }) => {

  return (
    <div className="shop-item">
      <div className="shop-item-container" >
        <img src={img} alt="..." />
      </div>
      <div className="shop-item-footer">
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  )
}

export default CollectionItem;