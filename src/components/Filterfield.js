import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import Del from "../assets/images/icon-remove.svg"

function Filterfield() {
    const { handleFilterDel, handleFilterClr, selectedFilters } = useFilterContext();
  return (
    <div className='filter-wrapper w-full mx-auto md:w-10/12 text-md p-5'>
      <div className="">
        {selectedFilters.map((tag, index) => {
          return(
            <button key={index}>
            <span className="">{tag}</span>
            <span className="" onClick={() => handleFilterDel(tag)}>
              <img src={Del} alt="" />
            </span>
            </button>
          )
        })}
      </div>
      <div className="">
        <button onClick={() => handleFilterClr()} className="">Clear</button>
      </div>
    </div>
  )
}

export default Filterfield