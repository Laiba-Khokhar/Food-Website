import React from 'react'
import HeroImg from '../assets/hero.png'
const Hero = () => {
  return (
    <div>
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[650px] '>
        {/* text section */}
        <div className='flex flex-col justify-center gap-5 text-center md:text-left md:p-0 pt-24 pb-10'>
          <h1 className='text-3xl
          font-semibold'>Delicious Food Is Waiting For You</h1>
          <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti nihil harum iusto labore autem in nemo minus, recusandae veritatis.</p>
          <div className='flex gap-4 items-center md:justify-start  justify-center '>
            <button className='primary-btn hover:scale-105 duration-200'>Food Menu</button>
            <button className='secondary-btn  hover:scale-105 duration-200 text-black'>Book A Table</button>

          </div>
        </div>
        {/* Image section */}
        <div className='flex flex-col justify-center'>
            <img src={HeroImg } alt="" className=' animate-spin-slow img-shadow max-w-[500px] mx-auto md:mx-0' />
        </div>
    </div>
    </div>
  )
}

export default Hero