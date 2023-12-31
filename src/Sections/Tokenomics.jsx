import React from 'react'
import Phone from '../Assets/Images/Phone-Section3.png'
function Section3() {
    
    return (
        <div className='text-white    mb-32 mobile:mb-36 mt-10   laptop:mt-20 '>
            <div className='grid desktop:grid-cols-2 grid-cols-1 justify-center align-middle'>
                <div className='mx-5 laptop:mx-10'>
                    <div className='mx-8 tablet:mx-44 text-center tablet:text-start' >
                        
                        <div className='font-bold text-4xl tablet:text-6xl pb-5 '>Tokenomics</div>
                        <div className='font-medium text-xl tablet:text-2xl pb-9 tablet:ml-6 text-[#6f6f6f]'>Tokenomics of MHUB</div>
                        </div>
                    <div className='border-box-section3 w-[30] tablet:w-[100] tablet:mx-36 p-7 font-medium '>

                        <div className=' pb-2'>
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
                        <div className='pb-2'>
                            This fee structure encourages token retention and enables us to invest in the continued enhancement of the Magic Hub ecosystem.
                        </div>
                        <div className='pb-2'>
                            Of the 10% sell fee, 7% is redistributed to MHUB holders. This feature incentivizes holding, as it allows token holders to earn passive income, thereby creating a thriving and engaged community.
                        </div>
                        <div className='pb-2'>
                            "Auto-Liquidity Generation" feature in which 3% is automatically added to the liquidity pool.
                        </div>
                        <div className='pb-2'>
                            It helps to create a stable and robust market for MHUB by ensuring that there's always enough liquidity for transactions.
                        </div>
                        <div className='pb-2'>
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