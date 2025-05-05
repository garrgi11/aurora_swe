import React, { useState, useRef, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import ActiveFilters from './ActiveFilters';
import { products } from './products';
import './FilterStyles.css';

const FilterContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeBookmark, setActiveBookmark] = useState(null);
  const scrollTimeoutRef = useRef(null);

  const handleFilterChange = (category, values) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleBookmarkClick = (category, value) => {
    setActiveBookmark({ category, value });
    
    // Find the first product that matches this filter
    const matchingProduct = products.find(product => 
      product[category]?.includes(value)
    );

    if (matchingProduct) {
      // Remove any existing highlight
      const existingHighlight = document.querySelector('.highlight-product');
      if (existingHighlight) {
        existingHighlight.classList.remove('highlight-product');
      }

      // Add highlight class to the matching product
      const productElement = document.getElementById(`product-${matchingProduct.id}`);
      if (productElement) {
        productElement.classList.add('highlight-product');
        
        // Scroll to the product
        productElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });

        // Remove highlight after animation
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          productElement.classList.remove('highlight-product');
        }, 2000);
      }
    }
  };

  const handleRemoveFilter = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(v => v !== value)
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  useEffect(() => {
    // Filter products based on selected filters
    const filtered = products.filter(product => {
      return Object.entries(selectedFilters).every(([category, values]) => {
        if (!values.length) return true;
        return values.some(value => product[category]?.includes(value));
      });
    });
    setFilteredProducts(filtered);
  }, [selectedFilters]);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-64 flex-shrink-0">
        <FilterPanel
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onBookmarkClick={handleBookmarkClick}
          activeBookmark={activeBookmark}
        />
      </div>
      
      <div className="flex-1">
        <ActiveFilters
          selectedFilters={selectedFilters}
          onRemoveFilter={handleRemoveFilter}
          onClearFilters={handleClearFilters}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Use Cases:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.useCases.map(useCase => (
                      <span key={useCase} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Industries:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.industries.map(industry => (
                      <span key={industry} className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">I/O Types:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {product.ioTypes.map(type => (
                      <span key={type} className="px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Customization:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded">
                      {product.customizationLevel}
                    </span>
                  </div>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-500">Pricing:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-sm rounded">
                      {product.pricingModel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterContainer; 