import React, { useContext } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
const PlaceOrder = () => {
  const[method,setMethod]=useState('cod');
  const {navigate}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFOMATION'} />
        </div>
        <div className='flex gap-3'>
          <input placeholder='First name' type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input placeholder='Last name' type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input placeholder='Email address' type='email' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input placeholder='Street' type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input placeholder='City' type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input placeholder='State' type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input placeholder='Zipcode' type='number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input placeholder='Country' type='text' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input placeholder='Phone no' type='number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>
      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* payment method selction */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-2 cursor-pointer '>
              <p className={`min-w-3.5 h-3 border rounded-full ${method==='stripe'?'bg-green-400':''}`}></p>
              <img className='h-4 mx-4`' src={assets.stripe_logo} alt="" />
            </div>
           <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-2 cursor-pointer '>
              <p className={`min-w-3.5 h-3 border rounded-full ${method==='razorpay'?'bg-green-400':''}`}></p>
              <img className='h-4 mx-4`' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3.5 h-3 border rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>

          </div>
          <div className='w-full text-end mt-5'>
            <button  onClick={()=>navigate('/orders')} className='bg-black cursor-pointer text-white px-16 py-3 text-sm'>PLACE ORDER</button>

          </div>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
