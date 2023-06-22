import React from 'react'
import Coin from '../Assets/Images/Coin-Hero.png'
import Twitter from '../Assets/Images/Twitter.png'
import Discord from '../Assets/Images/Discord.png'
import Facebook from '../Assets/Images/Facebook.png'
import RoundButton from '../Components/RoundButton'
function Section1() {
    return (
        <div className='mb-96 text-white mx-auto w-full grid desktop:grid-cols-2 grid-cols-1 h-screen'>

            <div className='flex mx-auto w-full flex-col justify-center px-40'>
                <h1 className="font-bold  text-5xl py-5">Magic Hub (MHUB)</h1>
                <p className="break-normal mx-auto text-2xl ">
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
                <ul className='flex flex-row'>
                    <li className=''>
                    <div className='text-center w-44 h-16 py-4 px-auto mx-3 my-1 text-[#FFB652]   font-bold border-[#FFB652]  rounded-full border-2 '>
                    Buy Tokens
                </div>
                    </li>
                    <li>
                        <div className='text-center w-44 h-16 py-4 px-auto mx-3 my-1 text-[#86CFF0]   font-bold border-[#86CFF0]  rounded-full border-2 '>
                            White Paper
                        </div>
                    </li>
                </ul>
            </div>
            <img className='w-full mx-auto justify-center' src={Coin} alt="" />

        </div>

    )
}

export default Section1