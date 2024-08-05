import React from 'react'
import { Link } from 'react-router-dom'
import "../routes/Contact.css"
import email from "../assets/email.png"
import tel from "../assets/tel.png"
import location from "../assets/location.png"
import ine from "../assets/ine.png"
import be from "../assets/be.png"
import instagram from "../assets/instagram.png"

const Contact = () => {
  return (
  
   <>
   <div className='container'>
   <div className='contact_wrapper'>
   <div className='Lest'>
        <h1 className='h1'>Les’t talk
            <br /> on something  <span>great</span>  together</h1>
            <br /><br />
         <div className='email'>
            <img src={email} alt="" />
            <p>andreaDesign@gmail.com</p>
         </div><br /><br />
         <div className='tel'>
            <img src={tel} alt="" />
            <p>+34 123 456 789</p>
         </div>
         <br /><br />
         <div className='location'>
            <img src={location} alt="" />
            <p>123 Street 487 House</p>
         </div>
         <br /><br />
         <div>
            <img src={ine} alt="" />
            <img src={be} alt="" />
            <img src={instagram} alt="" />
         </div>
    </div>


    
    <div className='contact'>
       <h2 className='h2'>I’m interested in:</h2>
       <div className='btn1'>
        <button>UX/ UI design</button>
        <button>Web design</button>
        <button>Design systems</button>
       </div>
       <div className='btn2'>
        <button>Graphic design</button>
        <button className='other'>Other</button>
       </div>
       <div>
        <h2 className='name'>Your name</h2>
        <br />
        <input required type="text" placeholder='Jhon Smith' />
        <hr />
        <br /><br />
        <h5 className='email'>Your email</h5>
        <br />
        < input required type="text  " placeholder='email@gmail.com' />
        <hr className='hr' />
        <br /><br />
        <h4 className='message'>Your message</h4>
        <br />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <br />
        <Link to="/"><button className='btn3'>Send message</button></Link>
    </div>
    </div>
   
   </div>
   </div>
   </>
  )
}

export default Contact