import React from 'react'
import logo from '../Assets/Images/Logo.png'
function Navbar() {
  return (
    <nav className='items-center h-36 max-w-[1280px] mx-auto text-white bg-white'>
        <div>
            <div className='flex py-4'>
                <img className='h-20 px-5 max-w-max' src={logo} alt="" />
                <h1 className=' text-3xl w-0 font-bold text-green-400'>
                    Magic Hub
                </h1>
            </div>
        
        
        <ul className='navbar-list flex mx-60'>
            <li className='navbar-button  text-center mx-2'>Home</li>
            <li className='navbar-button  text-center mx-2 '>About Us</li>
            <li className='navbar-button  text-center mx-2'>Tokenomics</li>
            <li className='navbar-button  text-center mx-2'>Buy/Sell</li>
            <li className='navbar-button  text-center mx-2'>UseCases</li>
            <li className='navbar-button  text-center mx-2'>RoadMap</li>
            <li className='buynow-button  text-center mx-2 -my-2'>Buy Now</li>
        </ul>
        </div>
        
    </nav>
  )
}

export default Navbar