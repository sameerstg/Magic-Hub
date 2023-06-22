import React from 'react'
import Phone from '../Assets/Images/Phone-Section3.png'
function Section3() {
    
    return (
        <div className='text-white mb-60 tablet:mb-0  h-screen mobile:mb-32 mobile:mt-44 laptop:my-96 desktop:my-0'>
            <div className='grid desktop:grid-cols-2 grid-cols-1 justify-center align-middle'>
                <div className='mx-10'>
                    <div className='mx-auto text-center ' >
                    
                        <div className='font-bold text-6xl py-5'>Tokenomics</div>
                        <div className='font-medium text-2xl py-4'>Tokenomics of MHUB</div>
                        </div>
                    <div className='border-box-section3 p-7 font-medium mx-auto'>

                        <div className=' py-2'>
                            <div className='flex'>
                                <div className='text-[#42E8E0]'>Name : </div>

                                <div>MHUB (Magic Hub)</div>
                            </div>
                            <div className='flex'>
                                <div className='text-[#42E8E0]'>Total Supply : </div>

                                <div>MHUB (Magic Hub)</div>
                            </div>
                            <div className='flex'>
                                <div className='text-[#42E8E0]'>Tax System: : </div>

                                <div>MHUB (Magic Hub)</div>
                            </div>
                        </div>
                        <div className=' py-2'>
                            This fee structure encourages token retention and enables us to invest in the continued enhancement of the Magic Hub ecosystem.
                        </div>
                        <div className=' py-2'>
                            Of the 10% sell fee, 7% is redistributed to MHUB holders. This feature incentivizes holding, as it allows token holders to earn passive income, thereby creating a thriving and engaged community.
                        </div>
                        <div className=' py-2'>
                            "Auto-Liquidity Generation" feature in which 3% is automatically added to the liquidity pool.
                        </div>
                        <div className=' py-2'>
                            It helps to create a stable and robust market for MHUB by ensuring that there's always enough liquidity for transactions.
                        </div>
                        <div className=' py-2'>
                            This automatic process helps to maintain a healthy trading environment and promotes price stability.
                        </div>





                    </div>
                </div>

                <div>
                    <img className='mx-auto tablet:px-9 px-12'  src={Phone} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section3