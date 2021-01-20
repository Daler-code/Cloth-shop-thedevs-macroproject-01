import React from 'react';

import collection from '../../mock/shop';
import CollectionPreview from '../CollectionPreview';

const CollectionOverview = () => {

  console.log(collection, 'collection')
  
  return (
    <div className="collection-overview-container">
      {
        collection.map(({id, items, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} items={items}  />
        ))
      }
    </div>
  )
}

export default CollectionOverview