import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarUp = () => {
  return (
    <div>
      
      <div className='bg-white w-full text-black mx-auto  my-auto sm:bg-white  md:bg-white  lg:bg-purple-600 xl:bg-yellow-400' style={{ fontFamily: 'Lexend' }}>

      <nav className='py-3 px-7 w-full '>
        <div className='sm:border-b-2 w-full'>
       <ul className='flex w-full gap-[10%] pb-2 sm:gap-[10]  md:gap-[30] md:mx-20 xl:gap-[18%] xl:mx-3'>
        <div className='hidden sm:block my-2 text-2xl mx-1 md:text-3xl xl:hidden'><GiHamburgerMenu /></div>
        <li className=''>
          <img  
          src="/image/topShelf.png"
          alt="logo"
          width={200}
          height={100}
          className=' sm:w-[65%] md:w-[70%] xl:w-[75%]'   
          />
        </li>
        <div className='flex  sm:hidden xl:flex gap-20  '>
         <input type="search" name="Search" id="" placeholder='Search' className=' w-full  border-2 border-gray-400 rounded-3xl text-sm px-3 border-opacity-25 text-gray-500 duration-200 outline-none sm:hidden xl:block' />
         <div className='bg-green-400 py-3 px-3 text-white text-2xl rounded-full sm:hidden xl:block xl:w-[15%]'> <CiSearch /> </div>
        </div>

        <div className='py-2 flex gap-20  items-center text-xl sm:text-sm sm:gap-5  md:text-xl md:px-4'><button className=' '>Your Account</button>
        <IoBagOutline className='text-2xl sm:text-xl  '/>
        </div>
       </ul>
       </div>
       <div className='w-full flex gap-2 mx-auto my-3 xl:hidden'> <input type="search" name="Search" id="" placeholder='Search' className='w-[90%] border-2 border-gray-400 rounded-3xl text-sm px-3 border-opacity-25 text-gray-500 duration-200 outline-none sm:block hidden xl:hidden' />
       <div className='bg-green-400 py-3 px-3 text-white text-2xl rounded-full hidden sm:block xl:hidden'> <CiSearch /> </div>
        </div>
      </nav>



    </div>

    </div>
  )
}

export default NavbarUp