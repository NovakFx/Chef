import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>

    <div className='bg-customDark text-white h-[90rem]  pt-48 pro:pt-72 ms1:pt-64 ms2:pt-60 ms2:h-[75.5rem] sm:h-[88.9rem] md:h-[110rem] md:pt-80 md1:h-[105rem] md1:pt-[20.6rem] xl:pt-80 xl:h-[68rem]'>
      <div className=' mx-7 ms:mx-0 ms:ml-7 md:ml-8 xl:mx-14'>
        <div className='xl:grid xl:grid-cols-[25rem_auto]'>
        <div>
        <img src="image/Logo2.png" alt="Logo" className='w-40 sm:w-48 md:w-64 xl:w-48' />
        <div className='text-xs mt-3 text-customgray mr-7 sm:mr-24 sm:text-sm md:text-xl xl:text-lg xl:mt-4'>
          <p>#1 Toronto top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TanavShelfML is heavily involved in the Toronto cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.</p>
        </div>
        </div>
        <div className='pt-6 sm:pt-8 md:pt-10 xl:pt-0'>
          <div className='text-lg font-bold sm:text-xl md:text-3xl xl:text-2xl'>
            <h1>QUICK LINK</h1>
          </div>
          <div className='grid grid-cols-2 gap-4 mt-3 text-customgray text-xs leading-loose list-none cursor-pointer sm:text-base sm:font-light sm:leading-8 md:text-2xl md:leading-10 xl:text-lg xl:leading-loose '>

            <div>
              <li><Link to='/Order' className=' transition duration-300'>Track Your Order</Link></li>
              <li><Link to='/ShopAllPage' className=' transition duration-300'>Shop All</Link></li>
              <li><a href="/FlowerPage" className=' transition duration-300'>Flower</a></li>
             <li><a href="/Edibles" className='transition duration-300'>Edibles</a></li>
             <li><a href="/Concentrates" className=' transition duration-300'>Concentrates</a></li>
             <li><a href="/Refunds" className=' transition duration-300'>Refunds</a></li>

            </div>

            <div>
            <li><a href="/Refunds" className=' transition duration-300'>Mushrooms</a></li>
            <li><a href="/Promotions / Bundles" className=' transition duration-300'>Promotions / Bundles</a></li>
            <li><a href="/Support" className=' transition duration-300'>Support</a></li>
            <li><a href="/Reward" className=' transition duration-300'>Reward</a></li>
            <li><a href="/Blog" className=' transition duration-300'>Blog</a></li>
            <li><a href="/Shipping" className=' transition duration-300'>Shipping Faq</a></li>

            </div>
          </div>

            <div className='pt-6 sm:pt-8 md:pt-11'> 
              <h1 className='font-bold text-base sm:text-lg md:text-2xl xl:text-xl'>CONTACT US</h1>
              <p className='pt-5 text-customgray text-sm md:text-lg xl:text-base'>infomanavshelfltd.cc</p>
            </div>
            <div className='pt-10 '>
              <h1 className='font-bold text-base sm:text-lg'>MORE</h1>
              <div className='pt-3 text-customgray text-xs leading-loose sm:text-sm sm:font-light sm:leading-8 md:text-lg xl:text-sm xl:leading-loose'>
             <div className='xl:grid xl:grid-cols-2 '>

              <p>Buy weed online in California or Colorado</p>
              <p>Buy weed online in Nova Scotia</p>
              <p>Buy weed online in the Netherlands</p>
              <p>Buy weed online in Germany</p>
              <p>Buy weed online in Uruguay</p>
              <p>Buy weed online in Luxembourg</p>
              <p>Buy weed online in South Africa </p>
              <p>Buy weed online in Malta</p>
              <p>Buy weed online in British Columbia, Canada</p>
              <p>Buy weed online in Alberta, Canada</p>

             </div>

              </div>

              <div className="pt-12 inline-flex gap-4 sm:gap-5 md:gap-10 xl:gap-4">
                <img src="image/mastercard.png" alt="" className='w-12 sm:w-16 md:w-24 xl:w-12' />
                <img src="image/mastercard1.png" alt="" className='w-12 sm:w-16 md:w-24 xl:w-12' />
                <img src="image/mastercard2.png" alt="" className='w-12 sm:w-16 md:w-24 xl:w-12' />
                <img src="image/mastercard3.png" alt="" className='w-12 sm:w-16 md:w-24 xl:w-12' />
              </div>

              </div>

              </div>
              </div>

              <div className="border-b-[1px] border-gray-400 mr-5 opacity-50 mt-6 md:border-b-[2px] "></div>
            <div className='xl:grid xl:grid-cols-2'> 
            <div className='hidden text-base mt-5 opacity-50  xl:block'>
                <p>© 2024 ManavShelfLtd. All Rights Reserved.</p>
              </div>
              <div className='inline-flex gap-3 text-[11px] mt-3 text-customgray sm:text-[13px] md:text-[16px] xl:mt-5 xl:text-[15px] xl:gap-5 xl:mx-28 xl2:mx-0 xl2:ml-72 xl2:gap-8'>
                <p>Out Of Stock</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>

              <div className='text-xs mt-5 opacity-50 sm:text-sm md:text-base xl:hidden'>
                <p>© 2024 ManavShelfLtd. All Rights Reserved.</p>
              </div>
            </div>
            

       



      
      </div>
      </div>

  </footer> 
  )
}

export default Footer