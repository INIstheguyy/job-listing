
import React, { createContext, useContext,  useEffect, useState } from 'react';


const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  const handleFilterAdd = (tag) => {
    setSelectedFilters(prevFilters => {
      if (!prevFilters.includes(tag)) {
        return [...prevFilters, tag];
      }
      return prevFilters;
    });
  }
  
  const handleFilterDel = (tag) => {
    setSelectedFilters(currFilters => {
      const updatedFilters = currFilters.filter(tags => tags !== tag);
      return updatedFilters;
    });
  }
  
   const handleFilterClr = () => {
    return setSelectedFilters([]);
   }
  
  
  const contextValue = {
    selectedFilters,
    handleFilterAdd,
    handleFilterDel,
    handleFilterClr
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
