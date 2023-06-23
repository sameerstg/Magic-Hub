import React from 'react'
import Coin from '../Assets/Images/Coin-Hero.png'
import Twitter from '../Assets/Images/Twitter.png'
import Discord from '../Assets/Images/Discord.png'
import Facebook from '../Assets/Images/Facebook.png'
import l from '../Assets/Images/L-half.svg'

function Section1() {
    return (
        <div className=' text-white mx-auto w-full grid desktop:grid-cols-2 grid-cols-1 '>

            <div className='flex mx-auto w-full flex-col justify-center px-5 mobile:px-10 tablet:px-40'>
                
                <div className='lc w-full -ml-8'>
                <h1 className="font-bold ml-8 mt-8 text-5xl pb-5">Magic Hub (MHUB)</h1>
                </div>
                
                <p className="break-normal mx-auto text-2xl ">
                    Magic Hub (MHUB) is an innovative digital asset initiative at the
                    intersection of DeFi, P2E gaming, and multi-chain interoperability. It
                    aims to create a revolutionary ecosystem with optimized token utility
                    and enhanced user experience.
                </p>
                
                <ul className="flex my-5 py-4 gap-x-10 mx-auto tablet:mx-0">
                    <li className=' '>
                        <img className='my-2 h-10' src={Twitter}  alt="" />
                    </li>
                    <li className=' '>
                        <img className='my-2 h-10' src={Discord}  alt="" />
                    </li>
                    <li className=' '>
                        <img className='my-2 h-10' src={Facebook}  alt="" />
                    </li>
                </ul>
                <ul className='flex flex-row flex-wrap gap-x-5 gap-y-5 justify-center tablet:justify-start'>
                    <li className=''>
                    <div className='text-center px-10  py-4   mb-1 text-[#FFB652]   font-bold border-[#FFB652]  rounded-full border-2 '>
                    Buy Tokens
                </div>
                    </li>
                    <li>
                        <div className='text-center px-10  py-4   text-[#86CFF0]   font-bold border-[#86CFF0]  rounded-full border-2 '>
                            White Paper
                        </div>
                    </li>
                </ul>
            </div>
            <img  className='coin w-full mx-auto laptop:-mt-44   ' src={Coin}  alt="" />

        </div>

    )
}

export default Section1