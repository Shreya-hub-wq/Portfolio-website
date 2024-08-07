import React from 'react'
import './Projects.css'
//  import data or svg file from assets folder 
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="project-title">
          <h1>My Projects..</h1>
          <img src={theme_pattern} alt='' />
        </div>

        {/* using map method to showcase the projects from service_data file  */}
        <div className="projects-container">
          {Services_Data.map((service,index)=>{
            return <div className="project-format" key={index}>
<h3>{service.s_no}</h3>
<h2>{service.s_name}</h2>
<p>{service.s_desc}</p>
<div className="readmore">
  <p>Read More..</p>
  <img src={arrow_icon} alt='' />
</div>
            </div>
          })}
        </div>
    </div>
  )
}

export default Projects