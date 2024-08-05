import React, { useEffect, useState } from 'react'
import "../products2/Products2.css"

const Products = () => {
    const [products, setProducts] = useState([]);

 useEffect(() => {
  fetch('https://dummyjson.com/products '  )
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
}, []);
 
  return (
 <>
 <div>
 <h1 className='NEW'>top selling</h1>
 </div>
    <div className='product-wrappers'>
     
     {
      products.slice(4,8).map((product) => (
        <div className='product-cards'  key={product.id}>
          <img src={product.thumbnail} alt="" />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
         <div className='price-brand'>
         <p>{product.brand}</p>
         <p> ${product.price}</p>
         </div>
          
        </div>
      ))
     }
     
    </div>
    <button className='view'>View All</button>
 </>
  )
}

export default Products