import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { Power2 } from 'gsap';
import Navbar from './Navbar';
import Footer from './Footer';

function Shop() {
  useEffect(()=>{
    gsap.from(".work1",{
      opacity:0,
      scale:0,
      y:-100,
      ease:Power2.easeInOut,
      duration:1,
     
    })
    gsap.to(".work1",{
      opacity:1,
      scale:1,
      y:0,
      ease:Power2.easeInOut,
      duration:1,
    
    })
  },[])
  
  return (

    
   <>
   <div className="main overflow-hidden">
    <Navbar/>

<div  data-scroll data-scroll-section data-scroll-speed="-.7" className='page1  w-screen h-[90vh] relative ' >
  <img className='absolute w-full h-full object-cover' src='https://i.pinimg.com/736x/03/0e/fb/030efb2ea27644752e36dcc0321cba3c.jpg'/>
  
    <div className='work absolute top-0 left-[28%]  z-9 flex items-center justify-center   '>
   
        <h1 className=' work1 flex text-[7em] font-bold rounded-[500px] text-zinc-900 pacifico text-center opacity-1 scale-1' >It's <br/> finger<br/> licking good</h1>
    
</div>
</div>
</div>
<div  className="page2 relative w-screen bg-black h-[90vh] overflow-hidden">
    <div className="center  my-[10%] relative w-screen h-[40vh] inline-block  whitespace-nowrap z-10 overflow-x-hidden overflow-y-hidden ">
     <div className="center1 w-screen h-[100%] inline-block  whitespace-nowrap overflow-x-hidden overflow-y-hidden ">
      {[
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=41.83",
      },
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/FREEROLL.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYCHKN.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYFRIES.jpg?ver=41.83", alter:"image"},
        {image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/YAYPOP.jpg?ver=41.83", alter:"image"}



      ].map((item,index)=>{

    return <div className="div overflow-x-auto overflow-y-hidden" key={index} >
            <img className='w-[100%] h-[100%] object-cover ' src={item.image} alt={item.alter}/>
        </div>})}
        
    </div>
   


</div>
</div>
<div className="page3 w-screen h-[150vh]  bg-white overflow-hidden relative">
<img className='ml-5 absolute right-9' src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="image" />
    <div className="exp text-[40px] text-zinc-700 ">
    <h1 className='capitalize Lato font-extrabold text-[8vh] my-4'  >explore amazing deals and offers</h1>
</div>



<div className='grid grid-rows-3  '>
<div className=''>
  {[{
    image:"https://i.pinimg.com/564x/af/b9/b5/afb9b56ffdea36186a5696ece3af8df0.jpg",
    },
    {image:"https://i.pinimg.com/564x/03/da/11/03da1110444ddb814a2e574b5d75de24.jpg"},
    {image:"https://i.pinimg.com/474x/35/ca/58/35ca580184be5a27263ad649f4443344.jpg"},
    {image:"https://i.pinimg.com/564x/f2/d3/e5/f2d3e5c027153559c453a7c8d3ef7453.jpg"},
    {image:"https://i.pinimg.com/564x/bf/9c/e0/bf9ce0391e62bfde3ea4a6ea72746e7a.jpg"},
    {image:"https://i.pinimg.com/564x/70/e8/be/70e8bee6ae78a2aace8469ea28e3285e.jpg"},
    {image:"https://i.pinimg.com/564x/a9/a1/49/a9a1498edf2377c23b0aeeeabcf94679.jpg"},
    {image:"https://i.pinimg.com/564x/83/fc/40/83fc4028572bba7234712a384655c3d1.jpg"},
    {image:"https://i.pinimg.com/564x/62/f7/46/62f7460e3e2e3b21374bee15b33aa5d6.jpg"},
   {image:"https://i.pinimg.com/564x/1a/0c/c7/1a0cc78b5e6247510195ca2801fe1472.jpg"},
   {image:"https://i.pinimg.com/564x/7f/e9/5b/7fe95b145f5c6875191de1e416fd199b.jpg"},
    {image:"https://i.pinimg.com/564x/33/0f/62/330f6248833aeee136832e97ff0a7f5a.jpg"},
    
  ].map((item,index)=>{
  return <div className="image-container rounded-xl " key={index}>
    <img className='w-[100%] h-[40vh]  ' src={item.image} alt="Image 1"/>
    <div className="overlay absolute bottom-0 left-0 right-0 overflow-hidden h-0 ">
      <div className="overlay-content absolute bottom-[-50px] left-[18%] p-[10px] text-white text-center">
        <h2>View Details</h2>
        <p>Description of image 1...</p>
        <button className='bg-[#4CAF50] text-[white] py-[10px] px-[20px] border-none cursor-pointer'>Apply Online</button>
      </div>
    </div>
  </div>
  
  


  

    
    
    
   
        
    
    })
  }
    </div>
    </div>

</div>
<Footer/>
   </>
  )
}

export default Shop;
