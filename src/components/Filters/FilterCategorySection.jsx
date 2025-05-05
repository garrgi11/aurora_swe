import React from 'react';

const FilterCategorySection = ({
  category,
  selectedValues,
  onFilterChange,
  onBookmarkClick,
  activeBookmark
}) => {
  const handleOptionClick = (optionId) => {
    const newSelectedValues = selectedValues.includes(optionId)
      ? selectedValues.filter(id => id !== optionId)
      : [...selectedValues, optionId];
    onFilterChange(newSelectedValues);
  };

  const handleBookmarkClick = (optionId) => {
    if (onBookmarkClick) {
      onBookmarkClick(category.id, optionId);
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
      <div className="space-y-2">
        {category.options.map((option) => {
          const isSelected = selectedValues.includes(option.id);
          const isActive = activeBookmark?.category === category.id && 
                          activeBookmark?.value === option.id;

          return (
            <div key={option.id} className="flex items-center justify-between">
              <button
                onClick={() => handleOptionClick(option.id)}
                className={`flex-1 text-left px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isSelected 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {option.name}
              </button>
              <button
                onClick={() => handleBookmarkClick(option.id)}
                className={`ml-2 p-2 rounded-md transition-colors
                  ${isActive 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}
                title="Bookmark this filter"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCategorySection; 