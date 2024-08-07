import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (

    // CREATING THE SKILLS SECTION  

    <div id='about' className='about'>
      <div className="heading">
    <h1>About Me...</h1>
    <img src= {theme_pattern} alt='' />
    </div>
 <div className="about-content">
  <div className="para">
 <p> As hardworking and ambitious frontend developer with a strong foundation in problem-solving skills, with keen eye for details and commitment to delivering high-quality code</p>
 <p>My passion for frontend development is highly reflected in each of my project</p>
  </div>
  <div className="skills">
    <div className="skill"><p>HTML&CSS</p><hr style={{width:"90%"}}/></div>
    <div className="skill"><p>JAavascript</p><hr style={{width:"70%"}}/></div>
    <div className="skill"><p>React.js</p><hr style={{width:"80%"}}/></div>
    <div className="skill"><p>Bootstrap</p><hr style={{width:"90%"}}/></div>
    <div className="skill"><p>Git&Github</p><hr style={{width:"90%"}}/></div>
  </div>
 </div>
    
    </div>
 
    
  )
}

export default About