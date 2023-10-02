import React from 'react'
import { Link } from "react-router-dom"

import "./Hero.css"

const Hero = () => {
  return (
    <section className='hero_section mx-4'>
        <div className="hero_content">
            <h1 className='dark:text-white'>The Ultimate eBook Store</h1>
            <p className='text-2xl font-medium my-4 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum accusamus neque consequuntur expedita totam eos?</p>
            <Link to="/products"  >Explore eBooks</Link>
        </div>
        <div className="hero_image">
            <img src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hero-image" />
        </div>
    </section>
  )
}

export default Hero
