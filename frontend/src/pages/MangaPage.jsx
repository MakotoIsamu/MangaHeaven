import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import banner from '../assets/R.jfif'
import {Link} from 'react-router-dom'

const MangaPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    handleFetch();
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="w-full aspect-auto overflow-hidden">
        <img 
          src={banner}
          alt="Manga Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Search and Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by title or series" 
                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 h-5 w-5" />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">Filter By:</label>
              <select className="px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none">
                <option value="series">Series</option>
                <option value="genre">Genre</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-gray-700 font-medium">Sort By:</label>
              <select className="px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none">
                <option value="asc">Price: Low To High</option>
                <option value="desc">Price: High To Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product, i) => (
            <Link to={`/product/${product.id}`}
              key={i} 
              className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img 
                  src={product.image || "/api/placeholder/300/200"} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.series}</p>
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-lg font-bold text-red-600">${product.price}</p>
                  <button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MangaPage;