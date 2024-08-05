import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
        <div className='about-box'>
            <div>
                <h1 >STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
            </div>
            <div className='email-btn'>
                <input className='address' type="email" placeholder='Enter your email address' />
                <br />
                <button className='subscribe'>Subscribe to Newsletter</button>
            </div>
        </div>
    </div>
  )
}

export default About