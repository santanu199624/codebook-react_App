import React from 'react'
import CartEmpty from '../components/CartEmpty/CartEmpty'
import { useCart } from '../../../context/CartContext'
import CartList from '../components/CartList/CartList'

const CartPage = () => {
    
    const {cartList} = useCart();
  return (
    <main>
        { cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  )
}

export default CartPage
