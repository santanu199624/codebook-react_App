import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import  logo  from "../../../assets/logo192.png"

import "./Header.css"
import Search from '../../Section/Search/Search'
import DropdownLogedOut from '../../Elements/DropdownLogedOut'
import { useCart } from '../../../context/CartContext'

const Header = () => {

  const {cartList} = useCart();
  const [theme, setTheme] = useState(false)
  const [search, setSearch] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    if(theme){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  return (
    <>
    <header className='dark:bg-slate-800'>
      
      <Link to='/' className='logo'>
          <img src={logo} alt="logo_img" />
          <span className='dark:text-white'>CodeBook</span>
      </Link>
      <div className='nav_items'>
      <span onClick={() => setTheme(!theme)}><i className="dark:text-white bi bi-gear mr-4"></i></span>
      <span onClick={() => setSearch(!search)} className='dark:text-white'><i className="bi bi-search mr-4"></i></span>
      <Link to="/cart"><span className='dark:text-white'><i className="bi bi-cart4 mr-4 cart"></i></span>
        <span className='cart_count'>{cartList.length}</span>
      </Link>
      <span onClick={()=>setDropdown(!dropdown)} className='dark:text-white'><i className="bi bi-person-circle mr-4"></i></span>
      </div>
     
    </header>
      { search && <Search setSearch={setSearch} /> }
      { dropdown && <DropdownLogedOut /> }
      
      </>
  )
}

export default Header
