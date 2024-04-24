import React, { useEffect } from 'react'
import {gsap} from 'gsap';
import { Power2 } from 'gsap';

import {ScrollTrigger} from "gsap/ScrollTrigger";

function Home() {
  
  useEffect(()=>{
    const menu = document.querySelectorAll('.menu')
    menu.forEach((items)=>{
      items.addEventListener('mouseenter', () => {
          
        gsap.to(".pra",{opacity:1, x:"0", duration:1,transition:Power2, textShadow: (0, 0, "3px", "whitesmoke" )})
      });
     items.addEventListener('mouseleave', () => {
         
          
        gsap.to(".pra",{opacity:0, x:"-100%",duration:1});
        
      });
   
  }, []);
  
  },[])
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    

   gsap.from(".menu-item",{    
    scrollTrigger:{
      ease:Power2.easeInOut,
    scrub:true, 
    stagger:1,
    trigger:".menu-item",
    scroller:"body",
   
    }
   })
    

   gsap.to(".menu-item",{
   
   
    ease:Power2.easeInOut,
    scrollTrigger:{
      ease:Power2.easeInOut,
    scrub:true, 
    stagger:1,
    trigger:".menu-item",
    scroller:"body",
    
    
    }
    
   })
   

   gsap.from(".texxt",{
    y:"100%",
    stagger:0.5,
    opacity:1,
    scale:1,
    duration:0.8,
   
    scrollTrigger:{
      trigger:".texxtcont",
      scrub:0.5,
      ease:Power2.easeInOut,
   
      scroller:"body",
      start:"top bottom",
      
     
    }
    
   })
   gsap.to(".texxt",{
    y:"0",
    
    opacity:1,
    scale:1,
    stagger:0.05,
    scrollTrigger:{
      trigger:".texxtcont",
      scrub:0.5,
      ease:Power2.easeInOut,

      scroller:"body",
      start:"top bottom",
      
     
    }
  
    
   })
 
   






   },[])
 
  return (
    <>
    <div  data-scroll data-scroll-section data-scroll-speed="-.7" className='w-[100vw] h-[100vh] relative '>
      <video autoPlay muted loop className=' w-[100vw] max-h-[100vh]  object-cover   '>
        <source  type="video/mp4" src='./KFC-1.mp4'  />
       </video>
    </div>
    <div  className='w-screen  h-[550vh] bg-white pt-[4vh]  relative  '  >


    <div className='uppercase overflow-hidden mt-1 w-full flex texxtcont  h-[19vh] text-black text-[2.5rem]  '>{"Browse Categories".split("").map((item,index)=>{
       return <span className='texxt text-[2.5rem] ' key={index}>{item}</span>;
     
     })}</div>
     
      
      <div className=' block absolute left-1/2 -translate-x-1/2  mt-[25%] '  >
      {[
         
     {
      image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=41.47",
     h2:"chicken rolls"

    },
    {
      image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=41.47",
     h2:"chicken rolls"

    },
    {
      image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=41.47",
     h2:"chicken buckets"

    },
    {
      image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=41.47",
     h2:"biryani buckets"

    },
    {
      image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=41.47",
      h2:"box meals"
      
    },
    {
      image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=41.47",
      h2:"burgers"
    }
  ].map((items,index)=>{
   
    return  <div  key={index}  data-scroll data-scroll-section data-scroll-speed="-.7" 
    
   className='w-[40vw] h-[53vh] menu-item overflow-hidden menu mt-[15%]  
    drop-shadow	filter: drop-shadow(2px 2px 2px 2px black) drop-shadow( 5px 5px 5px 5px  black); Z-3
    
       '>
       <img  
    
        className='w-[40vw] h-[53vh]  relative rounded-[15px]  object-cover  menu-item-image z-8' src={items.image}/>
        <h2  className='pra absolute z-9
          text-zinc-800 text-[4.5vh] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase 
        opacity-0
        text-shadow-xl   font-bold '>{items.h2} </h2>
    </div>
})}
  </div>
  </div>

 


    
  </>
  )
}

export default Home
