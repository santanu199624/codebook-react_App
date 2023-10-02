import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Rating from '../Rating/Rating'
import { useCart } from '../../../context/CartContext'

const ProductCard = ({product}) => {
  
  const {cartList, addToCart, removeFromCart} = useCart();
  const [inCart, setInCart] = useState(false);
  const{id, overview, name, price, poster, rating, best_seller} = product

  useEffect(()=>{
    const productInCart = cartList.find(item => item.id === product.id)

    if(productInCart){
      setInCart(true)
    }else{
      setInCart(false)
    }
  },[inCart, product.id])

  // const handleAdd = (product) => {
  //   addToCart(product)
  // }

  return (
    
            <div className="dark:bg-slate-800 dark:text-white card max-w-xs rounded-t-lg shadow-md">
               <Link to={`/products/${id}`}> 
               { best_seller &&<span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}
               <img src={poster} className="card-img-top w-full h-64 rounded-t-lg" alt="product_card" /></Link>
            <div className="card-body">
                <Link to={`/products/${id}`}><h5 className="card-title text-2xl font-semibold">{name}</h5></Link>
                <p className="card-text my-3">{overview}</p>
                <div className="ratings mb-3">
                  <Rating rating={rating} />

                {/* <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="bi bi-star text-yellow-500"></i> */}
                </div>
                <div className='flex justify-between'>
                    <p className='text-2xl font-semibold'>$ {price}</p>
                   { !inCart && <button onClick={()=>addToCart(product)} className="btn btn-primary">Add To Cart</button> }
                   { inCart && <button onClick={()=>removeFromCart(product)} className="btn btn-danger">Remove</button> }
                </div>
                
            </div>
             </div>

  )
}

export default ProductCard
