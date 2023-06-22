import React from 'react'
import wallet from '../Assets/Images/Wallet-Section5.png'
import phone from '../Assets/Images/Phone-Section5.png'
import stonk from '../Assets/Images/Stonk-Section5.png'

import click from '../Assets/Images/Click-Section5.png'

import together from '../Assets/Images/Together-Section5.png'

function Section5() {
    return (
        <div className='text-white'>
            <div className='grid md:grid-cols-2 '>
                <div className='mx-10 my-16 '>
                    <div className='py-5'>
                        <div className='flex'><div className='text-5xl font-bold'>How to&nbsp;</div>
                        <div className='text-[#50C6FB] text-5xl font-bold'> Buy & Sell</div></div>
                    </div>
                    
                    <div className='flex '>
                        <div>
                            <img className='h-20 w-20' src={phone} alt="" />
                        </div>
                        <div className='font-medium text-2xl px-5'>
                            <div className='text-[#50C6FB]'>Download & setup UniSat Wallet</div>
                            <div>Download UniSat (a crypto wallet in form of a browser extension).</div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div>
                            <img className='h-20 w-20' src={stonk} alt="" />
                        </div>
                        <div className='font-medium text-2xl px-5'>
                            <div className='text-[#50C6FB]'>Buy and send BTC to UniSat</div>
                            <div>Buy BTC on an exchange (i.e. Bitcoin.org, Coinbase.com, Bitcoin.com, etc.).</div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div>
                            <img className='h-20 w-36' src={click} alt="" />
                        </div>
                        <div className='font-medium text-2xl px-5'>
                            <div className='text-[#50C6FB]'>Head on to MagicHub and swap for $MHUB</div>
                            <div>Click here to head on over to MagicHub dapp. In the SWAP page, you can easily buy/sell $MHUB, and can claim rewards manually.</div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div>
                            <img className='h-20 w-20' src={together} alt="" />
                        </div>
                        <div className='font-medium text-2xl px-5'>
                            <div className='text-[#50C6FB]'>View all state</div>
                            <div>You can get all information about your account on HOME page.</div>
                        </div>
                    </div>
                    
                </div>
                
                
                <img className='mx-auto' src={wallet} alt="" />
            </div>
        </div>
    )
}

export default Section5