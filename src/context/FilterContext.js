
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const handleFilterSelection = (filter) => {
    // Implement your filter selection logic here
    // Update the selectedFilters state
  };

  const contextValue = {
    selectedFilters,
    handleFilterSelection,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
