import React, { useEffect, useState } from 'react'
import "../massenge/Massenge.css"
import rating from "../../assets/rating.png"
import primum from "../../assets/primum.png"

const Comments= () => {
    const [comments, setComments] = useState([]);

 useEffect(() => {
  fetch('https://dummyjson.com/comments '  )
    .then((res) => res.json())
    .then((data) => setComments(data.comments));
}, []);
 
  return (
 <>
    <div className='titles'>
   <h1 className='our'>OUR HAPPY CUSTOMERS</h1>
   <img src="" alt="" />
      </div>
    <div className='commit'>
     
     {
      comments.slice(10,13).map((comments) => (
        <div className='commit-cards'  key={comments.id}>
         <img className='primum' src={rating} alt="" />
         <h1>Umbarov.D  ✔️</h1>
          <p>{comments.body}</p>
          
          

        </div>
      ))
     }
     
    </div>
 </>
  )
}

export default Comments