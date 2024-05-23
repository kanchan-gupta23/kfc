import React, { useEffect } from 'react'
  import { FaInstagram } from "react-icons/fa6";
  import { BsFacebook } from "react-icons/bs";
  import { IoLogoTwitter } from "react-icons/io5";
  import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Power2 } from 'gsap';
  function Footer() {
    useEffect(()=>{
      gsap.from(".para",{
      
        opacity:0.2,
        scale:1,
       
        duration:1.5,
       
      
        scrollTrigger:{
          trigger:"p",
          scroller:"body",
          scrub:1,
          ease:Power2.easeOut,
        }
       
       
  
        
      })
    
    
    
    gsap.to(".para",{
    
      opacity:1,
      scale:1,
        
        duration:1,
        
        
      scrollTrigger:{ 
        ease:Power2.easeOut,
        trigger:".para",
          scroller:"body",
          scrub:1,
        
        
        }
     
     
     
     
      
    })
  
  },[])
    return (
      <div className='bg-black  h-[60vh] max-w-screen relative  overflow-hidden text-white'>
       
       
          <div className='grid grid-cols-6 max-w-screen  z-[9]  gap-x-[3vw] px-[10rem] foot '>
            <div className='pt-[20%]  '>
            <img className='absolute h-[12w] w-[12vw] para ' src='https://wallpapers.com/images/high/minimalist-kfc-anime-girl-xh90exvgqcibjm8i.webp'/>
            {/* <img className='absolute h-[8vw] w-[8vw] para ' src='https://i.pinimg.com/474x/74/6e/09/746e091f917dee50405c2149bccae808.jpg'/> */}
      
            </div>
          <div className='pt-[50%] drop-shadow-xl '>
            <h4 className='drop-shadow-xl para '>Legal</h4>
          <p className='pt-3 text-[2.5vh] para'>Terms and Conditions</p>
          <p className='pt-3 text-[2.5vh] para'>Privacy Policy</p>
          <p className='pt-3 text-[2.5vh] para'>Disclaimer</p>
          <p className='pt-3 text-[2.5vh] para'>Caution Notice</p>
          </div>
          <div className='pt-[50%]'>
            <h4 className='drop-shadow-xl para'>KFC India</h4>
            <p className='pt-3 text-[2.5vh] para'>About KFC</p>
            <p className='pt-3 text-[2.5vh] para'>KFC Care</p>
            <p className='pt-3 text-[2.5vh] para'>Careers</p>
            <p className='pt-3 text-[2.5vh] para'>Our Golden Past</p>
          </div>
          <div className='pt-[50%] '>
            <h4 className='drop-shadow-xl para'>KFC Food</h4>
            <p className='pt-3 text-[2.5vh] para'>Menu</p>
            <p className='pt-3 text-[2.5vh] para'>Order Lookup</p>
            <p className='pt-3 text-[2.5vh] para'>Gift Card</p>
            <p className='pt-3 text-[2.5vh] para'>Nutrition & Allergen</p>
          </div>
          <div className='pt-[50%] '>
            <h4 className='drop-shadow-xl para'>Support</h4>
            <p className='pt-3 text-[2.5vh]  para'>Get Help</p>
            <p className='pt-3 text-[2.5vh] para'>Contact Us</p>
            <p className='pt-3 text-[2.5vh] para'>KFC Feedback</p>
            <p className='pt-3 text-[2.5vh] para'>Privacy Policy</p>
          </div>
          <div className='pt-[50%] '>
            <img className='py-3 para' src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="" />
            <img className='para' src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="" />
          </div>
        </div>
        <div className='flex gap-[30vw]  w-[100vw] text-[2vh] absolute bottom-[8%] mx-[30%] foot2'>
         <div className='para'>Copyright © KFC Corporation 2024 All Rights Reserved</div> 
          <div className='flex gap-3 text-[3vh] para'><FaInstagram />
          <BsFacebook />
          <IoLogoTwitter /></div>
          
        </div>
     </div>
    )
  }

  export default Footer
