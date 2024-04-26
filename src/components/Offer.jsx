// import React, {useState} from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollSmoother from 'gsap-trial/ScrollSmoother'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'




gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);
function Offer() {
  
  const img = useRef(null)
  useGSAP(()=>{
    const t2 = gsap.timeline({
      scrollTrigger: {
          trigger: '.img',
          pin: true,
      effect:true}
        })
        
   
      t2.from('.img',{
        opacity:0,
        trigger:'.img',
        duration:1,
        stagger:0.5,
      })
      t2.to('.img',{
        opacity:1,
        trigger:'.img',
        duration:1,
        stagger:0.5,
      })
  })


const container = useRef()
const smoother = useRef()
useGSAP(()=>{
  const scrollerSmoother = ScrollSmoother.create({
    content: '.content',
    wrapper: '.wrapper',
    smooth: true,
    effects: true,
    normalizeScroll: true
  })
  
  const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.accordions',
        pin: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        ease: 'linear',
      }
  })
  
  tl.to('.accordion .text', {
    height: 0,
    paddingBottom: 0,
    opacity: 0,
    stagger: .5,
  })
  tl.to('.accordion', {
    marginBottom: -15,
    stagger: .5,
    opacity:1
  }, '<')
  
})

 

  motion
  return (
<div>

<div ref={container} className='  h-screen w-screen flex ' >
  <motion.div 
   initial={{}} animate={{}} className='img h-[750vh] w-[20vw] mt-20 ml-40  menuList  sticky top-1'>
      <img src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg" alt="" />
      <div className=''>
        {[{name:"KFC MENU",
          src:""
        },{
          name:"PERI PERI CHICKEN",
           src:"#value"
        },{name:"VALUE SNACKERS",
        src:".value"},
      {
        name:"CHICKEN ROLLS",
        src:".value",
      },{name:"CHICKEN BUCKETS",
      src:"#chickenbuckets"},
      {name:"BIRYANI BUCKETS" ,
      src:".value"
    },
    {name:"BOX MEALS",
     src:".value"
  },{name:"BURGERS",
   src:".value"
},{name:"SNACKS",
src:".value"
},{name:"BEVERAGES", 
src:".value"
}].map((items,index)=>
      (
        <a  href={items.src}
        key={index}  className={`block text-3sml tracking-tighter leading-10 hover:font-bold ${index===0 && "text-4xl font-bold mt-5 mb-5"}`}>{items.name}</a>
      ))}

      </div>
  </motion.div>
  <div  className='menu w-[60vw] h-screen' >
    <div className='flex gap-2  border-zinc-900 border-2 w-[30vw] shadow-md rounded-2xl overflow-hidden mt-40'>
      <img src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg" alt="" className='h-8 ml-1'/>
      <input type="search" placeholder='search you cravings' className='capitalize w-full h-8 outline-none' />
    </div>
    <div  className='liner border-zinc-900 border-b-2 mt-4'></div>
    <motion.div  initial={{x:[0,0,0]}} animate={{ x: [100, 100, 0] }} transition={{ease:[0.34, 1.56, 0.64, 1],duration:1.5}}    className='img '>
      <div id="periperi" className=' h-[280vh] w-full bg-zinc-100 mt-10 rounded-md justify-center align-center'>
        <h1 className='uppercase tracking-tighter font-semibold text-3xl p-5'>Peri peri chicken</h1>
        <div className='  flex flex-wrap gap-4 justify-center align-center w-full'>
          {[
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
        h2:"5 Leg Pc & 2 Dips Bucket",
        amt:"₹519.05",
        p:"Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)"
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
        h2:"Peri Peri 10 Pc Chicken Strips & 2 Dips",
        amt:"₹499.05",
        p:"Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)"
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
        h2:"5 Peri Peri 10 Leg Pc & 4 Dips",
        amt:"₹948.57",
        p:"Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)"
    },
    {
        img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002144.jpg?ver=41.83",
        h2:"Peri Peri 6pc Chicken Strips",
        amt:"₹299.05",
        p:"Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)"
    }
].map((items,index)=>{
  return <div key={index}  className=' text shadow-xl w-[25vw] h-[70vh] rounded-md overflow-hidden p-4'>
            <img key={index} src={items.img} alt="" className=''/>
            <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
            <h2 className='font-semibold text-2xl'>{items.amt}</h2>
            <p className=''>{items.p}</p>
            <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
      <button className='capitalize text-white'>add to cart</button>
      <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
      </div>
  </div>
          })}
        </div>

      </div>
    </motion.div>
    <div className="content">
    <div  data-scroll-section data-scroll data-scroll-speed="-0.2" className='h-[120vh] bg-zinc-100'>
      <h1 className='mt-40 mb-4 p-4 font-bold text-4xl '>VALUE SNACKERS</h1>
    <div className='img  h-screen  flex flex-wrap ml-3 gap-4'>
      {[{img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
        h2:"Single Chicken Roll",
        amt:"₹119.05",
        p:"Street style roll with single chicken strip, onions and two spicy sauce"},
        {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002348.jpg?ver=41.8",
        h2:"Chicken Longer Burger & 2 Strips Combo",
        amt:"₹219.05",
        p:"Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips"},
        {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K136.jpg?ver=41.8",
        h2:"Regular Popcorn",
        amt:"₹115.24",
        p:"Signature bite-sized boneless chicken, with special spices"},
        {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002301.jpg?ver=41.8",
        h2:"2 Veg Longer Burger",
        amt:"₹198.10",
        p:"The really long burger with Veg Patty, Onion, Lettuce and two sauces"},
        {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=41.8",
        h2:"Chocolate Lava Cake",
        amt:"₹108.57",
        p:"Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal "}
      ].map((items,index)=>{
          return  <div key={index} className='value shadow-xl w-[18vw] h-[50vh]rounded-md overflow-hidden mt-5 p-4'>
              <img key={index} src={items.img} alt="" className=''/>
              <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
            <h2 className='font-semibold text-2xl'>{items.amt}</h2>
            <p className=''>{items.p}</p>
              <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
          <button className='capitalize text-white'>add to cart</button>
          <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
          </div>
      </div>
      })}
    </div>
    </div>
        <div className="">
        <div  className='h-[240vh] w-full mt-80 '>
        <h1 className=' img uppercase p-4 text-3xl font-semibold '>chicken rolls</h1>
      <div  className=' img h-screen w-full flex flex-wrap ml-3 gap-4'>
      {[{img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002324.jpg?ver=41.8",
          h2:"Classic Chicken Roll & Pepsi Combo",
          amt:"₹176.19",
          p:"Our new Classic Chicken Roll served with Pepsi 475ml"},
      {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002325.jpg?ver=41.8",
        h2:"Double Chicken Roll & Pepsi Combo",
        amt:"₹225.71",
        p:"Our new Double Chicken Roll served with Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002070.jpg?ver=41.8",
      h2:"Classic Chicken Roll Meal for 1",
      amt:"₹339.05",
      p:"Deal combo of 1 Classic Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg?ver=41.8",
      h2:"Double Chicken Roll Meal for 1",
      amt:"₹379.05",
      p:"Deal combo of 1 Double Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002069.jpg?ver=41.8",
      h2:"Classic Chicken Roll",
      amt:"₹119.05",
      p:"KFC's take on the street style roll with single chicken strip, onions & spicy sauces"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
      h2:"Double Chicken Roll",
      amt:"₹168.57",
      p:"KFC's take on the street style roll with double chicken strips, onions & spicy sauces"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002068.jpg?ver=41.8",
      h2:"Classic Chicken Roll Meal for 2",
      amt:"₹479.05",
      p:"Deal combo of 2 Classic Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002315.jpg?ver=41.8",
      h2:"Double Chicken Roll Meal for 2",
      amt:"₹548.57",
      p:"Deal combo of 2 Double Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml"}
].map((items,index)=>{
  return  <div key={index} className='img shadow-xl w-[18vw] h-[60vh] rounded-md overflow-hidden p-4'>
      <img key={index} src={items.img} alt="" className=''/>
       <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
    <h2 className='font-semibold text-2xl'>{items.amt}</h2>
    <p className=''>{items.p}</p>
      <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
  <button className='capitalize text-white'>add to cart</button>
  <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
  </div>
</div>
})}
</div>
</div>
          <div className="wrapper"></div>
          <div>
          <div className='  chicken h-[180vh] w-full mt-20'>
        <h1 className='uppercase p-4 text-3xl font-semibold '>biryani buckets</h1>
      <div className='snickers h-screen w-full flex flex-wrap ml-3 gap-4'>
      {[{img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002166.jpg?ver=41.83",
          h2:"Classic Biryani Combo",
          amt:"₹176.19",
          p:"Our new Classic Chicken Roll served with Pepsi 475ml"},
      {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002017.jpg?ver=41.83",
        h2:"Smoky Grilled Biryani Combo",
        amt:"₹225.71",
        p:"Our new Double Chicken Roll served with Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002052.jpg?ver=41.83",
      h2:"Popcorn Biryani Combo",
      amt:"₹339.05",
      p:"Deal combo of 1 Classic Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K626.jpg?ver=41.83",
      h2:"Classic Chicken Biryani Bucket (Large)",
      amt:"₹379.05",
      p:"Deal combo of 1 Double Chicken Roll, Large Fries, 2 Dips & Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K627.jpg?ver=41.83",
      h2:"Popcorn Chicken Biryani Bucket (Large)",
      amt:"₹119.05",
      p:"KFC's take on the street style roll with single chicken strip, onions & spicy sauces"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K617.jpg?ver=41.8",
      h2:"Smoky Grilled Biryani Bucket (Large)",
      amt:"₹168.57",
      p:"KFC's take on the street style roll with double chicken strips, onions & spicy sauces"},
    {img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K628.jpg?ver=41.83',
      h2:"Classic Chicken Biryani Bucket",
      amt:"₹479.05",
      p:"Deal combo of 2 Classic Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K623.jpg?ver=41.83",
      h2:"Popcorn Chicken Biryani Bucket",
      amt:"₹548.57",
      p:"Deal combo of 2 Double Chicken Rolls, Large Fries, 2 Dips & Pepsi 475ml"}
].map((items,index)=>{
  return  <div key={index} className='img shadow-xl w-[18vw] h-[50vh]rounded-md overflow-hidden p-4'>
      <img key={index} src={items.img} alt="" className=''/>
      <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
    <h2 className='font-semibold text-2xl'>{items.amt}</h2>
    <p className=''>{items.p}</p>
      <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
  <button className='capitalize text-white'>add to cart</button>
  <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
  </div>
</div>
})}
    </div>
    </div>

    <div className='h-[150vh] w-full mt-20'>
        <h1 className='uppercase p-4 text-3xl font-semibold '>box meals</h1>
      <div className='value snickers h-screen w-full flex flex-wrap ml-3 gap-4'>
      {[{img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=41.85",
          h2:"All Chicken Box",
          amt:"₹176.19",
          p:"A Box with your favorites! Get 1 pc Hot & Crispy, 2 Hot Wings & 1 Chicken Strip at a deal price"},
      {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=41.85",
        h2:"Zinger Tandoori Box",
        amt:"₹225.71",
        p:"A deal for Tandoori lovers : Get 1 Tandoori Zinger, 2 Hot Wings, 1 Veg Patty & 1 Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001039.jpg?ver=41.85",
      h2:"Popcorn Biryani Box",
      amt:"₹339.05",
      p:"Biryani lovers unite : Get 1 Popcorn Biryani Bucket with gravy, 2 Hot Wings & 1 Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001004.jpg?ver=41.85",
      h2:"Veg Zinger Box",
      amt:"₹379.05",
      p:"A deal for the Veg Zinger lovers : Get 1 Veg Zinger, 2 Veg Patties & 1 Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001038.jpg?ver=41.85",
      h2:"Veg Biryani Box",
      amt:"₹119.05",
      p:"Biryani lovers unite : Get 1 Veg Biryani Bucket with gravy, 1 Veg Patty & 1 Pepsi 475ml"}
    ].map((items,index)=>{
      return  <div key={index} className='img value-snickers shadow-xl w-[18vw] h-[50vh]rounded-md overflow-hidden p-4'>
          <img key={index} src={items.img} alt="" className=''/>
          <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
        <h2 className='font-semibold text-2xl'>{items.amt}</h2>
        <p className=''>{items.p}</p>
          <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
      <button className='capitalize text-white'>add to cart</button>
      <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
          </div>
      </div>
})}
    </div>
    </div>
    <div className='h-[180vh] w-full mt-20'>
    <h1 className='uppercase p-4 text-3xl font-semibold '>burgers</h1>
  <div className=' h-50vh flex flex-wrap gap-7'>
  {[
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001022.jpg?ver=41.85",
      h2:"Mixed Zinger Doubles",
      amt:"₹339.05",
      p:"2 delicious veg value burgers - at a deal price"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00001027.jpg?ver=41.85",
      h2:"Classic Zinger Burger",
      amt:"₹379.05",
      p:"Deal of 2 chicken value burgers, 2 Hot & Crispy, 2 dips (20gm each) & 1 Pepsi 475ml"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000956.jpg?ver=41.85",
      h2:"Buddy Meal",
      amt:"₹119.05",
      p:"Chicken zinger with a delicious tandoori sauce"},
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K439.jpg?ver=41.85",
      h2:"Veg Zinger Burger",
      amt:"₹168.57",
      p:"Best-seller combo of classic chicken zinger & tandoori zinger"},
    {img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000730.jpg?ver=41.85',
      h2:"2 Veg Krispers Meal",
      amt:"₹479.05",
      p:"Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce"
      },
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K146.jpg?ver=41.85",
      h2:"Popcorn Chicken Biryani Bucket",
      amt:"₹548.57",
      p:"Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2 "
     }
].map((items,index)=>{
  return  <div key={index} ref={img} className='value-snickers shadow-xl w-[18vw] h-30vh  rounded-md overflow-hidden p-4'>
      <img key={index} src={items.img}  alt="" className='img'/>
      <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
    <h2 className='font-semibold text-2xl'>{items.amt}</h2>
    <p className=''>{items.p}</p>
      <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
  <button className='capitalize text-white'>add to cart</button>
  <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
  </div>
</div>
})}
    </div>
    </div>
    <div className='h-[200vh] w-full mt-20  bg-zinc-100'>
        <h1 className='uppercase p-4 text-3xl font-semibold '>snacks</h1>
      <div className=' box value snickers h-screen w-full flex flex-wrap ml-3 gap-4'>
      {[
        {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K701.jpg?ver=41.85",
        h2:"Chicken & Krispers Combo",
        amt:"₹176.19",
        p:"Family Deal of 3 chicken zingers, med popcorn, med fries & 1 Pepsi 475ml"
          },
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000789.jpg?ver=41.85",
      h2:"Tandoori Zinger Burger",
      amt:"₹225.71",
      p:"2 delicious chicken value burgers - at a deal price"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000792.jpg?ver=41.85",
    h2:"Mixed Zinger Doubles",
    amt:"₹339.05",
    p:"2 delicious veg value burgers - at a deal price"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K264.jpg?ver=41.85",
    h2:"Classic Zinger Burger",
    amt:"₹379.05",
    p:"Deal of 2 chicken value burgers, 2 Hot & Crispy, 2 dips (20gm each) & 1 Pepsi 475ml"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002171.jpg?ver=41.85",
    h2:"Buddy Meal",
    amt:"₹119.05",
    p:"Chicken zinger with a delicious tandoori sauce"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K008.jpg?ver=41.85",
    h2:"Veg Zinger Burger",
    amt:"₹168.57",
    p:"Best-seller combo of classic chicken zinger & tandoori zinger"},
  {img:'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K223.jpg?ver=41.85',
    h2:"2 Veg Krispers Meal",
    amt:"₹479.05",
    p:"Signature burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce"
    },
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K137.jpg?ver=41.85",
    h2:"Popcorn Chicken Biryani Bucket",
    amt:"₹548.57",
    p:"Share 2 Classic Chicken Zingers & a Medium Popcorn in this delightful combo for 2 "
   }
].map((items,index)=>{
return  <div key={index} className='value-snickers shadow-xl w-[18vw] h-[50vh]rounded-md overflow-hidden p-4'>
    <img key={index} src={items.img} alt="" ref={img} className='img'/>
    <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
  <h2 className='font-semibold text-2xl'>{items.amt}</h2>
  <p className=''>{items.p}</p>
    <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
<button className='capitalize text-white'>add to cart</button>
<img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
</div>
</div>
})}
  </div>
  </div>
  <div className=' h-[50vh] w-full mt-20 '>
    <h1 className='uppercase p-4 text-3xl font-semibold '>beverages</h1>
  <div className='w-full flex flex-wrap ml-3 gap-4'>
  {[{img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K350.jpg?ver=41.85",
        h2:"Pepsi 475ml PET",
        amt:"₹176.19",
        p:"Pepsi 475ml PETl"
          },
    {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K485.jpg?ver=41.85",
      h2:"Pepsi Can 300 ml",
      amt:"₹225.71",
      p:"Pepsi Can 300 mle"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K487.jpg?ver=41.85",
    h2:"7UP Can 300 ml",
    amt:"₹339.05",
    p:"7UP Can 300 ml"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K486.jpg?ver=41.85",
    h2:"Pepsi Black Can 300 ml",
    amt:"₹379.05",
    p:"Pepsi Black Can 300 ml"},
  {img:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K488.jpg?ver=41.85",
    h2:"Mirinda Can 300 ml",
    amt:"₹119.05",
    p:"Mirinda Can 300 ml"},

].map((items,index)=>{
return  <div key={index} className=' shadow-xl w-[18vw] rounded-md  p-4'>
    <img key={index} src={items.img} alt="" ref={img} className='img'/>
    <h1 className='text-red-700 text-2xl font-bold'>{items.h2}</h1>
  <h2 className='font-semibold text-2xl'>{items.amt}</h2>
  <p className=''>{items.p}</p>
    <div className='flex mt-3 gap-2 bg-red-600 rounded-full justify-center p-2 align-middle '>
<button className='capitalize text-white'>add to cart</button>
<img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
</div>
</div>
})}
  </div>
  </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
  )
}

export default Offer