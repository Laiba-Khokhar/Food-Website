import React from 'react'
 import Navbar from './components/Navbar'
 import Hero from './components/Hero'
 import TopList from './components/TopList'
 import Banner from './components/Banner'
 import OurServices from './components/OurServices'
 import Menu from './components/Menu'
 import { BrowserRouter,Route,Routes } from 'react-router-dom'
 


const App = () => {
  return (
    <div  className='overflow-x-hidden '>
<div className= 'min-h-screen  bg-center bg-cover backdrop-blur-3xl bg-no-repeat bg-[url(https://png.pngtree.com/background/20210710/original/pngtree-light-fresh-and-fresh-literary-food-banner-background-picture-image_1006686.jpg)]'>
 <BrowserRouter>
  <Navbar/>
  
<Routes>
   
 <Route path="/" element={<Hero/>}></Route>  

 <Route path="/menu" element={<Menu/>}></Route> 
 <Route path="/toplist" element={<TopList/>}></Route>   
 <Route path="/banner" element={<Banner/>}></Route>   
 <Route path="/ourservices" element={<OurServices/>}></Route>   


</Routes>
 
</BrowserRouter> 



</div>
</div>


  )
}

export default App
