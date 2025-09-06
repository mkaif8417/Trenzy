
// // Updated Navbar
// import React, { useContext, useState } from 'react' 
// import { NavLink, Link } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { ShopContext } from '../Context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const { setShowSearch, getCartCount } = useContext(ShopContext);

//   return (
//     <div className=" rounded-sm sticky top-0 z-50 b  bg-white/0 shadow-[0_4px_6px_rgba(0,0,0,0.15)]">
//       <div className='flex items-center justify-between p-2 font-medium rounded-sm'> 

//         {/* Logo */}
//         <Link to='/'>
//           <img src={assets.logo} className='w-36' alt="logo" />
//         </Link>

//         {/* Main Links (hidden on small screens) */}
//         <ul className='hidden sm:flex gap-5 text-gray-700'>
//           <NavLink to='/' className='flex flex-col items-center gap-1'>
//             <p>HOME</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block' />
//           </NavLink>
//           <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//             <p>COLLECTION</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-[#6f4e37] hidden group-hover:block' />
//           </NavLink>
//           <NavLink to='/about' className='flex flex-col items-center gap-1'>
//             <p>ABOUT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-[#6f4e37] hidden group-hover:block' />
//           </NavLink>
//           <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//             <p>CONTACT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-[#6f4e37] hidden group-hover:block' />
//           </NavLink>
//         </ul>

//         {/* Right Icons */}
//         <div className='flex items-center gap-6'>
//           {/* Search */}
//           <img 
//             onClick={() => setShowSearch(true)} 
//             src={assets.search_icon} 
//             className='w-5 cursor-pointer' 
//             alt="search" 
//           />

//           {/* Profile Dropdown */}
//           <div className='group relative'>
//             <Link to='/login'>
//               <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
//             </Link>
//             <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//               <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                 <p className='cursor-pointer hover:text-black'>My-Profile</p>
//                 <p className='cursor-pointer hover:text-black'>Orders</p>
//                 <p className='cursor-pointer hover:text-black'>Logout</p>
//               </div>
//             </div>
//           </div>

//           {/* Cart */}
//           <Link to='/cart' className='relative'>
//             <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart" />
//             <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>
//               {getCartCount()}
//             </p>
//           </Link>

//           {/* Hamburger for Small Screens */}
//           <img 
//             onClick={() => setVisible(true)} 
//             src={assets.menu_icon} 
//             className='w-6 cursor-pointer sm:hidden' 
//             alt="menu" 
//           />
//         </div>
//       </div>

//       {/* Sidebar Menu (Mobile) */}
//       <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 z-50 shadow-lg ${visible ? 'w-1/2' : 'w-0'}`}>
//         <div className='flex flex-col text-gray-600 h-full'>
//           {/* Back Button */}
//           <div onClick={() => setVisible(false)} className='flex items-center mt-4 gap-4 p-3 cursor-pointer border-b'>
//             <img src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="back" />
//             <p className='cursor-pointer'>Back</p>
//           </div>

//           {/* Sidebar Links */}
//           <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// Updated Navbar
import React, { useContext, useState } from 'react' 
import { NavLink, Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className=" rounded-sm sticky top-0 z-50 bg-gray-50    shadow-[0_4px_6px_rgba(0,0,0,0.15)]">
      <div className='flex items-center justify-between p-2 font-medium rounded-sm'> 

        {/* Logo */}
        <Link to='/'>
          <img src={assets.logo} className='w-36' alt="logo" />
        </Link>

        {/* Main Links (hidden on small screens) */}
        <ul className='hidden sm:flex gap-5 text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden group-hover:block' />
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-[#6f4e37] hidden group-hover:block' />
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-[#6f4e37] hidden group-hover:block' />
          </NavLink>
          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-[#6f4e37] hidden group-hover:block' />
          </NavLink>
        </ul>

        {/* Right Icons */}
        <div className='flex items-center gap-6'>
          {/* Search */}
          <img 
            onClick={() => setShowSearch(true)} 
            src={assets.search_icon} 
            className='w-5 cursor-pointer' 
            alt="search" 
          />

          {/* Profile Dropdown */}
          <div className='group relative'>
            <Link to='/login'>
              <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
            </Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My-Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]'>
              {getCartCount()}
            </p>
          </Link>

          {/* Hamburger for Small Screens */}
          <img 
            onClick={() => setVisible(true)} 
            src={assets.menu_icon} 
            className='w-6 cursor-pointer sm:hidden' 
            alt="menu" 
          />
        </div>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 z-50 shadow-lg ${visible ? 'w-1/2' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600 h-full'>
          {/* Back Button */}
          <div onClick={() => setVisible(false)} className='flex items-center mt-4 gap-4 p-3 cursor-pointer border-b'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="back" />
            <p className='cursor-pointer'>Back</p>
          </div>

          {/* Sidebar Links */}
          <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='p-2 rounded-sm text-center border-b' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar


