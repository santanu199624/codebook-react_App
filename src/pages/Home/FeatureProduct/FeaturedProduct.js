import React, { useEffect, useState } from 'react'
import "./FeaturedProduct.css"
import ProductCard from '../../../components/Elements/ProductCard/ProductCard'


const FeaturedProduct = () => {

  const [products, setProducts] = useState([])

  const fetchProduct = async() => {
    const response = await fetch(`http://localhost:8000/featured_products`)
    const data = await response.json()
    setProducts(data)
  }


  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <section className=' my-5 mx-4'>
        <h1 className='heading flex justify-center dark:text-white '>Featured eBooks</h1>
        <div className='flex flex-wrap justify-center lg:flex-row my-5 gap-8'>
        { products.map((product) => (
           <ProductCard key={product.id} product={product} />
        )) }
        </div>
    </section>
  )
}

export default FeaturedProduct
