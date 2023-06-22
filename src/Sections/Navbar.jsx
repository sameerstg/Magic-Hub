import React from 'react'
import logo from '../Assets/Images/Logo.png'
function Navbar() {
    
        return (
            //max-w-[1240px]
            <ul className='navbar h-52  bg-white text-white mx-auto desktop:max-w-[1300px]'>
    
                <div className='flex justify-around items-center '> 
                    <div className='flex px-14' >
                        <img className='h-20 w-20  aspect-auto' src={logo} alt="" />
                        <div className='flex  flex-col text-center'>
                        <h1 className=' px-2 text-3xl w-full font-bold text-[#060132]'>
                            Magic 
                        </h1>
                        <h1 className=' px-2 text-3xl w-full font-bold text-[#060132]'>
                            Hub 
                        </h1>
                        </div>
                        
                    </div>
    
                   <div  className=''>
                        <div className='flex items-center desktop:hidden'>
                            <li className='navbar-button  px-4 text-[#060132] underline'>Home</li>
                            <li className='navbar-button  px-4 text-[#060132] underline'>About Us</li>
                            <li className='navbar-button  px-4 text-[#060132] underline'>Tokenomics</li>
                            <li className='navbar-button  px-4 text-[#060132] underline'>Buy/Sell</li>
                            <li className='navbar-button  px-4 text-[#060132] underline'>UseCases</li>
                            <li className='navbar-button  px-4 text-[#060132] underline'>RoadMap</li>
                            <li className='buynow-button  px-12 py-3 '>Buy Now</li>
                        </div>
                   </div>
                    
                </div>
    
    
    
            </ul>
        )
    
    
}

export default Navbar