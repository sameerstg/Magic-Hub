import React from 'react'
import exchange from '../Assets/Images/Exchange-Section6.svg'
import controller from '../Assets/Images/Controller-Section6.svg'
import blocks from '../Assets/Images/Blocks-Section6.svg'

function Section6() {
    return (
        <div className='text-white mt-9 mobile:mt-96 tablet:mt-0   w-full  flex flex-col '>

            <div className='font-bold text-6xl pb-9 w-full text-center'>Use Cases</div>
            <div className='flex laptop:flex-row flex-col gap-y-10 gap-x-5 mx-10 justify-center  items-center tablet:items-center'>
                

            <div className='box-section6 tablet:w-[400px] tablet:h-[350px] laptop:w-[450px] laptop:h-[400px] desktop:w-[450px] desktop:h-[350px]  desktop:px-5 '>
                    <div className='p-5 tablet:p-5 '>
                        <img className='mx-auto pb-3 w-30 ' src={exchange} alt="" />
                        <div className='font-bold text-2xl'>The Core of Magic Hub

                        </div>
                        <div>
                        The heart of Magic Hub beats within our state-of-the-art decentralized application, the Magic-Hub
                            dApp. The dApp is not just a component of our ecosystem—it is the mainframe that drives all
                            operations and features within Magic Hub.
                            
                        </div>
                    </div>

                </div>
                <div className='box-section6   tablet:w-[400px] tablet:h-[350px] laptop:w-[450px] laptop:h-[400px] desktop:w-[450px] desktop:h-[350px]  desktop:px-5 '>
                    <div className='p-5 tablet:p-5'>
                        <img className='mx-auto pb-3 w-30 ' src={controller} alt="" />
                        <div className='font-bold text-2xl'>Play-to-Earn (P2E) Gaming: Embrace the Future of Gaming with Magic Hub

                        </div>
                        <div>
                        At Magic Hub, we're not just creating a token, we're revolutionizing the gaming experience through our Play-to-Earn (P2E) platform. We're merging the thrill of gaming with the benefits of blockchain technology.
                            
                        </div>
                    </div>

                </div>
                <div className='box-section6 tablet:w-[400px] tablet:h-[350px] laptop:w-[450px] laptop:h-[400px] desktop:w-[450px] desktop:h-[350px]  desktop:px-5'>
                    <div className='p-5 tablet:p-5'>
                        <img className='mx-auto pb-3 w-30 ' src={blocks} alt="" />
                        <div className='font-bold text-2xl'>Multi-Chain Token Mechanism

                        </div>
                        <div>Magic Hub envisions breaking down barriers between different blockchains. By creating a bridge between Bitcoin and Ethereum Virtual Machine (EVM) chains, we aim to foster greater interoperability within the crypto space.
                        </div>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Section6