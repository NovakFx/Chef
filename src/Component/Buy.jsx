import React, { useState } from 'react';

const Buy = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="mt-64">
        <p className="text-7xl font-bold">
          BEST DISPENSARY TO BUY <br /> WEED ONLINE IN CANADA
        </p>
        <div className="inline-flex mt-10 gap-32 ">
  
          <div
            className={`w-[378.67px] h-[48px] rounded-full border-2 text-xl pt-2 cursor-pointer flex items-center justify-center ${
              activeIndex === 0 ? 'bg-lime-200 text-green-500' : ''
            }`}
            onClick={() => setActiveIndex(0)}
          >
            Best Sellers
          </div>
       
          <div
            className={`w-[378.67px] h-[48px] rounded-full border-2 text-xl pt-2 cursor-pointer flex items-center justify-center ${
              activeIndex === 1 ? 'bg-lime-200 text-green-500' : ''
            }`}
            onClick={() => setActiveIndex(1)}
          >
            Bundles & Promotions
          </div>
      
          <div
            className={`w-[378.67px] h-[48px] rounded-full border-2 text-xl pt-2 cursor-pointer flex items-center justify-center ${
              activeIndex === 2 ? 'bg-lime-200 text-green-500' : ''
            }`}
            onClick={() => setActiveIndex(2)}
          >
            On Sale
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
