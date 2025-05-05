import React from 'react';

const ActiveFilters = ({ selectedFilters, onRemoveFilter, onClearFilters }) => {
  const hasActiveFilters = Object.values(selectedFilters).some(
    filters => filters.length > 0
  );

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">Active Filters</h3>
        <button
          onClick={onClearFilters}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          Clear All
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {Object.entries(selectedFilters).map(([category, values]) =>
          values.map(value => (
            <div
              key={`${category}-${value}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              <span>{value}</span>
              <button
                onClick={() => onRemoveFilter(category, value)}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActiveFilters; 