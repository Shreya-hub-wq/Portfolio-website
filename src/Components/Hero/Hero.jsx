import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll' 
// using Anchorlink package for linked-up all the components pagess
import resume from '../../resume/Shreya Mukherjee Resume1_page-0001.jpg'
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'; ---> this package can't my server properly

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <h1><span>Hi myself Shreya,</span>a passionate frontend developer.</h1>
        <p>I am very passionated about my work and a love for crafting exceptional user experiences.With solid foundation
       in HTML,CSS,JAVASCRIPT and React.js</p>
       <div className="action">
        <div className="h-connect">< AnchorLink className='anchor-link' offset={50} href='#contact'>Contact me </AnchorLink></div>
        <div className="h-resume">Resume</div>
       </div>
    </div>
  )
}

export default Hero