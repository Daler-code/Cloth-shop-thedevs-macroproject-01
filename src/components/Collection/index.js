import React from 'react';

import './styles.css';

import data from '../../mock/collection';

const Collection = () => {

  return (
    <div className="categories-container">
      <div className="categories-row">
        {
          data.slice(0, 3)
          .map(({id, name, image}) => (
            <div key={id} className="category-item-above">
              <img src={image} alt="..." />
              <div className="item-label">
                <h1 className="item-name">{name}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          ))
        }
      </div>
      <div className="categories-row">
        {
          data.slice(3, 5)
          .map(({id, name, image}) => (
            <div key={id} className="category-item">
              <img src={image} alt="..." />
              <div className="item-label">
                <h1 className="item-name">{name}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Collection;