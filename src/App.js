import "./index.css"
import data from './data.json'
import bkgrdmobile from "./assets/images/bg-header-mobile.svg"
import bkgrddesktop from "./assets/images/bg-header-desktop.svg"
import { FilterProvider } from "./context/FilterContext"


import JobTemplate from "./components/job"

function App() {
  return (
    <FilterProvider>
          <div className="background-wrapper">
          <div style={{ width: '100%', height: 'auto' }}>
            <img src={bkgrdmobile} alt="" style={{ width: '100%', height: 'auto' }} className="sm:hidden bg-color1"/>
            <img src={bkgrddesktop} alt="" style={{ width: '100%', height: 'auto' }} className="sm:block bg-color1 hidden"/>
          </div>
          <div className="job-list">
          {data.map((job) => (
            <JobTemplate// Make sure to provide a unique key for each JobTemplate
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
