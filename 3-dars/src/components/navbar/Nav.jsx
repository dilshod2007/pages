import React from 'react'
import "../navbar/Nav.css"
import shop from "../../assets/SHOP.svg"
import { Link } from 'react-router-dom'
import framee from '../../assets/framee.png'
// import Home from "../home-page/Home"

const Nav = () => {
  return (
    <>
<div className='container'>
    <div className='nav'>
        <img className='shopss' src={shop} alt="" />
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
       <input type="text" placeholder= '🔍  Search for products...'/>
<Link to="/contact"><img className='frames' src={framee} alt="" /></Link>

    </div>
</div>
    </>
  )
}

export default Nav