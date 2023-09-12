import React from 'react';
import "./index.css";
import data from './data.json';
import bkgrdmobile from "./assets/images/bg-header-mobile.svg";
import bkgrddesktop from "./assets/images/bg-header-desktop.svg";
import { FilterProvider, useFilterContext } from "./context/FilterContext"; // Import useFilterContext

import JobTemplate from "./components/job";
import Filterfield from "./components/Filterfield";

function App() {
  const { selectedFilters } = useFilterContext(); // Use the useFilterContext hook to access selectedFilters
  
  return (
    <FilterProvider>
      <div className="background-wrapper">
        <div style={{ width: '100%', height: 'auto' }}>
          <img src={bkgrdmobile} alt="" style={{ width: '100%', height: 'auto' }} className="sm:hidden bg-color1" />
          <img src={bkgrddesktop} alt="" style={{ width: '100%', height: 'auto' }} className="sm:block bg-color1 hidden" />
        </div>
        <div className="job-list">
          {selectedFilters.length > 0 ? (
            <Filterfield /> // Conditionally render Filterfield if selectedFilters has values
          ) : null}
          {data.map((job) => (
            <JobTemplate
              logo={job.logo}
              company={job.company}
              position={job.position}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
              role={job.role}
              level={job.level}
              featured={job.featured}
              neew={job.new}
            />
          ))}
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;

