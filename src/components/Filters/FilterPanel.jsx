import React from 'react';
import FilterCategorySection from './FilterCategorySection';

const FilterPanel = ({ 
  selectedFilters, 
  onFilterChange, 
  onBookmarkClick, 
  activeBookmark 
}) => {
  const filterCategories = [
    {
      id: 'useCases',
      name: 'Use Cases',
      options: [
        { id: 'automation', name: 'Automation' },
        { id: 'data-analysis', name: 'Data Analysis' },
        { id: 'audio-speech', name: 'Audio & Speech' }
      ]
    },
    {
      id: 'industries',
      name: 'Industries',
      options: [
        { id: 'finance', name: 'Finance' },
        { id: 'legal', name: 'Legal' },
        { id: 'healthcare', name: 'Healthcare' },
        { id: 'marketing', name: 'Marketing' }
      ]
    },
    {
      id: 'ioTypes',
      name: 'I/O Types',
      options: [
        { id: 'text-to-text', name: 'Text to Text' },
        { id: 'audio-to-text', name: 'Audio to Text' },
        { id: 'text-to-audio', name: 'Text to Audio' }
      ]
    },
    {
      id: 'customizationLevel',
      name: 'Customization Level',
      options: [
        { id: 'api', name: 'API' },
        { id: 'sdk', name: 'SDK' },
        { id: 'widgets', name: 'Widgets' }
      ]
    },
    {
      id: 'pricingModel',
      name: 'Pricing Model',
      options: [
        { id: 'subscription', name: 'Subscription' },
        { id: 'free', name: 'Free' },
        { id: 'pay-per-use', name: 'Pay Per Use' }
      ]
    }
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-6">
        {filterCategories.map((category) => (
          <FilterCategorySection
            key={category.id}
            category={category}
            selectedValues={selectedFilters[category.id] || []}
            onFilterChange={(values) => onFilterChange(category.id, values)}
            onBookmarkClick={onBookmarkClick}
            activeBookmark={activeBookmark}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterPanel; 