import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className='w-full h-[80px] flex items-center border-b-2'>
    <div className="w-full h-full flex items-center ">
      {/* Left side logo */}
      <div className="flex items-center ml-28">
        <h1 className="text-3xl font-extrabold">Shop.co</h1>
      </div>
      
      {/* Right side */}
      <div className=" flex pr-10">
        <ul className='flex gap-x-7 pl-32     '>
          <li>Shop</li>
          <li>On sale</li>
          <li>New Arrivals</li>
          <li> Brands</li>
          
           
        </ul> 
        </div>
        <div className="flex items-center gap-x-2 bg-gray-200 pr-20 px-20 py-1 rounded-2xl shadow-md">
    
        <CiSearch size={24} className="text-gray-500 cursor-pointer" />
        <span className="text-sm text-gray-700 pl-10 ">Search for products </span>
      </div>
       {/* Icons: Heart and Shopping Cart */}
       <div className="flex items-center gap-x-5 mr-10">
        {/* Heart Icon */}
        <AiOutlineHeart size={24} className="text-gray-500 cursor-pointer hover:text-red-500" />
        {/* Shopping Cart Icon */}
        <AiOutlineShoppingCart size={24} className="text-gray-500 cursor-pointer hover:text-green-500" />
      </div>
    </div>
  </div>
  )
}

export default Nav
