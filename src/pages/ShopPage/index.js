import React from 'react';

import './styles.css';

import Navbar from '../../components/Navbar';
import CollectionOverview from '../../components/CollectionOverview'

const ShopPage = () => {
  
  return (
    <div className="shop-page-container">
      <Navbar />
      <CollectionOverview />
    </div>
  )
};

export default ShopPage