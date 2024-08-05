import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import images from "../../assets/image200.png"
import frame220 from "../../assets/frame220.png"
import frame30 from "../../assets/frame30.png"
import odam from "../../assets/odam.png"
import versace from "../../assets/versace.png"
import zara from "../../assets/zara.png"
import gucci from "../../assets/gucci.png"
import prado from "../../assets/prado.png"
import calven from "../../assets/calven.png"
import Browse from "../browse/Browse"
import About from "../aboutt/About"
import Footer from "../footer/Footer"
import Products from '../products/Products'
import Products2 from '../products2/Products2'
import Massenge from "../massenge/Massenge"
const Home = () => {
  return (
   <div className='banner'>
    <div className='banner-wrapper'>
   
    <div className='banner-img'>
    <div className='text-content'>
        <h1 className='find'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1><br /><br />
        <p className='title'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <br /><br />
        <button className='shop'>Shop Now</button>
    </div>
    <div className='imgs'>
        <img src={images} alt="Clothing" />
        <img src={frame220} alt="Frame 220" />
        <img src={frame30} alt="Frame 30" />
    </div>
        <img className='odam' src={odam} alt="Odam" />
        
    </div>
    </div>
    <div className='wrapper-box'>
<img src={versace} alt="" />
<img src={zara} alt="" />
<img src={gucci} alt="" />
<img src={prado} alt="" />
<img src={calven} alt="" />
    </div>
    {/* <Nav /> */}
    <Products/>
    <Products2/>
    <Browse/>
    <About/>
    <Massenge/>
    <Footer/> 
   
 

</div>


  )
}

export default Home