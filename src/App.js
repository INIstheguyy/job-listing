import "./index.css"
import data from './data.json'
import bkgrdmobile from "./assets/images/bg-header-mobile.svg"

import JobTemplate from "./components/job"

function App() {
  console.log(data)
  return (
    <div className="background-wrapper">
      <div style={{ width: '100%', height: 'auto' }}>
        <img src={bkgrdmobile} alt="" style={{ width: '100%', height: 'auto' }} className="bg-mobile"/>
      </div>
      <div className="job-list">
        <JobTemplate/>
      </div>
    </div>
  );
}

export default App;
