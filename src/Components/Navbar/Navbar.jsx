import React, { useState } from 'react'
import './Nabar.css'

import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {

  const [menu,setMenu] = useState("home");

  // using state hooks and anchorlink package to link the pages and make the navbar functionable 


  return (
    <div className='navber'>
        <h1>MY PORTFOLIO</h1>
        <ul className="nav-menu">
          <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt='' />:<></>}</li>
          <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About</p></AnchorLink> {menu==="about"?<img src={underline} alt='' />:<></>}</li>
          <li> <AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={()=> setMenu("projects")}>Project</p></AnchorLink>{menu==="project"?<img src={underline} alt='' />:<></>}</li>
          <li>< AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt='' />:<></>}</li>
        </ul>

        <div className="connect">< AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me </AnchorLink> </div>
    </div>
  )
}

export default Navbar
