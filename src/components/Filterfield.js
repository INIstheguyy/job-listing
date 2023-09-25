import React from "react";
import Del from "../assets/images/icon-remove.svg";

import data from "../data.json";

function Filterfield({ jobs, setJobs, selectedFilters, setSelectedFilters }) {
  return (
    <div className="filter-wrapper w-full mx-auto md:w-10/12 text-md p-5">
      <div className="p-5 shadow-lg relative bg-white rounded-md m-5 md:flex justify-between">
        <div className="flex flex-wrap">
          {selectedFilters.map(({ name, value }, index) => {
            return (
              <button className="mx-4" key={index}>
                <span className="">{value}</span>
                <span
                  className=""
                  onClick={() => {
                    const newFilters = selectedFilters.filter(
                      (existingTag) => existingTag.name !== name
                    );

                    let filterData = data;

                    for (const filter of newFilters) {
                      filterData = filterData.filter((job) => {
                        if (filter.name === "languages") {
                          return job.languages.includes(filter.value);
                        } else if (filter.name === "tools") {
                          return job.tools.includes(filter.value);
                        } else {
                          return job[filter.name] === filter.value;
                        }
                      });
                    }

                    setJobs([...filterData]);

                    setSelectedFilters(newFilters);
                  }}
                >
                  <img
                    className="p-1 bg-black cursor-pointer inline-flex"
                    src={Del}
                    alt=""
                  />
                </span>
              </button>
            );
          })}
        </div>
        <div className="">
          <button
            onClick={() => {
              setSelectedFilters([]);
              setJobs(data);
            }}
            className=""
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filterfield;
