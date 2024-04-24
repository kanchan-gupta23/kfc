import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { Power2 } from 'gsap';




function Hi() {
//     const Preloader = ({ dark }) => {

//     const logoRef = useRef(null);
//     const textRef = useRef(null);

//   useEffect(() => {
//     if (!dark) {
//       const tl = gsap.timeline({ repeat: -1, yoyo: true });
//       tl.to(logoRef.current, { boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', duration: 1, ease: 'power1.inOut' });
//     }
//   }, [dark]);
//   return (
//     <div className=' preloader z-9999 flex-col items-center justify-center bg-zinc-700'>
//         <img src='https://i.pinimg.com/564x/25/08/22/2508224b00dd503aeef6bd2639535a44.jpg' className='pre-img'  ref={logoRef} />
//         <div className="loading-text" ref={textRef}>
//         <span>.</span>
//         <span>.</span>
//         <span>.</span>
//       </div>
        
      
//     </div>
//   )
// }}

// export default Hi








useEffect(()=>{
 
  // Slide up animation for the preloader

gsap.from(".effect",{
    x:"60%",
    y:"0%",
    repeat:-1,
    ease:Power2,
    yoyo:true,
   duration:2
  }),
 gsap.to(".effect",{
    x:"-100%",
    y:"-40%",
    yoyo:true,
    repeat:-1,
    ease:Power2,
    duration:2   
    
  })
  gsap.from("span",{
    stagger:1,
  autoAlpha: 0,
 
  repeat:-1,
  ease:Power2,
  
  })
  gsap.to("span",{
    stagger:1,
  autoAlpha: 1,
 
  repeat:-1,
  ease:Power2,
    
  })
 
 
  gsap.from(".preloader",{
   y:0,

  }),
  gsap.to(".preloader",{
    y:"-100%",
     duration:5,
     delay:11,
   
    })

    

    

},[])


  return (

    <div className='preloader z-9999 flex flex-col items-center justify-center bg-black w-screen h-screen'>
      
      
     <div className=' w-[9vw] h-[9vw] rounded-full overflow-hidden   relative'>  
     <div className='bg-zinc-800 w-[20vw] h-[20vw] opacity-[0.5] effect z-9 absolute -left-[110%] -top-[49%]
        ' style={{transform:`rotate(45deg)`, }}></div>
         <img src='https://pngimg.com/d/kfc_PNG20.png' className='pre-img w-[9vw] h-[9vw]'  />         </div> 
      <div className="loading-text flex ">
        <p>Loading</p>
        <span >.</span>
        <span >.</span> 
        <span >.</span>
      </div>
    </div>
  



 
  )
}


export default Hi;

