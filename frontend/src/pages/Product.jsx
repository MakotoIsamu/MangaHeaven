import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null to handle loading state

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    handleFetch();
  }, [id]); // Add id as dependency to refetch if id changes

  // Show loading text if product is null (still fetching)
  if (!product) return <p>Loading...</p>;

  return (
    <div className='w-full h-screen p-10 flex items-center'>
      <div className='overflow-hidden'>
        <img src={product.image} alt={product.title} className='w-full object-cover' />
      </div>
      <div className='ml-10'>
        <h1 className='text-2xl font-bold mb-2'>{product.title}</h1>
        <p className='text-gray-700 mb-4'>{product.description}</p>
        <p className='text-lg font-semibold text-green-600 mb-4'>${product.price}</p>
        <div className='flex gap-4'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Add To Cart</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
