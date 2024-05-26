import React, { useEffect,useState } from 'react'
import {gsap} from 'gsap';
import { Power2 } from 'gsap';

import {ScrollTrigger} from "gsap/ScrollTrigger";
import Footer from './Footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import CountUp from 'react-countup';


function Home() {
  const[isHovered,setHovered]=useState({});
  const[counter,setCounter]=useState(false)
  
 
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
      start:"top 50%",
      
     
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
    opacity:0.5,
    scale:0.5,
   
  

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
  gsap.to(".counter",{
  scrollTrigger:{
 trigger:".counter-cont",
 start:"top bottom",
 onEnter: () => setCounter(true),
 onLeaveBack: () => setCounter(false),
  }
  })
  gsap.from(".fanclub",{
    rotate:0,
    scale:0,
    opacity:0,
    })
   

gsap.to(".fanclub",{
  rotate:360,
  scale:1,
  opacity:1,
  scrollTrigger:{
    trigger:".counter-cont",
    ease:Power2.easeInOut,
    start:"top bottom",
    end:"bottom top",
    scroller:"body",
    duration:2,
    stagger:0.5,
    toggleActions: 'play none none reverse',
    
  },
  
})




   },[])
 
  return (
    <>
    <Navbar/>
     <div  data-scroll data-scroll-section data-scroll-speed="-.7" className='max-w-[100vw] h-[100vh] relative overflow-hidden '>
      <video autoPlay muted loop className=' w-full max-h-[100vh]  object-cover video   '>
        <source  type="video/mp4" src='./KFC-1.mp4'  />
       </video>
    </div> 


    <div  className='w-screen  h-[550vh] bg-[url("https://i.pinimg.com/564x/94/10/1c/94101c5113eed3ef38f68341b2decec1.jpg")] bg-contain pt-[4vh]  relative browse-cate '  >
     
    <img className='ml-5 -mt-6' src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="image" />


   <Link to="/Menu"> <div className='uppercase overflow-hidden mt-1 z-[99999] w-full flex texxtcont  reddit-mono h-[19vh] text-black font-bold text-[2.5rem] sticky top-[5%] '>{"Browse -Categories".split("").map((item,index)=>{
       return <span className='texxt text-[6.5vh] ' key={index}>{item}</span>;
     
     })}</div></Link>
     
      
      <div className=' block absolute left-1/2 -translate-x-1/2  mt-[25%] overflow-hidden '  >
      
      
      {[
         
     {
      image:"https://images.ctfassets.net/wtodlh47qxpt/5VQAImh8fghx8cYtmjRBxu/050c6b65545546ecca314321a5dddc15/CAT89?fit=fill&fm=webp",
     h2:"snacks"

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
    
   className='w-[35vw] h-[53vh] menu-item overflow-hidden menu mt-[15%]  
    shadow-xl shadow-red-800 Z-7 rounded-[15px]
     
       '>
       <img  
    
        className='w-full h-full  relative rounded-[15px]  object-cover  menu-item-image z-8' src={items.image}/>
        <h2  className='pra absolute z-9
          text-zinc-800 text-[4.5vh] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap uppercase 
        opacity-0
        text-shadow-xl   font-bold '>{items.h2} </h2>
    </div>
})}
</div>
  </div> 
  
 


  <div className='max-w-screen bg-[url("https://i.pinimg.com/564x/87/93/42/879342fde6d6f9ebd3c65f7c9aa5cb79.jpg")] bg-contain '>
      
   
    <div  className='max-w-screen h-[370vh] flex  relative  offercont   '  >
   
      <div className='w-1/2 h-[380vh]  ' >
       <Link to="/Shop" ><h1  className='sticky top-[40%] left-1/2 ml-[5vw] text-white reddit-mono   '> Offers And Deals</h1> </Link>
      </div>

      <div className='w-1/2 h-screen  block  mt-3 right  contt relative'>
        <div className='  absolute top-[35%] left-[45%] -translate-x-1/2 img-cont '>
        
       <img  className=' cont-img w-[75rem] h-[55vh] mt-[60%] rounded-xl' src='https://assets.indiadesire.com/images/kfcbogo11072015.jpg'/>
       <img   className=' cont-img mt-[8vh]  w-[75rem] h-[55vh] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7e7FXEYzDx5LG7GlSZ00XfaStgeUKjL1utU13kR-c2g&s'/>
       <img    className=' cont-img mt-[8vh]  w-[75rem] h-[55vh] rounded-xl' src='https://i.pinimg.com/564x/af/b9/b5/afb9b56ffdea36186a5696ece3af8df0.jpg'/>
       <img    className=' cont-img pt-[14vh]  w-[75rem] h-[55vh] rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJaoS8gyorCvc-LzCRFh92Qp9FcTbq2Fm1RnI3NnIcFg68lh_4B_2sw-TAfn3mT7OdZg&usqp=CAU'/>

       </div>
      </div>

    </div>



     <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-screen h-screen   counter-cont bg-[url("https://wallpapers.com/images/high/kfc-fast-food-meal-qvrdx8esu6f1m0w0.webp")] bg-cover'>
      <img className='ml-5' src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="image" />
      <h1 className='text-zinc-900 w-screen text-center text-[7vh] Tilt font-bold -mt-[3vh]'>KFC FANDOM</h1>
      <div className='flex'>
  <div className='w-[60%]  fan1 h-full grid grid-cols-3 gap-x-[10vw] px-[6%] py-12 gap-y-[4vh]'>
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
      <div key={index} className='shadow-lg shadow-red-800 w-[14vw] h-[35vh]  rounded-lg relative bg-zinc-200 fanclub'>
        <img key={index} 
 
       className='absolute w-[80px] h-[80px] rounded-full left-[50%] -translate-x-1/2 -top-[10%] fan-img' src={item.image} alt="User Avatar" />
        <h4 className='font-bold text-black absolute left-1/2 top-[30%] -translate-x-1/2 uppercase'>{item.h4}</h4>
        <p className='absolute text-[2.5vh] top-[45%] text-center social-para text-black'>{item.p}</p>
        <img className='absolute -bottom-[8%] w-[12vw]' src='https://static.vecteezy.com/system/resources/previews/009/664/666/non_2x/5-star-rating-review-star-transparent-free-png.png' alt="Rating Star" />
      </div>
    ))}
  </div>
  <div className='w-[40%]' >
    <div className='flex text-red-700 text-[8vh] justify-center social gap-[8vw] mt-[12vh] '>
      <div className='insta'><FaInstagramSquare   className='ml-7 fb'/>
      <h4 className='text-[3vh] text-center Tilt font-black instagram '>KFC Instagram</h4>
      {counter && <h4 className='text-[3vh] text-center Tilt font-black counter ig'><CountUp start={0} end={26.4} duration={4} delay={1}></CountUp><span>.4K Followers</span></h4> }
      </div>
      <div className='insta'><FaFacebookSquare  className='ml-6 fb'/>
      <h4 className='text-[3vh] text-center Tilt font-black instagram '>KFC Facebook</h4>

      {counter && <h4 className='text-[3vh] text-center Tilt font-black ig ' > <CountUp start={0} end={58} duration={4} delay={1}></CountUp><span>.4K Likes</span></h4>}</div>
    </div>
    <div>
    <img 
      className='w-[24vw] h-[47vh] mt-[7vh] ml-[6vw] rounded-2xl  kfc-club' src="https://i.pinimg.com/564x/29/65/be/2965be9d4786c41829156f2270277231.jpg" alt="image" />
      
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
      <div className=' city absolute flex justify-between items-center right-[12%] top-[80%] capitalize border-white border-[1px] w-[20vw] h-[6vh] px-2 text-[2.5vh] ' >
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
