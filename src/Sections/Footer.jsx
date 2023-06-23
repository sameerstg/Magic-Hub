import React from 'react'
import Twitter from '../Assets/Images/Twitter.svg'
import Discord from '../Assets/Images/Discord.svg'
import Facebook from '../Assets/Images/Facebook.svg'
import logo from '../Assets/Images/Logo.svg'
function Footer() {
  return (
    <footer className='text-white mx-auto mobile:pt-0  desktop:pt-0'>
        <div className='mx-auto w-full'>
                <ul className='flex flex-wrap mx-auto justify-center underline'>
                    <li className='px-2'>Home</li>
                    <li className='px-2'>About Us</li>
                    <li className='px-2'>Tokenomics</li>
                    <li className='px-2'>Buy/Sell</li>
                    <li className='px-2'>UseCases</li>
                    <li className='px-2'>RoadMap</li>
                    <li className='px-2'>Buy Now</li>
                </ul>
                <div className='py-6'>
                    <div className='text-center py-1'>© Copyright 2023 | MHUB Coin | All Rights Reserved</div>
                    <div className='text-center py-1'>If you have any questions for Team MHUB contact.admin@magichubs.io Or</div>
                    <div className='text-center py-1'>info@magichubs.io</div>
            
                </div>
                    <ul className="flex my-5 py-4 justify-center ">
                        <li className=' mx-6'>
                        <img className='h-10' src={Twitter} alt="" />
                        </li>
                        <li className=' mx-6'>
                        <img className='h-10' src={Discord} alt="" />
                        </li>
                        <li className=' mx-6'> 
                        <img className='h-10' src={Facebook} alt="" />
                        </li>
                    </ul>
                    <div className='flex w-full mx-auto justify-center mb-24 mobile:mb-10'>
                        <img className='h-32 flex' src={logo} alt="" />
                        <div className='flex  flex-col justify-center text-center text-3xl font-bold  w-40'>MAGIC HUB</div>
                    </div>
                    
                
            
        </div>
    </footer>
  )
}

export default Footer