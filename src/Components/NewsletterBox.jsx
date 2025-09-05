import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, tenetur!
      </p>
      <form >
        <input  className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter Your Email' required />
        <button className='bg-black text-white text-xs px-10 py-4 rounded-2xl' type='Subit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
