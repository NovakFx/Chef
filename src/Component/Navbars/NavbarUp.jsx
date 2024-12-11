import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
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
      
      <div className='bg-white w-full text-black mx-auto my-auto sm:bg-white  md:bg-white  lg:bg-white xl:bg-white ms:bg-pink-300' style={{ fontFamily: 'Lexend' }}>

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
        <div className=' sm:hidden   xl:flex xl:gap-3 '>
         <input type="search" name="Search" id="" placeholder='Search' className='  border-2 border-gray-400 rounded-3xl text-sm px-3 border-opacity-25 ms:hidden text-gray-500 duration-200 outline-none sm:hidden xl:block xl:h-12 xl:w-96 xl:my-auto   ' />
         <div className='bg-customGreen py-3 px-3 text-white text-2xl  rounded-full ms:hidden sm:hidden xl:block xl:w-auto xl:my-auto xl:mx-auto'> <CiSearch /> </div>
        </div>

        <div className='py-2  flex gap-10  items-center text-xl sm:text-lg sm:gap-2 sm:pl-6 sm:my-auto sm:mx-auto ms:text-base ms:py-0 ms:pl-4 ms:gap-5 md:text-2xl md:px-4 xl:text-lg xl:gap-6'><button className=' '>Your Account</button>
        <IoBagOutline className='text-2xl sm:text-xl mx-1 '/>
        </div>
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