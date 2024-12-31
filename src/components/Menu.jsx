

import React from 'react'
import PedtoTechSpecial from '../assets/PedtoTechSpecial.jpeg'
import Margherita from '../assets/Margherita.jpeg'
import  Exprensive from '../assets/Exprensive.jpeg'
import pizza from '../assets/pizza.png'
const Menu = () => {
  return (
  <div>
  <div className='flex'>
    <div className="card card-compact bg-base-100 w-80 shadow-xl mx-10  ">
    <figure>
      <img
        src={PedtoTechSpecial}
        alt="Shoes" className='mt-6' />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">Chicken Tika</h2>
       <div className="card-actions justify-end">
        <button className="btn btn-primary">Order Now</button>
       </div>
    </div>
    
    </div>
    <div className="card card-compact bg-base-100 w-80 shadow-xl mx-10  ">
    <figure>
      <img
        src={Margherita}
        alt="Shoes" className='mt-6' />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">Margherita</h2>
       <div className="card-actions justify-end">
        <button className="btn btn-primary">Order Now</button>
       </div>
    </div>
    
    </div>
    <div className="card card-compact bg-base-100 w-80 shadow-xl mx-10  ">
    <figure>
      <img
        src={Exprensive}
        alt="" className='mt-6' />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">BBQ Pizza</h2>
       <div className="card-actions justify-end">
        <button className="btn btn-primary">Order Now</button>
       </div>
    </div>
    
    </div>
    <div className="card card-compact bg-base-100 w-80 shadow-xl mx-10  ">
    <figure>
      <img
        src={pizza}
        alt="" className='mt-6' />
    </figure>
    <div className="card-body ">
      <h2 className="card-title">pizza</h2>
       <div className="card-actions justify-end">
        <button className="btn btn-primary">Order Now</button>
       </div>
    </div>
    
    </div>
    </div>
    </div>
 
  )
}

export default Menu
