import React from 'react'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Image3 from '../assets/Image3.png'


const FoodData=[
    {
        image:Image1,
        rating:"⭐⭐⭐⭐⭐",
        price:"$10.99",
        name:"Food Name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia aut voluptatibus"
     },
     {
        image:Image2,
        rating:"⭐⭐⭐⭐⭐",
        price:"$10.99",
        name:"Food Name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia aut voluptatibus"
     },
     {
        image:Image3,
        rating:"⭐⭐⭐⭐⭐",
        price:"$10.99",
        name:"Food Name",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia aut voluptatibus"
     },
];

const TopList = () => {
  return (
    <div className='container py-14'>
    {/* header section */}
    <div className='text-center mb-12'>
        <h1 className='text-4xl font-semibold'>Top List</h1>
        <p>OUR top list</p>
    </div>
    {/* card section */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

        {FoodData.map((item,index)=>(
            <div key={index}
            className='bg-white/50 p-3 rounded-3xl hover:scale-110 transition duration-300'>
                <img src={item.image} alt="" className='w-30 h-30 mx-auto object-cover rounded-full img-shadow' />
                <div className='space-y-2'>
                    <p className='text-red-500'>{item.rating}</p>
                    <p className='text-lg font-semibold'>{item.name}</p>
                    <p className='text-lg font-semibold'>{item.desc}</p>
                <p className='text-lg font-semibold'>{item.price}</p>
                </div>
            </div>
        ))}
        

    </div>
    </div>
  )
}

export default TopList