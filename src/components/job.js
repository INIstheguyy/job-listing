import React from 'react'
import dataArray from "../data.json"

function JobTemplate() {
    const dstore = dataArray[0]
    console.log(dstore)
  return (
    <div className="job-wrapper">
        <img src={dstore} alt="" />
        <div className="job-template">
            <div className="upper-template">
                <div className="">
                    <p className="company">{dstore.company}</p>

                </div>
                <div className=""> 
                    <p className="position">{dstore.position}</p>
                </div>
                <div className="">
                    <p className="posted-at">{dstore.postedAt}</p>
                    <p className="contract">{dstore.contract}</p>
                    <p className="location">{dstore.location}</p>
                </div>
            </div>
            
            <div className="lower-template">
                <p className="role">{dstore.postedAt}</p>
                <p className="level">{dstore.postedAt}</p>
                <div className="languages">
                    {
                        dstore.languages.map((language, index) => (
                            <p key={dstore.languages.id} className="language">{language}</p>
                        ))
                    }
                </div>
                <div className="tools">
                    {
                        dstore.tools.map((tool, index) => (
                            <p className="tool">{tool}</p>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobTemplate

//   Item Start 
//   Photosnap
//   New!
//   Featured
//   Senior Frontend Developer
//   1d ago
//   Full Time
//   USA only
//    Role 
//   Frontend
//    Level 
//   Senior
//   Languages 
//   HTML
//   CSS
//   JavaScript
//   Item End 