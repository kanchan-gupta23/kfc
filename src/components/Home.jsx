import React, { useEffect,useState } from 'react'
import {gsap} from 'gsap';
import { Power2 } from 'gsap';

import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Home() {
  const[isHovered,setHovered]=useState({});
 
const handleMouseEnter = (index) => {
  console.log('Mouse enter:', index);
  setHovered((prevState) => ({
    ...prevState,
    [index]: true,
  }));
};

const handleMouseLeave = (index) => {
  console.log('Mouse leave:', index);
  setHovered((prevState) => ({
    ...prevState,
    [index]: false,
  }));
};
  
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
    <>
    <Navbar/>
    <div  data-scroll data-scroll-section data-scroll-speed="-.7" className='w-[100vw] h-[100vh] relative '>
      <video autoPlay muted loop className=' w-[100vw] max-h-[100vh]  object-cover   '>
        <source  type="video/mp4" src='./KFC-1.mp4'  />
       </video>
    </div>
    <div  className='w-screen  h-[550vh] bg-white pt-[4vh]  relative  '  >
    <img className='ml-5 -mt-6' src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="image" />


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


  <div className='w-full bg-black '>
      
   
    <div  className='w-screen h-[400vh] flex  relative  offercont '  >
   
      <div className='w-1/2 h-[400vh]  ' >
        <h1  className='sticky top-[40%] left-1/2 ml-[5vw] text-red-700 text-cont  '> Offers And Deals</h1> 
      </div>

      <div className='w-1/2 h-screen  block  mt-3 right  contt relative'>
        <div className='  absolute top-[35%] left-[45%] -translate-x-1/2 img-cont'>
        
       <img  className=' cont-img w-[75vw] h-[55vh] pt-[30%] rounded-xl' src='https://assets.indiadesire.com/images/kfcbogo11072015.jpg'/>
       <img   className=' cont-img mt-[8vh] w-[75vw] h-[55vh] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7e7FXEYzDx5LG7GlSZ00XfaStgeUKjL1utU13kR-c2g&s'/>
       <img    className=' cont-img mt-[8vh] w-[75vw] h-[55vh] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKzC3vd4fhU1VoB9wf2F0JaAZNES3r1yh-Ij6cjnspw&s'/>
       <img    className=' cont-img pt-[14vh] w-[75vw] h-[55vh] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJaoS8gyorCvc-LzCRFh92Qp9FcTbq2Fm1RnI3NnIcFg68lh_4B_2sw-TAfn3mT7OdZg&usqp=CAU'/>

       </div>
      </div>

    </div>



    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-screen h-screen bg-white  '>
      <img className='ml-5' src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="image" />
      <h1 className='text-zinc-800 w-screen text-center text-[7vh] Tilt font-bold pt-[3vh]'>KFC FANDOM</h1>
      <div className='flex'>
  <div className='w-[60%] bg-white h-full grid grid-cols-3 gap-x-[10vw] px-[6%] py-12 gap-y-[4vh]'>
    {[
      {
        image: 'https://i.pinimg.com/564x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac.jpg',
        h4: "sid",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/736x/12/cb/ef/12cbef2de0f2d14bf0eae9bece773ad8.jpg',
        h4: "rho",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/474x/59/83/b4/5983b4e6fc864b8aff87a7e2ac75231c.jpg',
        h4: "messy",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/474x/e4/34/49/e43449f1e924d13f34b73c2dbf0fa32c.jpg',
        h4: "jim",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/564x/f1/a9/12/f1a912cedc08a5c6304563172ecb0f66.jpg',
        h4: "sofia",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
      {
        image: 'https://i.pinimg.com/474x/35/eb/5d/35eb5d83ec43ad380e93b9f02ac8542f.jpg',
        h4: "sam",
        p: "I'm going to have saucy nuggets again on this Sunday. 😍😃😋",
      },
    ].map((item, index) => (
      <div key={index} className='shadow-lg shadow-zinc-300 w-[14vw] h-[35vh] bg-white rounded-lg relative '>
        <img key={index} onMouseEnter={() => handleMouseEnter(index)}
  onMouseLeave={() => handleMouseLeave(index)}
      style={{ transform: `rotate(${isHovered[index] ? '360deg' : '0deg'})` }} className='absolute w-[6vw] h-[6vw] rounded-full left-[30%] -translate-x-1/2 -top-[10%]' src={item.image} alt="User Avatar" />
        <h4 className='font-bold text-black absolute left-1/2 top-[30%] -translate-x-1/2 uppercase'>{item.h4}</h4>
        <p className='absolute text-[2.5vh] top-[45%] text-center text-black'>{item.p}</p>
        <img className='absolute -bottom-[8%] w-[12vw]' src='https://static.vecteezy.com/system/resources/previews/009/664/666/non_2x/5-star-rating-review-star-transparent-free-png.png' alt="Rating Star" />
      </div>
    ))}
  </div>
  <div  >
    <div className='flex text-red-700 text-[8vh] justify-center gap-[8vw] mt-[12vh] '>
      <div><FaInstagramSquare  className='ml-7'/>
      <h4 className='text-[3vh] text-center Tilt font-black '>KFC Instagram</h4>
      <h4 className='text-[3vh] text-center Tilt font-bold '>26.4K Followers</h4>
      </div>
      <div><FaFacebookSquare  className='ml-6'/>
      <h4 className='text-[3vh] text-center Tilt font-black '>KFC Facebook</h4>

      <h4 className='text-[3vh] text-center Tilt font-bold '>58.4K Likes</h4></div>
    </div>
    <div>
    <img 
      className='w-[24vw] h-[47vh] mt-[10vh] ml-[6vw] rounded-2xl ' src="https://i.pinimg.com/564x/29/65/be/2965be9d4786c41829156f2270277231.jpg" alt="image" />
      
</div>
  </div>
</div>
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
<Footer/>
 


    
 </>
  )
}

export default Home
