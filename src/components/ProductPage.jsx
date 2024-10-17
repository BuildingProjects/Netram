import React from "react";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div className='h-screen w-full flex bg-gray-100 justify-center items-center'>
      <div className='text-center space-y-8'>
        <h1 className='text-4xl md:text-5xl font-bold text-cyan-600'>
          Welcome to the Product Page
        </h1>
        <Link to='/'>
          <button className='bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-500 transition duration-300'>
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductPage;
