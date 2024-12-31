
import React from 'react'
import profileImg from '../assets/profileImg.jpeg'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='py-4 '>
      <div className='container flex justify-between items-center'>
       
        {/* logo section */}
        <div>
          <p className='text-lg font-semibold'>FOOD <span className='text-red-500'>EAT</span></p>
        </div>
        {/* Menu Section */}
        <div className='flex justify-center items-center gap-6'>
          
           <Link to='/'>Home</Link>
           <Link to='/menu'>Menu</Link>
           <Link to='/toplist'>TopList</Link>
           <Link to='/banner'>Banner</Link>
           <Link to='/ourservices'>OurServices</Link>

        </div>
        {/* login section */}
        <div className='flex gap-4 items-center'>
          <img src={profileImg} alt="" className='w-10 rounded-full'/>
        
          <IoIosArrowDown/>
        </div>
      </div>
    </div>
  )
}

export default Navbar

