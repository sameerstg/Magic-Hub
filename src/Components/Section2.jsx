import React from 'react'
import World from '../Assets/Images/World-Section2.png'
import statistics from '../Assets/Images/Chart-Section2.png'
import shield from '../Assets/Images/Shield-Section2.png'

function Section2() {
  return (
    <div className=' py-16 text-white'>
        <div className=' grid md:grid-cols-2'>

        <img className='mx-auto' src={World} alt="" />
            <div className='flex w-full flex-col justify-center px-48'>
                <h1 className="font-bold text-5xl py-5">Fastest & Safe</h1>
                <div>
                    <ul className=' mx-auto w-full'>
                        <li><img src={statistics} className='section2-icon w-full' alt="" /></li>
                      <li>
                        
                        
                      <div className='text-xl w-full font-bold text-[#4AB8E9]'>Instant Trading:</div>
                    <div>You can engage in trades instantly, irrespective of the transaction amount,
                         allowing for quick and efficient trading experiences. By eliminating the waiting time
                          for transaction confirmations, you can save valuable time and execute trades promptly,
                           seizing potential market opportunities.
                           
                          

                            
                    </div>
                        </li>  
                    
                    </ul>
                    <img src={shield} className='section2-icon w-full' alt="" />
                    
                    <div className='text-xl w-full font-bold text-[#4AB8E9]'>
                            Enhanced Security:
                           </div> 
                    <div >
                           You can trade with peace of mind, knowing that MagicHubs has implemented robust 
                            security measures to safeguard your transactions and funds.
                            </div>
                    
                </div>
                <div className='py-4 px-12 my-6 text-center   text-[#86CFF0] w-max   font-bold border-[#86CFF0]  rounded-full border-2 '>
                    JOIN US NOW
                </div>
            
            </div>
            
            
        </div>
    </div>
  )
}

export default Section2