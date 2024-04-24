import React, { useEffect,useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Power2} from 'gsap';

import {motion} from 'framer-motion';
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss";



function Offer() {
 



    useEffect(()=>{
      gsap.registerPlugin(ScrollTrigger);   
      
      gsap.from(".text-cont",{
        x:"-100%",
        
        scrollTrigger:{
          
          trigger:".text-cont",
          scrub:1,
          ease:Power2.easeInOut,
         
          scroller:"body",
          duration:1
        },
       
        
        

      })
      gsap.to(".text-cont",{
        x:0,
        
        
          scrollTrigger:{
           
            trigger:".text-cont",
            scrub:1,
            ease:Power2.easeInOut,
           
            scroller:"body",
           
        },
        
        
      })
      
  
      
     gsap.from(".cont-img",{
        opacity:0,
        scale:0,
       
      
 
        scrollTrigger:{
          trigger:".cont-img",
          
         scrub:0.5,
          ease:Power2.easeInOut,
          stagger:0.3,
          scroller:"body",
          start:"top bottom",
          end:"top -200%",
          
        }
      
         
      })
  
  
  
  gsap.to(".cont-img",{
        opacity:1,
        scale:1,
  
    
       
        scrollTrigger:{
       
          trigger:".cont-img",
         scrub:0.5,
         stagger:0.3,
          ease:Power2.easeInOut,
       
          scroller:"body",
          start:"top bottom",
          end:"top -200%",
          
    
        }
      })
  
   

   },[])

  return (
    <div className='w-full bg-black'>
      
   
    <div  className='w-screen h-[325vh] flex  relative  offercont '  >
   
      <div className='w-1/2 h-[300vh]  ' >
        <h1  className='sticky top-[40%] left-1/2 ml-[5vw] text-red-700 text-cont  '> Offers And Deals</h1> 
      </div>

      <div className='w-1/2 h-screen  block  mt-3 right  contt relative'>
        <div className='  absolute top-[35%] left-[45%] -translate-x-1/2 img-cont'>
        
       <img  className=' cont-img w-[75vw] h-[55vh] pt-[30%]' src='https://assets.indiadesire.com/images/kfcbogo11072015.jpg'/>
       <img   className=' cont-img mt-[8vh] w-[75vw] h-[55vh] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7e7FXEYzDx5LG7GlSZ00XfaStgeUKjL1utU13kR-c2g&s'/>
       <img    className=' cont-img mt-[8vh] w-[75vw] h-[55vh] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKzC3vd4fhU1VoB9wf2F0JaAZNES3r1yh-Ij6cjnspw&s'/>
       <img    className=' cont-img pt-[14vh] w-[75vw] h-[55vh] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJaoS8gyorCvc-LzCRFh92Qp9FcTbq2Fm1RnI3NnIcFg68lh_4B_2sw-TAfn3mT7OdZg&usqp=CAU'/>

       </div>
      </div>

    </div>



    <div className='w-screen h-screen bg-white flex'>
  <div className='w-1/2 bg-white h-full grid grid-cols-3 gap-x-[20vw] px-[10%]'>
    {[
      {
        image: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/736x/12/cb/ef/12cbef2de0f2d14bf0eae9bece773ad8.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
    ].map((item, index) => (
      <div key={index} className='shadow-lg shadow-zinc-300 w-[17vw] h-[40vh] bg-white rounded-lg relative'>
        <img className='absolute w-[6vw] h-[6vw] rounded-full left-1/2 -translate-x-1/2 -top-[10%]' src={item.image} alt="User Avatar" />
        <h4 className='font-bold text-black absolute left-1/2 top-[30%] -translate-x-1/2 uppercase'>{item.h4}</h4>
        <p className='absolute text-[2.5vh] top-[45%] text-center text-black'>{item.p}</p>
        <img className='absolute -bottom-[8%] w-[12vw]' src='https://static.vecteezy.com/system/resources/previews/009/664/666/non_2x/5-star-rating-review-star-transparent-free-png.png' alt="Rating Star" />
      </div>
    ))}
  </div>
  <div></div>
</div>

    
    <div className='w-screen h-[60vh] shop bg-black  relative' >
      <div className='w-[65%] absolute top-[20%] h-[90%]'>
        <img className='w-full  h-full  ' src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/kfc-story_647_062615060403.jpg?VersionId=D82sVwrkbrH692TVyi5hMdPeWYGziJSa'/>
      </div>

      <div className='absolute right-[20%] top-[30%] capitalize' >
      <h1 className='text-red-700'>find our </h1>
       <h1>Restaurant</h1>
       
      </div>
      <div>
      <p className='absolute right-[19%] top-[70%] capitalize'>enter your city name </p>
      <div className='absolute flex justify-between items-center right-[12%] top-[80%] capitalize border-white border-[1px] w-[20vw] h-[6vh] px-2 text-[2.5vh] ' >
        <p>type here</p>
        <p >new delhi</p> </div>
      </div>
      </div> 

  
    </div>
  )
}

export default Offer
