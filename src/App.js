import React, {  useState } from "react";
import "./index.css";
import data from "./data.json";
import bkgrdmobile from "./assets/images/bg-header-mobile.svg";
import bkgrddesktop from "./assets/images/bg-header-desktop.svg";
import { FilterProvider } from "./context/FilterContext"; // Import useFilterContext

import JobTemplate from "./components/job";
import Filterfield from "./components/Filterfield";

function App() {
  const [jobs, setJobs] = useState(data);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <FilterProvider>
      <div className="background-wrapper">
        <div style={{ width: "100%", height: "auto" }}>
          <img
            src={bkgrdmobile}
            alt=""
            style={{ width: "100%", height: "auto" }}
            className="sm:hidden bg-color1"
          />
          <img
            src={bkgrddesktop}
            alt=""
            style={{ width: "100%", height: "auto" }}
            className="sm:block bg-color1 hidden"
          />
        </div>
        <div className="job-list">
          <Filterfield
            jobs={jobs}
            setJobs={setJobs}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />

          {jobs.map((job) => (
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
              jobs={jobs}
              setJobs={setJobs}
              handleFilterAdd={(tag) => {
                // { name: "role", value: "frontend" }

                const existing = selectedFilters.findIndex(
                  (filter) => filter[tag.name]
                );

                if (existing !== -1) {
                  return;
                }

                setSelectedFilters([...selectedFilters, tag]);
              }}
              handleFilterDel={() => {}}
            />
          ))}
        </div>
      </div>
    </FilterProvider>
  );
}

export default App;
