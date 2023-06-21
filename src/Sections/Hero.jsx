import React from 'react'

function Hero() {
  return (
    
 <div className='hero'>
        <div className="text-white  m-40 max-w-[700px] ">
      <h1 className="font-bold w-full text-5xl py-5">Magic Hub (MHUB)</h1>
      <p className="break-normal text-2xl">
        Magic Hub (MHUB) is an innovative digital asset initiative at the
        intersection of DeFi, P2E gaming, and multi-chain interoperability. It
        aims to create a revolutionary ecosystem with optimized token utility
        and enhanced user experience.
      </p>
      <ul className="flex my-5 py-4  ">
        <li className=' mx-7'>
          <img className='h-8' src={Twitter} alt="" />
        </li>
        <li className=' mx-7'>
          <img className='h-8' src={Discord} alt="" />
        </li>
        <li className=' mx-7'> 
          <img className='h-8' src={Facebook} alt="" />
        </li>
      </ul>

      <ul className='flex '>
            <li>
                <div className='py-4 px-11 mx-2 my-1 text-[#FFB652]   font-bold border-[#FFB652]  rounded-full border-2 '>
                    Buy Tokens
                </div>
            </li>
            <li>
                <div className='py-4 px-11 mx-2 my-1 text-[#86CFF0]   font-bold border-[#86CFF0]  rounded-full border-2 '>
                    White Paper
                </div>
            </li>
        </ul>
    </div>

 </div>
    
   
   
    
  );
}

export default Hero