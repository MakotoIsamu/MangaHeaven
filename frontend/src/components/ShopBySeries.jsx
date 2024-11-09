import React from 'react';
import naruto from '../assets/series_images/naruto.jpg'
import onepiece from '../assets/series_images/onepiece.jpg'
import attackontitan from '../assets/series_images/attackontitans.jfif'
import myheroacademia from '../assets/series_images/myheroacademia.jfif'
import demonslayer from '../assets/series_images/demon-slayer.jpg'
import jujutsu from '../assets/series_images/jujutsu.jpg'

const ShopBySeries = () => {
  const seriesData = [
    { title: 'Naruto', imgSrc: naruto },
    { title: 'One Piece', imgSrc: onepiece },
    { title: 'Attack on Titan', imgSrc: attackontitan },
    { title: 'My Hero Academia', imgSrc: myheroacademia },
    { title: 'Demon Slayer', imgSrc: demonslayer },
    { title: 'Jujutsu Kaisen', imgSrc: jujutsu },
  ];

  return (
    <div className="w-full my-8 p-4">
      <h2 className="text-3xl font-semibold mb-6">Shop by Series</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seriesData.map((series) => (
          <a
            href={`/series/${series.title.toLowerCase()}`}
            key={series.title}
            className="bg-white overflow-hidden"
          >
            <div className='relative aspect-[2/3] w-full'>
              <img
                src={series.imgSrc}
                alt={series.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{series.title}</h3>
              <button className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium text-sm">
                Shop Now
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShopBySeries;