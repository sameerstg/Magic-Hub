import React from 'react'
import World from '../Assets/Images/World-Section2.png'
import statistics from '../Assets/Images/Chart-Section2.png'
import shield from '../Assets/Images/Shield-Section2.png'

function Section2() {
  return (
    <div className='bg-section2  text-white w-full my-0 -mt-0 desktop:-mt-36'>
      <div className=''>
        <div className=' grid desktop:grid-cols-2 grid-cols-1'>

          <img className='mx-auto' src={World} alt="" />

          <div className='flex w-full flex-col justify-center px-5 mobile:px-10 tablet:px-28 laptop:px-48'>
            <h1 className="font-bold text-5xl py-5">Fastest & Safe</h1>
            <div>
              <ul className=' mx-auto w-full flex'>

                <img src={statistics} className='section2-icon h-10 w-10' alt="" />

                <li className='ml-2'>


                  <div className='text-xl w-full font-bold  text-[#4AB8E9]'>Instant Trading:</div>
                  <div>You can engage in trades instantly, irrespective of the transaction amount,
                    allowing for quick and efficient trading experiences. By eliminating the waiting time
                    for transaction confirmations, you can save valuable time and execute trades promptly,
                    seizing potential market opportunities.




                  </div>
                </li>

              </ul>
              <ul className=' mx-auto w-full flex'>

                <img src={shield} className='section2-icon h-10 w-10' alt="" />
                <li className='ml-2'>
                  <div className='text-xl w-full font-bold text-[#4AB8E9]'>
                    Enhanced Security:
                  </div>
                  <div >
                    You can trade with peace of mind, knowing that MagicHubs has implemented robust
                    security measures to safeguard your transactions and funds.
                  </div>
                </li>

              </ul>

            </div>
            <div className='py-4 px-12 my-6 text-center mx-auto tablet:mx-0  text-[#FFB652] w-max   font-bold border-[#FFB652]  rounded-full border-2 '>
              JOIN US NOW
            </div>

          </div>


        </div>
      </div>


    </div>
  )
}

export default Section2