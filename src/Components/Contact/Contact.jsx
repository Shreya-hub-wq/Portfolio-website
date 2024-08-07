import React from 'react'
import './Contact.css'

// importing all the file from assets folder 
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt='' />
        </div>
        <div className="contact-section">
          <div className="left">
            <h1>Let's talk</h1>
            <p>I'am currently avaliable to take on new projects,so feel free to send me a message about anything that you me to work on. You can contact anytime</p>
            <div className="details">
              <div className="detail">
              <img src={mail_icon} alt='' />
              <p>mukherjeeshree399@gmail.com</p>
              </div>
              <div className="detail">
              <img src={location_icon} alt='' />
              <p>Durgapur,West Bengal</p>
              </div>
              <div className="detail">
              <img src={call_icon} alt='' />
              <p>+8101137983</p>
              </div>
            </div>
          </div>
          <form className="right">
            <label htmlFor=''>Your Name</label>
            <input type='text' placeholder='Enter your name..' name='name'></input>
            <label htmlFor=''>Your Email</label>
            <input type='text' placeholder='Enter your valid mail-id..' name='email'></input>
            <label htmlFor=''>Write your messages here...</label>
            <textarea name='message' rows="8" placeholder='Enter your messages'></textarea>
            <button type='submit' className='submit'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact