import React from 'react';
import heroSectionBanner from '../assets/wp5128374-black-and-white-anime-hd-wallpapers.jpg'

const HeroSection = () => {
  return (
    <div className='relative aspect-video w-full overflow-hidden'>
      <img src={heroSectionBanner} alt="herosection" className='w-full h-full object-cover' />
      <div className='absolute left-0 top-1/2 -translate-y-1/2 text-white p-4'>
        <h1 className='text-bold mb-3 text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-none'>THE ONE STOP SOLUTION FOR <br/> ALL YOUR MANGA PRODUCTS</h1>
        <button className='px-4 py-2 bg-red-500 hover:bg-red-600 transition-colors duration-200 cursor-pointer'>Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
