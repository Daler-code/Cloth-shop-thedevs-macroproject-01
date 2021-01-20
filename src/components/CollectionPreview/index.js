import React from 'react';

import './styles.css';

import ShopItem from '../../components/ShopItem';


const CollectionPreview = ({title, items}) => {

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div className="collection-preview-container">
        {
          items.filter((item, idx) => idx < 4)
          .map((item) => (
            <ShopItem key={item.id} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default CollectionPreview