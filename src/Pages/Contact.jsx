import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      {/* Title */}
      <div className="text-center text-2xl pt-5 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className="my-5 flex flex-col justify-center md:flex-row gap-10 md:gap-28 mb-20">
        
        {/* Image */}
        <img
          className="w-full md:max-w-[480px] h-[320px] object-cover rounded-lg"
          src={assets.contact_img}
          alt="Contact"
        />

        {/* Info */}
        <div className="flex flex-col justify-center items-start gap-3">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>

          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className='border border-gray-700 px-5 py-3 text-sm rounded-sm cursor-pointer hover:bg-gray-700 hover:text-white'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
