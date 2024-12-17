import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaBars, FaTimes } from 'react-icons/fa';
import HambugerNavbar from './DownNavBars/HambugerNavbar';
import { Link } from 'react-router-dom';
import NavbarDown from './DownNavBars/NavbarDown';

const NavbarUp = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-white w-full text-black mx-auto my-auto  fixed top-0 left-0 transition-transform z-50" style={{ fontFamily: 'Lexend' }}>
      <nav className="py-3 ms:py-3 ms:px-auto my-auto md:mx-auto xl:mx-auto xl:my-auto xl:pb-0">
        <div className="ms:border-b-2 ms1:mx-auto ms1:pr-6">
          <ul className="flex gap-auto pb-2 md:gap-[56px] sm:border-b-2 md:mx-auto xl:gap-[10%] xl:mx-7 ms:gap-0 xl:border-hidden ">
            <div 
              onClick={handleOpen} 
              className="hidden sm:block sm:pt-3 my-2 ms:my-1 ms:ms-auto sm:text-2xl py-1 md:text-3xl xl:hidden ms:block ms:text-xl ms:pr-2 z-50 md:" 
              aria-label="Toggle menu"
            >
              {open ? <FaTimes className='absolute right-3 text-3xl top-5 text-white' /> : <FaBars className=''  />}
            </div>
            <Link to='/'>
            {/* <div className='flex'> */}
           <div className='flex justify-center'>
            <li>
              <img
                src="/image/Logo.png"
                alt="logo"
                width={200}
                height={100}
                className="sm:w-[60px]  md:w-[80px] xl:w-[55px] xl:pt-2 sm:py-1 ms:w-[30px]  ms:pt-1 ms1:w-[40px] ms1:pt-0 "
              />
            </li>
            
              <div className='leading-3  font-semibold sm:pt-5 ms:pt-1 pr-3 ms1:pt-0 md:pt-2 '>
                 <h1 className='text-base text-customLightGreen leading-4 sm:leading-3 ms:text-xs ms1:text-sm sm:text-xl md:text-4xl xl:text-3xl xl:leading-none '>Manav Shelf</h1>
                 <h1 className='text-xs font-light text-customGreen ms:text-[0.64rem] ms1:text-xs sm:text-base sm:font-light md:text-2xl xl:leading-none xl:font-extralight '>Muna Ltd</h1>
              </div>
           </div>
              
            {/* </div> */}
            </Link>
            <div className="sm:hidden xl:flex xl:gap-3 xl2:mx-7">
              <input 
                type="search" 
                name="Search" 
                placeholder="Search" 
                className="border-2 border-gray-400 rounded-3xl text-sm px-3 border-opacity-25 ms:hidden text-gray-500 duration-200 outline-none sm:hidden xl:block xl:h-12 xl:w-[26rem] xl:my-auto xl2:w-[29rem] " 
              />
              <div className="bg-customGreen py-3 px-3 text-white text-2xl rounded-full ms:hidden sm:hidden xl:block xl:w-auto xl:my-auto xl:mx-auto">
                <CiSearch />
              </div>
            </div>

            <div className="py-2 flex gap-10 items-center text-xl  sm:text-sm sm:gap-2 sm:pl-6 sm:my-auto sm:mx-auto ms:text-sm ms:py-0 ms:pl-4 ms:gap-5 md:text-3xl md:px-4 xl:text-lg xl:gap-6 text-customgray ">
              <button>Your Account</button>
              <IoBagOutline className="text-2xl sm:text-xl mx-1 md:text-3xl" />
            </div>
          </ul>
        </div>
        <div className=" flex gap-2 md:gap-0 md:mx-non mx-auto my-3 xl:hidden ms:flex ms:mx-1">
          <input
            type="search"
            name="Search"
            placeholder="Search"
            className="w-[90%] border-2 border-gray-400 rounded-3xl text-sm px-3 border-opacity-25 text-gray-500 duration-200 outline-none sm:block hidden md:mx-10 md:text-2xl  xl:hidden ms:block ms:w-[80%] sm:px-5 sm:mx-2"
          />
          <div className="bg-green-400 py-3 px-3 md:px-2  md:py-3  text-white text-2xl ms:w-12 rounded-full hidden sm:block xl:hidden ms:block md:text-3xl ">
            <CiSearch />
          </div>

        </div>
        <NavbarDown />
      </nav>

      {open && <HambugerNavbar /> }

    </div>
  );
};

export default NavbarUp;
