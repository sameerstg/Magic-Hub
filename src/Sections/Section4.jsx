import React from 'react'
import chart from '../Assets/Images/Piechart-section4.png'
function Section4() {
    return (
        <div className='text-white w-full mx-auto py-56'>
            <div className='grid desktop:grid-cols-2 grid-cols-1'>
                <img className='mx-auto px-6' src={chart} alt="" />
                <div className='px-11 w-3/4 mx-auto'>
                    <div className='text-6xl font-bold py-5'>Token Allocation</div>
                    <div className='font-medium py-2'>The MHUB token distribution strategy is designed to ensure the project's longevity and
                        continuous growth. The allocation of the total supply of MHUB tokens is divided strategically
                        to support the optimal development, promotion, and operation of the project. The distribution
                        is as follows:
                    </div>
                    <div className='py-2'>
                        <li className='font-bold text-2xl '>Initial DEX Offering (IDO)</li>
                        <div className='mx-9'>10% of the tokens are allocated for the Initial DEX Offering.</div>
                    </div>
                    <div className='py-2'>
                        <li className='font-bold text-2xl'>Liquidity Provision (LP)</li>
                        <div className='mx-9'>A significant portion, 40% of tokens, are set aside for liquidity provision.</div>
                    </div>
                    <div className='py-2'>
                        <li className='font-bold text-2xl'>Bridge</li>
                        <div className='mx-9'>20% of the tokens are reserved for bridging operations.</div>
                    </div>
                    <div className='py-2'> 
                        <li className='font-bold text-2xl'> Play-2-Earn Games </li>
                        <div className='mx-9'>10% of the tokens are dedicated to the gaming platform.</div>
                    </div>
                    <div className='py-2'>
                        <li className='font-bold text-2xl'>DAO</li>
                        <div className='mx-9'>10% of the tokens are allocated to the DAO for marketing funds and airdrops.</div>
                    </div>
                    <div className='py-2'>

                        <li className='font-bold text-2xl'>Team</li>
                        <div className='mx-9'>The final 10% of tokens are set aside for the Magic Hub team.</div>
                    </div>






                </div>
            </div>
        </div>
    )
}

export default Section4