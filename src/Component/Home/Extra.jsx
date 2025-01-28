import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';

const Extra = () => {
   const [bgStyle, setBgStyle] = useState({
    backgroundImage: "url('/image/referCard.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  });
 
  const updateBackground = () => {
    if (window.innerWidth >= 767) {
      setBgStyle({
        backgroundImage: "url('/image/refer-xl.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      });
    } else {
      setBgStyle({
        backgroundImage: "url('/image/referCard.png')", 
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
     <>
      <div className='relative bg-black text-white w-auto mx-auto  h-[90rem] ms:h-[72rem] ms1:h-[69rem] pro:h-[72rem] ms2:h-[82rem] md:h-[77rem] xl:h-[93.7rem] xl2:h-[90rem] '>
        <div className='absolute -top-24 left-1 mx-5 rounded-3xl  h-56 w-[16.9rem] ms1:mx-7 ms1:w-[18.4rem] bg-fixed ms1:h-56 pro:mx-9 ms2:w-[19.4rem] ms2:h-60 sm:mx-12 md:w-[41.7rem] md1:h-72 md1:w-[44rem] md1:mx-14 lg:w-[48rem] lg:mx-32 md2:mx-24 xl:w-[72.7rem] xl:mx-14 xl:bg-scroll xl2:w-[86rem] xl2:mx-16' style={bgStyle}>
        <div className=' py-8 px-5 md:px-10 md:py-12 md1:mx-auto lg:py-16 lg:px-16 xl:px-20 xl2:px-32 xl2:leading-loose'>
          <h1 className='text-2xl font-semibold ms1:text-2xl ms2:text-3xl md:text-5xl md:font-bold xl:pb-3 xl2:text-6xl '>REFER A FRIEND</h1>
          <div className='inline-flex gap-6 pt-6 pro:text-xl pro:font-medium md:text-2xl xl2:text-3xl'>
            <p>And get</p>
            <p className='text-yellow-500'>$40!</p>
          </div>
          <div>
          <button className='px-6 py-3 font-medium bg-customLightGreen rounded-full my-6 ms2:px-8 ms2:py-3 ms2:text-lg md:text-2xl md:px-12 md:mx-40 md:my-auto md:ml-52 md1:py-5 xl:ml-[40rem] xl:absolute  xl:bottom-[7rem] xl2:text-3xl xl2:bottom-[5.7rem] xl2:left-[15rem] xl2:py-4'>Refer Here</button>
          </div>
        </div>
        
        </div>
        <div className='pt-52 md1:pt-56  lg:pt-60 xl2:pt-84'>
         <div className='text-center text-[25px] font-semibold leading-snug ms2:text-[28px] ms2:font-bold md:text-[34px]   xl:text-[60px] xl:font-extrabold xl:tracking-wider xl:leading-tight '> 
          <h1>HOW TO GET <br className='xl:hidden'/> WEED ONLINE <br className='hidden xl:block'/> VIA MANAV SHELF - MAIL <br className='hidden xl:block'/> ORDER <span className='text-customLightGreen'>MARIJUANA</span></h1>
         </div> 

         <div className='text-center text-lightGray py-3 opacity-50 px-5 ms2:text-lg ms2:leading-tight md:text-xl xl:pt-8 xl:text-2xl'>
         <p>Buying weed online from Manav Shelf is a straightforward process. We’ve made it <br className='hidden xl2:block '/>  easier for <br className='hidden xl:block xl2:hidden'/>everyone  to access and buy cannabis products online across multiple platforms, <br className='hidden xl:block'/> ensuring a seamless experience.</p>
         </div>

         <div className='xl:mx-5 xl2:mx-7 '>

        <div className='grid grid-cols-2 mt-7 gap-5 pro:gap-3 xl:gap-0 '>
          <div>
          <div className="inline-grid grid-cols-2 md:ml-8 xl:ml-24 xl2:ml-40 ">
          <div  className="w-8 h-8 ml-2 text-black bg-yellow-400 text-xl rounded-full flex items-center justify-center ">
           <h1>1</h1>
          </div> 
            <img src="image/registerIcon.png" alt="" className='-ml-9 pro:w-28 pro:-ml-8 md:w-32 xl:w-40' />
          </div>
               
          <div className="text-center pt-3 md:mr-24 md2:mr-32 xl:mr-20 xl2:mr-20">
            <h1 className='text-customLightGreen pb-2 ms2:text-xl xl:text-2xl'>REGISTER</h1>
          </div>
          <div className='text-[10px] pro:text-[12px] ms2:text-[15px] text-lightGray mx-2 md:text-[18px] md:px-4 text-center xl:text-[22px]'>
            <p>Create an account with us. It's quick and easy. We only <br className='hidden xl:block'/> ask for the basic details needed for you to make an order and <br className='hidden xl:block'/> receive your product on time.</p>
          </div>

          </div>
          <div>
          <div className="inline-grid grid-cols-2 md:ml-8 xl:ml-28 xl2:ml-40">
           <div  className="w-8 h-8 ml-2 text-black bg-yellow-400 text-xl rounded-full flex items-center justify-center">
           <h1>2</h1>
          </div> 
           <img src="image/shopIcon.png" alt="" className='-ml-7 pro:w-28 pro:-ml-8 md:w-32 xl:w-40' />
          </div>
               
          <div className="text-center pt-3 pl-5 pro:pl-0 md:mr-24 md2:mr-32 xl:mr-20 xl2:mr-20">
            <h1 className='text-customLightGreen pb-2 ms2:text-xl xl:text-2xl'>SHOP</h1>
          </div>
          <div className='text-[10px] pro:text-[12px] ms2:text-[15px] text-lightGray align-middle md:text-[18px] md:px-4 text-center xl:text-[22px]'>
            <p>Choose what you'd like to buy. We offer a variety of <br className='hidden xl:block'/> edibles, flowers, extracts, and mushrooms <br className='hidden xl:block'/>sure  to please everyone.</p>
          </div>
          </div>
          
        </div>

      {/* Nothing weird here just making my code neat */}


      <div className='grid grid-cols-2 mt-6 gap-5 pt-4 xl:gap-0 xl2:gap-5'>
          <div>
          <div className="inline-grid grid-cols-2 md:ml-8 xl:ml-24 xl2:ml-40">
           <div  className="w-8 h-8 ml-2 text-black bg-yellow-400 text-xl rounded-full flex items-center justify-center">
           <h1>3</h1>
          </div> 
            <img src="image/paymentIcon.png" alt="" className='-ml-9 pro:w-28 pro:-ml-8 md:w-32 xl:w-40' />
          </div>
               
          <div className="text-center pt-3 md:mr-16 md2:mr-32 xl:mr-20 xl2:mr-20">
            <h1 className='text-customLightGreen pb-2 ms2:text-xl xl:text-2xl'>MAKE PAYMENT</h1>
          </div>
          <div className='text-[10px] pro:text-[12px] ms2:text-[15px] text-lightGray mx-2 md:text-[18px] md:px-4 text-center xl:text-[22px]'>
            <p>Transact safely. Our platform uses strong security protocols <br className='hidden xl:block'/> to protect your payment info.</p>
          </div>
          </div>

          <div>
          <div className="inline-grid grid-cols-2 md:ml-8 xl:ml-28 xl2:ml-40">
           <div  className="w-8 h-8 ml-2 text-black bg-yellow-400 text-xl rounded-full flex items-center justify-center">
           <h1>4</h1>
          </div> 
            <img src="image/checkIcon.png" alt="" className='-ml-7 pro:w-28 pro:-ml-8 md:w-32 xl:w-40' />
          </div>
               
          <div className="text-center pt-3 pl-5 pro:pl-0 md:mr-20 md2:mr-32 xl:mr-20 xl2:mr-20 ">
            <h1 className='text-customLightGreen pb-2 ms2:text-xl xl:text-2xl'>RELAX</h1>
          </div>
          <div className='text-[10px] pro:text-[12px]  ms2:text-[15px] text-lightGray align-middle md:text-[18px] md:px-4 text-center xl:text-[20px] xl:px-0'>
            <p>Your order will be packed discreetly and sent via Toronto Post Xpresspost. <br className='hidden xl:block'/> A tracking number will be provided, letting you  monitor your <br className='hidden xl:block'/> marijuana shipment throughout its journey.</p>
          </div>
          </div>
        </div>
         <div className='text-center mt-6 ms2:mt-8 xl:mt-14 xl2:mt-20'>
            <button className='px-6 py-3 ms2:px-10 ms2:text-lg bg-customGreen rounded-full text-sm md:text-xl md:py-4 md1:py-5 md1:text-2xl xl:py-4 xl2:px-7 xl2:text-xl'>Choose your Weed</button>
         </div>

      {/* Nothing weird here just making my code neat */}
       </div>
         

        </div>
      </div>

      <div className='ms:h-[170rem] ms:mt-8  md:mt-10  md:h-[200rem] '>
        <div className='md:mx-8 mx-5 xl:mx-11'>
        <div className='ms:text-2xl ms:font-semibold md:text-[40px] md:leading-snug xl:text-[55px] xl:leading-tight xl:tracking-wide'>
          <h1>WHAT MAKES US THE <br className='md:hidden'/> <span className='text-yellow-400 '>#1</span>  <br className='hidden md:block' /> ONLINE <span className='text-customLightGreen '> <br className='md:hidden' /> MARIJUANA</span> <br  /> DISPENSARY IN <br className='md:hidden' /> TORONTO?</h1>
        </div>
        <div className='text-customgray text-sm mt-3 md:text-xl md:w-[35rem] xl:w-[49rem]'>
          <p>When it comes to what makes us Toronto’s foremost online marijuana dispensary, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve outlined the six key features that we feel make us a cut above the rest.</p>
        </div>
        <div className='mx-1 my-4 md:my-14 md:mx-2'>
          
          <div className=' xl:grid xl:grid-cols-3 xl:gap-6'>

          <div className='border-whitishGray border-2 rounded-2xl h-[18rem] my-6 pro:h-[20rem] md:h-[21.7rem] md:px-2 xl:h-[26rem]'>
            <div className='mx-4 my-3'>
              <img src="image/customer-service.png" className='w-16 md:w-24 xl:w-20' alt="" />
            </div>
            <div>
              <h1 className='font-semibold px-4 md:text-3xl md:font-bold xl:text-2xl'>CUSTOMER SERVICE</h1>
              <p className='text-xs pt-5 px-4 text-customgray pro:text-sm md:text-xl xl:text-lg'>Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction.</p>
            </div>
          </div>

          <div className='border-whitishGray border-2 rounded-2xl h-[15rem] my-6 pro:h-[16rem] md:h-[18.6rem] md:px-2 xl:h-[26rem]'>
            <div className='mx-4 my-3'>
              <img src="image/vehicle-truck.png" className='w-16 md:w-24 xl:w-20' alt="" />
            </div>
            <div>
              <h1 className='font-semibold px-4  md:text-3xl md:font-bold xl:text-2xl '>DELIVERY INSURANCE</h1>
              <p className='text-xs pt-5 px-4 text-customgray pro:text-sm md:text-xl'>If your mail-order marijuana is lost, stolen, or damaged in transit, we will send you a replacement at no charge. Free Toronto Post Xpress shipping for all orders over $120.</p>
            </div>
          </div>

          <div className='border-whitishGray border-2 rounded-2xl h-[18rem] my-6 pro:h-[19rem] md:h-[21rem] md:px-2 xl:h-[26rem]'>
            <div className='mx-4 my-3'>
              <img src="image/carbon_security.png" className='w-16 md:w-24 xl:w-20' alt="" />
            </div>
            <div>
              <h1 className='font-semibold px-4  md:text-3xl md:font-bold xl:text-2xl '>SECURITY</h1>
              <p className='text-xs pt-5 px-4 text-customgray pro:text-sm md:text-xl'>When it comes to security, we only store the details required for you to maintain an account and place an order. For shipping your mail-order marijuana, we exclusively use tamper-proof and discreet packaging, ensuring that what you’ve purchased stays your business alone.</p>
            </div>
          </div>

          </div>


            <div className='xl:grid xl:grid-cols-3 xl:gap-6'>

          <div className='border-whitishGray border-2 rounded-2xl h-[17rem] my-6 pro:h-[18.6rem] md:h-[20rem] md:px-2 xl:h-[24rem]'>
            <div className='mx-4 my-3'>
              <img src="image/diamond.png" className='w-16 md:w-24 xl:w-20' alt="" />
            </div>
            <div>
              <h1 className='font-semibold px-4  md:text-3xl md:font-bold xl:text-2xl '>BEST VALUE</h1>
              <p className='text-xs pt-5 px-4 text-customgray pro:text-sm md:text-xl'>We are constantly refining our offerings and pricing to ensure we maintain the perfect balance of affordability and quality in our products. We invest in the finest strains available and are always searching for new, budget-friendly, and premium weed products.</p>
            </div>
          </div>


          <div className='border-whitishGray border-2 rounded-2xl h-[15rem] my-6 pro:h-[16rem] md:h-[18.6rem] md:px-2 xl:h-[24rem] '>
            <div className='mx-4 my-3'>
              <img src="image/handshake-light.png" className='w-16 md:w-24 xl:w-20' alt="" />
            </div>
            <div>
              <h1 className='font-semibold px-4  md:text-3xl md:font-bold xl:text-2xl '>TRUST</h1>
              <p className='text-xs pt-5 px-4 text-customgray pro:text-sm md:text-xl'>With more than 15 years in the weed industry, you can trust that you'll be well taken care of. You can be confident that we have your best interests at heart. Feel free to browse through our reviews.</p>
            </div>
          </div>

          <div className='border-whitishGray border-2 rounded-2xl h-[16rem] my-6 pro:h-[17.5rem] md:h-[19rem] md:px-2 xl:h-[24rem] '>
            <div className='mx-4 my-3'>
              <img src="image/circum_medal.png" className='w-16 md:w-24 xl:w-20' alt="" />
            </div>
            <div>
              <h1 className='font-semibold px-4  md:text-3xl md:font-bold xl:text-2xl '>HIGHEST QUALITY</h1>
              <p className='text-xs pt-5 px-4 text-customgray pro:text-sm md:text-xl'>All our cannabis products are tested to guarantee the highest quality. We collaborate with expert suppliers and continually refine our standards for quality to ensure we offer only the finest products available.</p>
            </div>
          </div>
          </div>
        </div>
        </div>


        <div className='bg-mintGray h-[100rem] ms2:h-[104.8rem] md:h-[81rem] md1:h-[88rem] md2:h-[97rem] xl:h-[63rem]'>

          <div className='inline-flex gap-16  mx-7 my-5 mt-11 ms1:gap-24 pro:gap-28 ms2:gap-24 sm:gap-28 md:gap-72 md2:mx-8 md2:gap-96 xl:mx-11 xl:gap-[49rem] xl2:gap-[60rem]'>
            <h1 className='font-bold ms2:text-lg md:text-[2.20rem] md2:text-[2.30rem] xl:text-[2rem]'>WEED EDUCATION</h1>
            <button className='text-xs text-customLightGreen underline md:text-xl md2:text-2xl'>Show All</button>
          </div>

          <div className="border-b-2 border-gray-400 mx-7 opacity-50 mt-2 md2:mx-8 xl:mx-11"></div>

      {/* Nothing weird here just making my code neat */}
       <div className='xl:grid xl:grid-cols-3 xl:mx-7 xl:mt-7'> 

        <div className='md:grid md:grid-cols-[auto_23rem] xl:block'>

          <div className='mt-8 md:mt-6 xl:mt-6'>
            <img src="image/image17.png" className=' px-7 mt-4 w-96 md:w-[35rem] xl:w-[27rem] xl:px-5' alt="" />
          </div>

          <div className='mx-7 mt-5 md:mt-9 md:mx-0 md2:mt-10 xl:mt-5 xl:mx-7'>
            <p className='text-sm text-customgray md:text-lg md2:text-xl xl:text-lg'>December 24, 2024</p>
            <h1 className='font-bold text-lg pt-2 leading-snug ms2:text-xl md:text-[27px] md2:text-[30px] xl:text-[25px]'>12 Mistakes To Avoid When <br className='hidden ms:block'/> Buying Cannabis Online</h1>
            <div className='mt-3 '>
              <p className='text-customgray text-sm md:text-base md:mr-2  md1:text-lg md1:mr-3 md2:text-xl xl:text-xl'>Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home.  But …</p>
              <div className='mt-1 md2:mt-1'>
                 <button className='text-base text-customLightGreen underline md:text-lg md1:text-xl md2:text-xl'>Read More</button>
              </div>
            </div>
          </div>

        </div>

      {/* Nothing weird here just making my code neat */}


      {/* Nothing weird here just making my code neat */}

        <div className='md:grid md:grid-cols-[auto_23rem] md:mt-3 xl:block xl:mt-0'>

          <div className='mt-8 md:mt-6 xl:mt-6'>
            <img src="image/image18.png" className=' px-7 mt-4 w-96 md:w-[35rem] xl:w-[27rem] xl:px-5' alt="" />
          </div>
          <div className='mx-7 mt-5 md:mt-9 md:mx-0 md2:mt-10 xl:mx-7 xl:mt-5'>
            <p className='text-sm text-customgray md:text-lg md2:text-xl xl:text-lg'>December 24, 2024</p>
            <h1 className='font-bold text-lg pt-2 leading-snug ms2:text-xl md:text-[27px] md2:text-[30px] xl:text-[25px]'>How To Store Cannabis and <br className='xl:hidden'/> Keep it Fresh and Potent?</h1>
            <div className='mt-3 '>
              <p className='text-customgray text-sm md:text-base md:mr-2 md1:text-lg md1:mr-3 md2:text-xl'>Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ...</p>
              <div className='mt-1'>
                 <button className='text-base text-customLightGreen underline md:text-lg md1:text-xl md2:text-xl'>Read More</button>
              </div>
            </div>
          </div>

        </div>

      {/* Nothing weird here just making my code neat */}


      {/* Nothing weird here just making my code neat */}

        <div className='md:grid md:grid-cols-[auto_23rem] md:mt-3 xl:block xl:mt-0'> 

          <div className='mt-8 md:mt-6 xl:mt-6'>
            <img src="image/image19.png" className=' px-7 mt-4 w-96 md:w-[35rem] xl:w-[27rem] xl:px-5' alt="weed" />
          </div>
          <div className='mx-7 mt-5 md:mt-9 md:mx-0 md2:mt-10 xl:mx-7 xl:mt-5'>
            <p className='text-sm text-customgray md:text-lg  md2:text-xl xl:text-lg '>December 24, 2024</p>
            <h1 className='font-bold text-lg pt-2 leading-snug ms2:text-xl md:text-[25px] md2:text-[30px] xl:text-[25px]'>The Ultimate Guide to Checking the Quality of Cannabis – 10 Industry Leading Tips</h1>
            <div className='mt-3 '>
              <p className='text-customgray text-sm md:text-base md:mr-2 md1:text md1:mr-3 md2:text-xl '>Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …</p>
              <div className='mt-1'>
                 <button className='text-base text-customLightGreen underline md:text-lg md1:text-xl md2:text-xl'>Read More</button>
              </div>
            </div>
          </div>

        </div>

        </div>

      {/* Nothing weird here just making my code neat */}


          <div className='relative mt-16 mx-7  md:top-[5rem] md1:mx-16 md2:mx-40 xl:top-14 xl:mx-28 '>
            <div className='absolute -top-10 left-0 bg-customDarkGreen text-white rounded-2xl px-3 py-4 h-[18rem] pro:px-5 pro:py-5 pro:h-[20rem]  md:h-[29rem] md:py-9 md:px-16 md:mx-16 md:tracking-wide md:rounded-3xl md2:mx-0 xl:w-[65rem] xl:mx-0 xl:h-[25rem] xl2:w-[80rem] xl2:h-[27rem]'>
              <div>
                <h1 className='text-2xl font-bold pro:text-3xl md:text-5xl md:leading-tight md1:text-[45px] xl:text-[50px] xl:font-extrabold xl2:text-[60px]'>UNLOCK 20% OFF <br className='xl:hidden'/>YOUR <br className='hidden xl:block'/> FIRST <br className='xl:hidden'/> ORDER</h1>
                <p className='text-sm  text-whitishbrown pro:pt-2 md:text-base xl:text-xl xl:font-light xl:pt-3 xl2:text-2xl'>Reveal coupon code by entering your <br className='hidden pro:block xl:hidden'/>email</p>
              </div>
              <div className="border-b-[1px] border-gray-400 mx-1 opacity-50 mt-1 md:border-b-[3px] xl:pt-7"></div>
              <div className='xl:mt-7 xl:inline-flex xl:gap-5'>
              <input type="email" name="couponEmail" id="email" required placeholder='Email Address' className='border-[1px] border-gray-400 opacity-50 bg-transparent mt-1 mx-1 py-2 px-4 rounded-full ms1:px-8 ms1:py-3 sm:px-10  sm:text-lg md:text-xl md:pl-8 md:w-96 md:mx-3 md:py-4  md:mt-2 xl:w-[41rem] xl:py-4 xl2:w-[56rem]  xl2:py-5'/>
              <div className='justify-center text-center mt-2 md2:mt-4 xl:mt-2'>
                <button type="submit" className='bg-customLightGreen px-6 py-2 rounded-full pro:py-3 pro:my-1 md:mx-4 md:text-xl md:my-2 '>Reveal coupon</button>
              </div>
              </div>
            </div>
          </div>

          
        </div>

        <Footer />

      </div>
      </>
   
  )
}

export default Extra