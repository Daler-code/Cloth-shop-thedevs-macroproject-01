import React from 'react';

import './styles.css';

import Navbar from '../../components/Navbar';
import CollectionOverview from '../../components/CollectionOverview';

import data from '../../mock/shop';

const ShopPage = () => { // parent component
  
  return (
    <div className="shop-page-container">
      <Navbar />
      <CollectionOverview />
    </div>
  )
};

export default ShopPage