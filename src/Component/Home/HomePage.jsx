import React from 'react'

const HomePage = () => {
  return (
    <div className="h-screen  bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url('image/BgHome.png')`,  }} >
        <div className='px-2 py-10 '>
          <h1 className='text-yellow-400 text-lg font-light'>BEST SELLER</h1>
          <h1 className='text-2xl font-bold text-white pt-6'>BEST DISPENSARY TO BUY WEED ONLINE </h1>
          <p className='pt-4 text-lg  text-white'>Vitamins & Supplements</p>
          <div className='flex gap-4 pt-5 '>
            <h1 className='text-white text-lg'>Get 25% off</h1>
            <div className="border-l-2 border-gray-400  h-5 pt-6" ></div>
            <h1 className='text-white text-lg'>Free Shipping</h1>
          </div>
          <div >
            <button className='py-3 px-6 bg-customGreen rounded-3xl'>Shop All</button>
          </div>
        </div>
    </div>
  )
}

export default HomePage