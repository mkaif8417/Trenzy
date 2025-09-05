import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:2/3 text-gray-600 '> <b className='prata-regular'>TRENZY</b> by <b className='prata-regular'>K Group</b> brings you the latest fashion trends, handpicked collections, and best sellers—all in one place. Discover styles that match your vibe and stay ahead in fashion every day.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600 '>
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/about" className="hover:text-black">About Us</Link></li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl,font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>Contact@forever.com</li>
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 © K Group. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
