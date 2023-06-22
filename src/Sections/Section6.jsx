import React from 'react'
import exchange from '../Assets/Images/Exchange-Section6.png'
import controller from '../Assets/Images/Controller-Section6.png'
import blocks from '../Assets/Images/Blocks-Section6.png'

function Section6() {
    return (
        <div className='text-white mt-60 mobile:mt-96 tablet:mt-0  h-screen w-full  flex flex-col justify-center items-center'>

            <div className='font-bold text-6xl py-9 w-full text-center'>Use Cases</div>
            <div className='flex desktop:flex-row flex-col  justify-center items-center align-middle'>
                

            <div className='box-section6 mx-5  desktop:my-0 my-5   desktop:px-5 '>
                    <div className='p-10 '>
                        <img className='mx-auto' src={exchange} alt="" />
                        <div className='font-bold text-2xl'>The Core of Magic Hub

                        </div>
                        <div>
                        The heart of Magic Hub beats within our state-of-the-art decentralized application, the Magic-Hub
                            dApp. The dApp is not just a component of our ecosystem—it is the mainframe that drives all
                            operations and features within Magic Hub.
                            
                        </div>
                    </div>

                </div>
                <div className='box-section6 mx-5   desktop:my-0 my-5   desktop:px-5'>
                    <div className='p-10'>
                        <img className='mx-auto' src={controller} alt="" />
                        <div className='font-bold text-2xl'>Play-to-Earn (P2E) Gaming: Embrace the Future of Gaming with Magic Hub

                        </div>
                        <div>
                        At Magic Hub, we're not just creating a token, we're revolutionizing the gaming experience through our Play-to-Earn (P2E) platform. We're merging the thrill of gaming with the benefits of blockchain technology.
                            
                        </div>
                    </div>

                </div>
                <div className='box-section6 mx-5  desktop:my-0 my-5     desktop:px-5'>
                    <div className='p-10'>
                        <img className='mx-auto ' src={blocks} alt="" />
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