import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTruckFast } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbShoppingCartDollar } from "react-icons/tb";
import Extra from './Extra';

const HomePage = () => {

  const [bgStyle, setBgStyle] = useState({
    backgroundImage: "url('/image/bghome.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  });
 
  const updateBackground = () => {
    if (window.innerWidth >= 1280) {
      setBgStyle({
        backgroundImage: "url('/image/Bg-xl.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      });
    } else {
      setBgStyle({
        backgroundImage: "url('/image/bghome.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      });
    }
  };

  useEffect(() => {
    updateBackground();
    window.addEventListener('resize', updateBackground);
    return () => window.removeEventListener('resize', updateBackground); 
  }, []);


  return (
    <div className=' '>
      <div
        className="overflow-hidden  h-screen bg-cover  bg-center bg-no-repeat  mt-36 pl-1 md:pb-[70rem] md:mt-48 md1:pb-[75rem] lg:pb-[99rem] lg:pt-10 lg:px-8  xl:pb-0 xl:my-auto "
        style={bgStyle}
      >
        <div className="px-2 py-10 mx-auto md:mx-4">
          <h1 className="text-yellow-400 text-lg font-light ms2:text-xl sm:text-xl sm:leading-2 md:text-3xl md:pb-1 lg:text-4xl lg:font-thin lg:leading-loose xl:text-xl xl:pt-10">
            BEST SELLER
          </h1>
          <h1 className="text-2xl font-bold text-white pt-6 sm:pt-3 ms2:text-3xl md:text-7xl md:pb-3 md:leading-tight md1:text-[76px] md1:text-pretty lg:text-7xl xl:text-5xl xl:w-[40rem] xl:leading-tight">
            BEST DISPENSARY TO BUY <span className='line-through decoration-black'>WEED</span> ONLINE
          </h1>
          <p className="pt-4 text-lg text-white ms2:text-base sm:text-lg md:text-3xl md:pb-3 md1:text-4xl xl:text-xl xl:opacity-90">
            Vitamins & Supplements
          </p>
          <div className="flex gap-4 pt-5 md:pb-3 lg:pt-24 xl:pt-20">
            <h1 className="text-white text-lg sm:text-2xl md:text-3xl xl:text-2xl">Get 25% off</h1>
            <div className="border-l-2 border-gray-400 h-5 mt-1 md:h-8 xl:h-6"></div>
            <h1 className="text-white text-lg md:text-2xl xl:text-xl">Free Shipping</h1>
          </div>
          <div>
            <button className="py-2 px-6 mt-4 bg-customGreen text-white hover:bg-cyan-700 cursor-pointer rounded-3xl sm:px-9 sm:ml-3 sm:mt-6 sm:py-3 md:text-3xl md:py-3 md:px-14 md1:text-4xl md1:py-4 xl:text-lg xl:px-9 xl:py-3">
              <Link to="/ShopAllPage">Shop All</Link>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-2 top-11 ms:top-12 ms1:top-44 ms1:-left-2 sm:top-52 sm:left-0 pro:top-44 ms2:top-[200px] ms2:left-0 md:top-[218px] md1:top-[220px] lg:top-[520px] xl:-top-40 xl:left-[42rem] xl2:-top-44 xl2:left-[49rem] ">
            <img src="image/image9.png" alt="" className="ms:w-24 ms1:w-32 ms2:w-32 sm:w-36 md:w-52 md1:w-60 lg:w-80 xl:w-52" />
          </div>
          <div className="absolute ms:left-28 ms:-bottom-10 ms1:-bottom-48 ms1:left-28 sm:-bottom-56 sm:left-28 pro:-bottom-44 ms2:-bottom-48 ms2:left-32 md:-bottom-48 md:left-60 md1:-bottom-52 md1:left-72 lg:-bottom-[520px] xl:-top-96 xl:left-[56rem] xl2:-top-[25rem] xl2:left-[62rem]">
            <img src="image/image8.png" alt="" className="ms:w-24 ms1:w-32 sm:w-44 md:w-56 lg:w-80 xl:w-52" />
          </div>
          <div className="absolute right-3 top-11 ms:top-12 ms1:top-44 ms1:right-1 sm:top-56 pro:top-44 ms2:top-52 ms2:right-0 md:top-54 md:right-16 md1:top-[220px] lg:top-[530px] lg:right-5 xl:-top-40 xl:-right-20 xl2:-top-56 xl2:-right-0">
            <img src="image/image10.png" alt="" className="ms:w-24 ms1:w-36 sm:w-40 md:w-56 md1:w-60 lg:w-80 xl:w-52 xl2:w-60" />
          </div>
        </div>
      </div>
    

    <div className=' mx-auto '>
      <div className='px-3 bg-mintCream h-auto py-11 md:px-10 xl:px-5'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-5'>
        <div className='grid grid-cols-[4rem_auto] md:grid-cols-[5rem_auto] xl:grid-cols-[6rem_auto]'>
        <FaTruckFast className='text-5xl bg-white py-3 px-3 rounded-full md:text-7xl md:py-5 md:px-5  xl:py-5 xl:px-5'/> 
        <div>
          <h1 className='text-xl font-bold inline-flex gap-5 md:text-2xl md:gap-6 xl:text-xl'> Reliable Shipping</h1>
          <p className='pt-4 text-sm text-customgray md:text-lg md:pt-3 xl:text-base'>Green Society offers Canada Post Xpress Shipping straight to your door! You can also choose to add shipping insurance. Enjoy free shipping on orders exceeding $140!</p>
          </div>
        </div>

        <div className='pt-4 grid grid-cols-[4rem_auto] md:grid-cols-[5rem_auto] md:pt-7 xl:grid-cols-[6rem_auto] xl:pt-0'>
        <RiSecurePaymentLine className='text-5xl bg-white py-3 px-3   rounded-full md:text-7xl md:py-5 md:px-5 xl:py-5 xl:px-5'/>
        <div>
          <h1 className='text-xl font-bold inline-flex gap-5 md:text-2xl md:gap-6 xl:text-xl'> You’re Safe With Us</h1>
          <p className='pt-4 text-sm text-customgray md:text-lg md:pt-3 xl:text-base'>Our secure payment system accepts debit, major credit cards, and cryptocurrency, ensuring a quick and simple checkout process every single time you shop.</p>
          </div>
        </div>

        <div className='mb-28 pt-4  grid grid-cols-[4rem_auto] md:grid-cols-[5rem_auto] md:pt-7 xl:grid-cols-[6rem_auto] xl:pt-0'>
        <TbShoppingCartDollar className='text-5xl bg-white py-3 px-3   rounded-full md:text-7xl md:py-5 md:px-5 xl:py-5 xl:px-5'/>
        <div>
          <h1 className='text-xl font-bold inline-flex gap-5 md:text-2xl md:gap-6 xl:text-xl'>Best Quality & Pricing</h1>
          <p className='pt-4 text-sm text-customgray md:text-lg md:pt-3 xl:text-base'>At Green Society, we’re proud to deliver top-notch products and service. We aim to provide your medication safely while keeping our prices fair and affordable.</p>
          </div>
        </div>
        </div>
      </div>

     <Extra />

    </div> 

    </div>
  );
};

export default HomePage;
