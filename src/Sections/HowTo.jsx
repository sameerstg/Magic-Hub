import React from 'react'
import wallet from '../Assets/Images/Wallet-Section5.png'
import phone from '../Assets/Images/Phone-Section5.svg'
import stonk from '../Assets/Images/Stonk-Section5.svg'

import click from '../Assets/Images/Click-Section5.svg'

import together from '../Assets/Images/Together-Section5.svg'
function Section5() {
    return (
        <div className='text-white mt-32'>
            
            <div className='grid desktop:grid-cols-2 grid-cols-1'>
                <div className='mx-auto pb-16 pl-12 mobile:px-28'>
                    <div className='pb-5 text-2xl mobile:text-3xl tablet:text-5xl'>
                        <div className='flex'><div className=' font-bold'>How to&nbsp;</div>
                        <div className='text-[#50C6FB] font-bold'> Buy & Sell</div></div>
                    </div>
                    
                    <div className='flex  mb-6 justify-around'>
                        <div>
                            <img className='w-20' src={phone} alt="" />
                        </div>
                        <div className='font-medium mobile:text-xl pl-5 w-[300px] tablet:w-[500px]'>
                            <div className='text-[#50C6FB]'>Download & setup UniSat Wallet</div>
                            <div>Download UniSat (a crypto wallet in form of a browser extension).</div>
                        </div>
                    </div>
                    <div className='flex mb-6 justify-around'>
                        <div>
                            <img className='w-20' src={stonk} alt="" />
                        </div>
                        <div className='font-medium mobile:text-xl pl-5 w-[300px] tablet:w-[500px]'>
                            <div className='text-[#50C6FB] '>Download & setup UniSat Wallet</div>
                            <div>Buy BTC on an exchange (i.e. Bitcoin.org, Coinbase.com, Bitcoin.com, etc.).</div>
                        </div>
                    </div>
                    <div className='flex mb-6 justify-around'>
                        <div>
                            <img className='w-20' src={click} alt="" />
                        </div>
                        <div className='font-medium mobile:text-xl pl-5 w-[300px] tablet:w-[500px]'>
                            <div className='text-[#50C6FB]'>Head on to MagicHub and swap for $MHUB</div>
                            <div>Click here to head on over to MagicHub dapp. In the SWAP page, you can easily buy/sell $MHUB, and can claim rewards manually.</div>
                        </div>
                    </div>
                    <div className='flex mb-6 justify-around'>
                        <div>
                            <img className='w-20' src={together} alt="" />
                        </div>
                        <div className='font-medium mobile:text-xl pl-5 w-[300px] tablet:w-[500px]'>
                            <div className='text-[#50C6FB]'>View all state</div>
                            <div>You can get all information about your account on HOME page.</div>
                        </div>
                    </div>
                    
                    
                </div>
                
                
                <img className='mx-auto -mt-14 mobile:-mt-10' src={wallet} alt="" />
            </div>
        </div>
    )
}

export default Section5