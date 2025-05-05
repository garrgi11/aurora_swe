import React from 'react';
import FilterContainer from './Filters/FilterContainer';
import './Filters/FilterStyles.css';

const ProductListing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Aurora</h1>
      <FilterContainer />
    </div>
  );
};

export default ProductListing; 