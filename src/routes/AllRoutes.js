import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage/HomePage'
import ProductList from '../products/ProductList/ProductList'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CartPage from '../pages/cart/CartPage/CartPage'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default AllRoutes
