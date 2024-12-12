import React from 'react'
import { CiSearch } from "react-icons/ci";
// import { IoBagOutline } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import NavbarDown from './NavbarDown';



const NavbarUp = () => {

   const [ open, setOpen ] = useState(false);
   const handleOpen = () =>{
    setOpen(!open);
   }
  return (
    <div>
      

      <div className='bg-white w-full text-black mx-auto  my-auto sm:bg-white 2xl:bg-white md:bg-white  lg:bg-purple-600 xl:bg-yellow-400' style={{ fontFamily: 'Lexend' }}>

      
      <nav className='py-3   ms:py-3 ms:px-auto my-auto md:mx-auto xl:mx-auto xl:my-auto '>
        <div className='  ms:border-b-2 ms1:mx-auto ms1:pr-6'>
       <ul className='flex gap-auto pb-2 md:gap-[20px] sm:border-b-2 md:mx-auto xl:gap-[18%] xl:mx-5 ms:gap-0 xl:border-hidden'>
        <div onClick={handleOpen} className='hidden sm:block my-2 ms:my-1 ms:ms-auto sm:text-2xl py-1 md:text-3xl xl:hidden ms:block ms:text-xl ms:pr-2'>{open ? <FaTimes/>: <FaBars />}</div>
        <li className=''>
          <img  
          src="/image/topShelf.png"
          alt="logo"
          width={200}
          height={100}
          className=' sm:w-[138px] md:w-[70%] xl:w-[75%] sm:py-1 ms:w-[120px] xl:w-max-[70%]'   
          />
        </li>
       </ul>
       </div>
       <div className='w-full flex gap-2 mx-auto my-3  xl:hidden ms:flex ms:mx-1'> <input type="search" name="Search" id="" placeholder='Search' className='w-[90%] border-2 border-gray-400 rounded-3xl text-sm px-3 border-opacity-25 text-gray-500 duration-200 outline-none sm:block hidden md:mx-8 xl:hidden ms:block ms:w-[80%] sm:px-5 sm:mx-2' />
       <div className='bg-green-400 py-3 px-3  md:mx-0 text-white text-2xl ms:w-12 rounded-full hidden sm:block xl:hidden  ms:block'> <CiSearch /> </div>
        </div>
      </nav>
       {open && (
        <NavbarDown />
       )}

    </div>
</div>
  )
}

export default NavbarUp