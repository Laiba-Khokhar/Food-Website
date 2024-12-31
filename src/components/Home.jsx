import React from 'react'
// import logo from '/logo.png'
import { Link } from 'react-router-dom'
// import BannerImage from '../assets/fullpizza.jpg'
const Home = () => {
  return (
    <>
    
    {/* <div>
      <div className='py-20 min-h-fit w-full my-28  flex justify-around'>
        <div className='flex flex-col '>
      <h1 className='font-extrabold text-6xl mb-2'>I'M LAIBA</h1>
      <h2 className='text-center'>FRONT-END DEVELOPER</h2>
      <p className='text-center'>Turning IDEAS Indo Interative Reality</p>
      </div>
      <div className='-my-32'>
        <img src={logo} alt="" />
      </div>
      </div>
      </div> */}
      <div className='bg-[url(https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D)] bg-no-repeat h-[800px]'>
        <div className=' w-full h-full text-white ]'>
        <div className='items-start py-24 px-16'>
          <h1 className='font-bold text-4xl'>Laiba's Pizza</h1>
          <p className='my-4'>PIZZA TO FIT ANY TASTE</p>
         <Link to="/menu"> 
         <button className='bg-black w-[150px] '>ORDER NOW</button>
         </Link>
         </div>
        </div>
      </div>
    </>
  )
}

export default Home