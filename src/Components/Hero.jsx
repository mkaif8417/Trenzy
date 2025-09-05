import React from 'react'
import { assets } from '../assets/assets'
const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400 rounded-sm'>
            {/* Hero left */}
            <div className='w-full dm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#41414]'>
                    <div className='flx item-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
                    </div>
                    <h3 className='prata-regular text-2xl sm:py-3 lg:text-3xl leading-relaxed'>LATEST ARRIVALS</h3>
                    <div className='flex item-center gap-2' >
                        <p className=' text-sm md:text-base'>SHOP NOW
                        </p>

                    </div>
                </div>

            </div>
            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
        </div>
    )
}

export default Hero
