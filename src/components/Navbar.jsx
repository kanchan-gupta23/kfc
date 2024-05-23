import React, { useEffect } from 'react';
import {gsap} from  'gsap';
import { Power2 } from 'gsap';

import { Link } from 'react-router-dom';


function Navbar() {
 

  useEffect(()=>{
    gsap.from(".navbar",{
      y:-70,
      opacity:0,
      scale:0,
      stagger:0.8,
      duration:0.3,
     delay:0.5,
     ease:Power2.easeOut,
     

      
    })
  
  
  
  gsap.to(".navbar",{
    y:0,
    opacity:1,
    scale:1,
    stagger:0.8,
    duration:0.3,
    delay:0.5,
    ease:Power2.easeOut,
   
   
   
    
  })

},[])
  return (
    
    < >

   <div className=' w-[85vw]  h-[10vh] absolute z-10 -translate-x-1/2  flex  left-1/2  items-center  justify-between '> 
   
      <div className='flex   w-1/2 gap-10  items-center ml-[10vw]'>
      <Link to="/"><img  className= ' navbar  kfc-logo w-full' src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg' alt='logo'/></Link>
      <Link to="/Menu"> <h3 className='navbar Lato text-zinc-100 font-bold w-full   '>
      Menu</h3></Link>
      <Link to="/Shop">  <h3 className='navbar Lato text-zinc-100 font-bold w-full'>  Deals</h3></Link>
      </div>

      <div className='flex   w-1/2  ml-[30vw] items-center'>
      <div className='user flex gap-4 border-r-[.8px] border-zinc-700 pr-2'>
          <img  className= 'text-zinc-700 navbar' src='https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg'/>
          <Link to="/Offer"><h3 className='navbar Lato text-zinc-100 font-bold w-full   '>Sign In</h3></Link>
      </div>
      <div className=' flex items-center'>
          <h4 className="text-xl navbar text-zinc-200  pl-2">0</h4>
          <img className=" navbar h-[9vh] w-[7vw] "  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"/>
        </div>
      </div>
      
   
   </div>



   
    

    
   
       
       

   
   
    </>
  )
}

export default Navbar
