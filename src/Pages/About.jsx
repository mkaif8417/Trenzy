import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      {/* Section Title */}
      <div className='text-2xl text-center pt-2 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* Content Section */}
      <div className='mt-4 flex flex-col md:flex-row gap-10 items-center'>
        
        {/* Image */}
        <img 
          className='h-[40vh] lg:h-[70vh] md:max-w-[450px] rounded-sm' 
          src={assets.about_img} 
          alt="About Us" 
        />

        {/* Text */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
           *Welcome to our company! We are passionate about delivering quality
            products and services that bring real value to our customers. 
          </p>
          <p>
            *Our journey started with a simple idea: to make life easier and better
            through innovation and dedication. Today, we are proud to serve 
            thousands of happy customers across the globe.
          </p>
          <p className='prata-regular text-xl '>OUR MISSION</p>
          <p>
            *With a strong commitment to excellence and customer satisfaction,
            we continue to grow and create lasting relationships. 
            Thank you for trusting us!
          </p>
        </div>
      </div>
      <div className='text-xl py-4 mt-2'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
 <div className='flex flex-col md:flex-row text-sm mb-20 gap-6'>
  <div className='border border-gray-200 px-10 md:px-16 py-6 sm:py-12 flex flex-col gap-5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md'>
    <b>QUALITY ASSURANCE:</b>
    <p className='text-gray-600'>
      We deliver products that go through rigorous quality checks, ensuring reliability and long-lasting performance.
    </p>
  </div>

  <div className='border border-gray-200 px-10 md:px-16 py-6 sm:py-12 flex flex-col gap-5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md'>
    <b>CONVENIENCE:</b>
    <p className='text-gray-600'>
      Our services are designed to save you time and effort, providing seamless solutions at your fingertips.
    </p>
  </div>

  <div className='border border-gray-200 px-10 md:px-16 py-6 sm:py-12 flex flex-col gap-5 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md'>
    <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
    <p className='text-gray-600'>
      We prioritize your satisfaction with prompt support, personalized assistance, and a customer-first approach.
    </p>
  </div>
</div>


    </div>
  )
}

export default About
