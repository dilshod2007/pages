import React from 'react'
import shop from '../../assets/SHOP.svg'
import Social from "../../assets/Social.png"
import "../footer/Footer.css"
import line from "../../assets/line.png"
import logss from "../../assets/logss.png"

const Footer = () => {
  return (
    <div >
        <div className='footer-wrapper'>
        <div>
            <img src={shop} alt="" />
             <br /><br /><br />
            <span className='footer-p'>We have clothes that suits your style and <br /> which you’re proud to wear. From <br /> women to men.</span>
            <br /><br /><br />
              <img src={Social} alt="" />
         </div>
         <br />
            <div>
            <h2>Company</h2>
            <br /><br />
            <span>About</span>
            <br /><br />
            <span>Features</span>
            <br /><br />
            <span>Works </span>
            <br /><br />
            <span>Career</span>
            <br />
            </div>
            <div>
                <h2>Help</h2>
                <br /><br />
                <span>Customer Support</span>
                <br /><br />
                <span>Delivery Details</span>
                <br /><br />
                <span>Terms & Conditions</span>
                <br /><br />
                <span>Privacy Policy</span>
                <br /><br />
            </div>
            <div>
                <h2>FAQ</h2>
                <br /><br />
                <span>Account</span>
                <br /><br />
                <span>Manage Deliveries</span>
                <br /><br />
                <span>Orders</span>
                <br /><br />
                <span>Payments</span>
            </div>
            <div>
                <h2>Resources</h2>
                <br /><br />
                <span>Free eBooks</span>
                <br /><br />
                <span>Development Tutorial</span>
                <br /><br />
                <span>How to - Blog</span>
                <br /><br />
                <span>Youtube Playlist</span>
                
            </div>
        </div>
        <img className='line' src={line} alt="" />
        <div className='footer-teg'>
            <span>Shop.co © 2000-2023, All Rights Reserved</span>
        <br />
            <img src={logss}alt="" />
        </div>
    </div>
  )
}

export default Footer