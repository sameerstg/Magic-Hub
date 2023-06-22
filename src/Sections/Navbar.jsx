import React from 'react'
import logo from '../Assets/Images/Logo.png'
function Navbar() {
    return (
        //max-w-[1240px]
        <ul className='navbar h-52 bg-white text-white w-full mx-auto'>

            <div className='flex justify-around'> 
                <div className='flex' >
                    <img className='h-20 px-2' src={logo} alt="" />
                    <h1 className=' px-2 text-3xl w-0 font-bold text-[#060132]'>
                        Magic Hub
                    </h1>
                </div>


                <div className='flex py-5'>
                    <li className='navbar-button  text-center mx-2'>Home</li>
                    <li className='navbar-button  text-center mx-2 '>About Us</li>
                    <li className='navbar-button  text-center mx-2'>Tokenomics</li>
                    <li className='navbar-button  text-center mx-2'>Buy/Sell</li>
                    <li className='navbar-button  text-center mx-2'>UseCases</li>
                    <li className='navbar-button  text-center mx-2'>RoadMap</li>
                    <li className='buynow-button  text-center mx-2 -my-2'>Buy Now</li>
                </div>
            </div>



        </ul>
    )
}

export default Navbar