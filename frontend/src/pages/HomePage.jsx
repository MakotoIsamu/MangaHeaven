import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedCarousel from '../components/FeaturedCarousel'
import ShopBySeries from '../components/ShopBySeries.jsx'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <ShopBySeries/>
    <FeaturedCarousel/>
    </>
  )
}

export default HomePage