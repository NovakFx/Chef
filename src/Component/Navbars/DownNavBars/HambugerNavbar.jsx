import React from 'react'
import { Link } from 'react-router-dom';

const HambugerNavbar = () => {
  return (
     
    <div className='fixed top-0 left-0 w-full h-full bg-gray-800  bg-opacity-80 ' style={{ fontFamily: 'Lexend' }}>
    <nav className='xl:hidden bg-customGreen w-3/4 h-full p-4 py-10 transition duration-100  '>
      <ul className='flex flex-col gap-3'>
        <li><Link to='/' className='text-white text-lg hover:text-customgray transition duration-300'>Home</Link></li>
        <li><Link to='/ShopAllPage' className='text-white text-lg hover:text-customgray transition duration-300'>Shop All</Link></li>
        <li><a href="/FlowerPage" className='text-white text-lg hover:text-customgray transition duration-300'>Flower</a></li>
        <li><a href="/Edibles" className='text-white text-lg hover:text-customgray transition duration-300'>Edibles</a></li>
        <li><a href="/Concentrates" className='text-white text-lg hover:text-customgray transition duration-300'>Concentrates</a></li>
        <li><a href="/Mushrooms" className='text-white text-lg hover:text-customgray transition duration-300'>Mushrooms</a></li>
        <li><a href="/Promotions" className='text-white text-lg hover:text-customgray transition duration-300'>Promotions/Bundles</a></li>
        <li><a href="/Support" className='text-white text-lg hover:text-customgray transition duration-300'>Support</a></li>
        <li><a href="/Rewards" className='text-white text-lg hover:text-customgray transition duration-300'>Rewards</a></li>
        <li><a href="/Blog" className='text-white text-lg hover:text-customgray transition duration-300'>Blog</a></li>
      </ul>
    </nav>   
  </div>
    
  )
}

export default HambugerNavbar;
