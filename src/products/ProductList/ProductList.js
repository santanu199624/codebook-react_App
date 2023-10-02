import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/Elements/ProductCard/ProductCard'
import FilterBar from '../components/FilterBar/FilterBar'
import { useLocation } from 'react-router-dom'
import UseTitle from '../../hook/UseTitle'
import { useFilter } from '../../context/filterContext'


const ProductList = () => {

  const { products, initialProducts } = useFilter()
  // console.log(productList)
  const [show, setShow] = useState(false)
  // const [products, setProducts] = useState([])
  const search = useLocation().search
  const searchTerm = new URLSearchParams(search).get("q")
  UseTitle("Explore codebooks")
  // console.log(searchTerm)

  const fetchProducts = async() => {
      const response = await fetch(`http://localhost:8000/products?name_like=${ searchTerm ? searchTerm : ""}`)
      const data = await response.json()
      // setProducts(data)
      initialProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  },[])

  return (
    <main>
      <section className='border-1'>
        <div className='flex justify-between'>
        <span className='dark:text-white text-2xl'>All eBooks ({products.length})</span>
          <span className='dark:text-white text-3xl border-1'>
            <button onClick={()=>setShow(!show)}><i className="bi bi-filter"></i></button>
          </span>
        </div>
        <div className='my-5 flex flex-wrap justify-center lg:flex-row gap-5'>
          { products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) }
          
        </div>
      </section>

      { show && <FilterBar setShow={setShow} /> }

    </main>
  )
}

export default ProductList
