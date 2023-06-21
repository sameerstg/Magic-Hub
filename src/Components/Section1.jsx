import React from 'react'
import Coin from '../Assets/Images/Coin-Hero.png'
import Twitter from '../Assets/Images/Twitter.png'
import Discord from '../Assets/Images/Discord.png'
import Facebook from '../Assets/Images/Facebook.png'
import RoundButton from './RoundButton'
function Section1() {
  return (
    <div className='w-full py-16 px-4 text-white'>
        <div className=' mx-auto grid md:grid-cols-2'>
            <div className='flex mx-auto w-full flex-col justify-center px-36'>
                <h1 className="font-bold mx-auto w-full text-5xl py-5">Magic Hub (MHUB)</h1>
                <p className="break-normal mx-auto text-2xl">
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
                <RoundButton/>
            </li>
            <li>
                <div className='py-4 px-14 mx-2 my-1 text-[#86CFF0]   font-bold border-[#86CFF0]  rounded-full border-2 '>
                    White Paper
                </div>
            </li>
        </ul>
            </div>
            <img className='mx-auto' src={Coin} alt="" />
            
        </div>
    </div>
  )
}

export default Section1