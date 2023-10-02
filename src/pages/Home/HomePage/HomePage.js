import React from 'react'
import Hero from "../../Home/Hero/Hero"
import FeaturedProduct from '../FeatureProduct/FeaturedProduct'
import Testimonial from '../Testimonoial/Testimonial'
import Faq from '../Faq/Faq'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimonial />
      <Faq />
    </main>
  )
}

export default HomePage
