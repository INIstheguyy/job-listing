import React, { createContext, useContext, useEffect, useState } from "react";

import data from "../data.json";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    console.log(selectedFilters);
  }, [selectedFilters]);

  const handleFilterAdd = (tag) => {
    // { name: "role", value: "frontend" }

    const existing = selectedFilters.findIndex((filter) => filter[tag.name]);

    if (existing !== -1) {
      return;
    }

    setSelectedFilters([...selectedFilters, tag]);
  };

  const handleFilterDel = (tag) => {
    setSelectedFilters(
      selectedFilters.filter((existingTag) => existingTag.name !== tag.name)
    );
  };

  const handleFilterClr = () => {
    return setSelectedFilters([]);
  };

  const contextValue = {
    selectedFilters,
    handleFilterAdd,
    handleFilterDel,
    handleFilterClr,
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
