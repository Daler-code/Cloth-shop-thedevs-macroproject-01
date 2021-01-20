import React from 'react';

import './styles.css';

import CollectionItem from '../CollectionItem'

const CollectionPreview = ({ items, title }) => {
  console.log(title, 'its title')
  return (
    <div>
      <h1>{title}</h1>
      <div className="collection-preview">
        {
          items.filter((item, idx) => idx < 4)
          .map(({id, ...otherProps}) => (
            <CollectionItem key={id} {...otherProps} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview