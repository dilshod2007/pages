import React from 'react'
import casual from "../../assets/casual.png"
import formal from "../../assets/formal.png"
import "../browse/.Browse.css"
import party from  "../../assets/party.png"
import gym from '../../assets/gym.png'

const Browse = () => {
  return (
   <div>
     <div className='cardss'>
            <h1 className='style'>BROWSE BY DRESS STYLE</h1>
        <div className='style-box1'> 
          <img src={casual} alt="" />
          <img src={formal} alt="" />
        </div>
        <dir className='style-box2'>
            <img src={party} alt="" />
            <img src={gym} alt="" />
        </dir>
    </div>
   </div>

  )
}

export default Browse