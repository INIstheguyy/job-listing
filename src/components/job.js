import React from 'react';
import { useFilterContext } from '../context/FilterContext';

function JobTemplate({
    logo,
    company,
    position,
    postedAt,
    contract,
    location,
    languages = [], 
    tools = [], 
    role,
    level,
    neew,
    featured,
}) {
    const { handleFilterAdd, handleFilterDel } = useFilterContext();
  return (
    <div className="job-wrapper w-full mx-auto md:w-10/12 text-md p-5">
      <div className="job-template  p-5 shadow-lg relative bg-white rounded-md m-5 md:flex justify-between">
        <img className="w-[40px] absolute -top-4 block md:hidden" src={logo} alt="" />
        <div className="upper-template pr-6 md:flex justify-between">
          <img className="md:block hidden pr-3" src={logo} alt="" />
          <div className="">
            <div className="">
              <p className="company font-bold py-1 text-color4">{company}</p>
              <p className="new">{neew}</p>
              <p className="featured">{featured}</p>
            </div>
            <div className="">
              <p className="position font-bold text-black ">{position}</p>
            </div>
            <div className="inline text-gray-400 py-2 justify-between  ">
              <p className="posted-at inline">{postedAt}</p>
              <p className="contract px-2 inline">{contract}</p>
              <p className="location px-2 inline">{location}</p>
            </div>
          </div>
        </div>
        <hr className="my-2 border-b-2 text-black block md:hidden" />
        <div className="lower-template flex-shrink md:inline my-3 md:my-0">
          <p className="role font-medium inline p-1 mx-2 rounded-sm cursor-pointer text-color4 bg-color3"
          onClick={() => handleFilterAdd(role)} onDoubleClick={() => handleFilterDel(role)}>
            {role}
          </p>
          <p className="level font-medium inline p-1 mx-2 rounded-sm cursor-pointer text-color4 bg-color3"
          onClick={() => handleFilterAdd(level)} onDoubleClick={() => handleFilterDel(level)}>
            {level}
          </p>
          <div className="languages md:inline my-3 md:my-0">
            {languages.map((language, index) => (
              <p
                key={index} 
                className="language font-medium cursor-pointer inline text-color4 bg-color3 p-1 mx-2 rounded-sm"
                onClick={() => handleFilterAdd(language)} onDoubleClick={() => handleFilterDel(language)}
              >
                {language}
              </p>
            ))}
          </div>
          <div className="tools md:inline my-3 md:my-0">
            {tools.map((tool, index) => (
              <p
                key={index} 
                className="font-medium inline text-color4 p-1 cursor-pointer bg-color3 mx-2 rounded-sm"
                onClick={() => handleFilterAdd(tool)} onDoubleClick={() => handleFilterDel(tool)}
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobTemplate;

