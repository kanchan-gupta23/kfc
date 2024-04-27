import React, {useEffect, useState} from 'react'
import { motion, } from 'framer-motion'

import gsap from 'gsap'
import { Power2 } from 'gsap';

import {ScrollTrigger} from "gsap/ScrollTrigger";

import {Link } from 'react-router-dom';




function Menu() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const menuItems = gsap.utils.toArray('.menu3');

  
    menuItems.forEach((menuItem, index) => {
    gsap.from(menuItem,{
      opacity:0,
      y:50,
     
      scrollTrigger:{
       
        scrub:0.3,
        trigger:menuItem,
        ease:Power2.easeInOut,
        scroller:"body",
        toggleActions: 'play none none reverse',
        
      }
    })
    gsap.to(menuItem,{
      opacity:1,
      y:0,
    
      stagger:0.8,
      
      scrollTrigger:{
        scrub:0.3,
        trigger:menuItem,
        ease:Power2.easeInOut,
        scroller:"body",
        
        start:"top 95%",
        end:"bottom -100",
        
      
        markers:true,
        toggleActions: 'play none none reverse',
      }
    })
    })

   
},[])


 




 


  return (
<div className='bg-white w-screen  '>

<div  className='  h-full w-screen flex  relative pb-[70vh] ' >
  <div 
   className='img h-full w-[20vw] mt-20 ml-40  menuList  sticky top-[5%] '>
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
        <Link to={items.src}
        key={index}  className={`block text-3sml tracking-tighter text-zinc-800 leading-10 hover:font-bold ${index===0 && "text-4xl font-bold mt-5 mb-5"}`}>{items.name}</Link>
      ))}

      </div>
  </div>
  <div  className='menu w-[60vw] ' >
    <div className='flex gap-2  border-zinc-900 border-2 w-[30vw] shadow-md rounded-2xl overflow-hidden mt-40'>
      <img src="https://online.kfc.co.in/static/media/searchIcon.0e00b33c.svg" alt="" className='h-8 ml-1'/>
      <input type="search" placeholder='search you cravings' className='capitalize w-full h-8 outline-none' />
    </div>
    <div  className='linear border-zinc-900 border-b-2 mt-4'></div>
    <motion.div  initial={{x:[0,0,0]}} animate={{ x: [100, 100, 0] }} transition={{ease:[0.34, 1.56, 0.64, 1],duration:1.5}}    className='img '>
      <div className=' menu2  w-full bg-zinc-100 mt-10 rounded-md justify-center align-middle'>
        <h1 className='uppercase tracking-tighter font-semibold text-3xl p-5 text-black'>Peri peri chicken</h1>
        <div className='  grid grid-cols-3 pb-[8vh] gap-4 justify-center align-middle w-full mx-3'>
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
  return <div key={index}  className='menu3 text shadow-xl  w-[18vw] h-[70vh] rounded-md overflow-hidden p-4 relative text-black'>
            <img  src={items.img} alt="" className=''/>
            <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
            <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
            <p className='text-black text-[2.5vh]'>{items.p}</p>
            <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center p-2 h-[7.5vh] w-[15vw] align-middle  absolute bottom-[5%] left-1/2 -translate-x-1/2'>
      <button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
      <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="cart" />
      </div>
  </div>
          })}
        </div>

      </div>
    </motion.div>
    
    <div   className='menu2  bg-zinc-100 '>
      <h1 className='mt-40 mb-4 p-4 font-bold text-4xl text-black '>VALUE SNACKERS</h1>
    <div className='img  pb-[8vh]  grid grid-cols-3 mx-3 gap-4 text-black'>
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
          return  <div key={index} className='value menu3 shadow-xl text-black w-[18vw] h-[80vh] rounded-md overflow-hidden mt-5 p-4 relative'>
              <img key={index} src={items.img} alt="" className=''/>
              <h1 className='text-red-700  font-bold text-[3.5vh]'>{items.h2}</h1>
            <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
            <p className='text-[2.5vh]'>{items.p}</p>
              <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center p-2 h-[7.5vh] w-[15vw] align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2'>
          <button className='capitalize text-white pt-[0.5vh]'>add to cart</button>
          <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
          </div>
      </div>
      })}
    </div>
    </div>
      
        <div   className=' w-full mt-80 menu2 bg-zinc-100'>
        <h1 className=' img uppercase p-4 text-3xl font-semibold text-black '>chicken rolls</h1>
      <div  className=' img pb-[8vh] w-full  grid grid-cols-3 mx-3  gap-4'>
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
    
].map((items,index)=>{
  return  <div key={index} className='img  menu3 shadow-xl  relative w-[18vw] h-[70vh] rounded-md text-black overflow-hidden p-4'>
      <img key={index} src={items.img} alt="" className=''/>
       <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
    <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
    <p className='text-[2.5vh]'>{items.p}</p>
      <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] p-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2'>
  <button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
  <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
  </div>
</div>
})}
</div>
</div>
          
         
          <div   className='  w-full mt-20 menu2 bg-zinc-100'>
        <h1 className='uppercase p-4 text-3xl font-semibold text-black'>biryani buckets</h1>
      <div className='snickers pb-[8vh] w-full grid grid-cols-3 mx-3 gap-4'>
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
  return  <div key={index} className='img menu3 shadow-xl relative text-black w-[18vw] h-[75vh] rounded-md overflow-hidden p-4'>
      <img key={index} src={items.img} alt="" className=''/>
      <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
    <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
    <p className='text-[2.5vh]'>{items.p}</p>
      <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center p-2 h-[7.5vh] w-[15vw] align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2 '>
  <button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
  <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
  </div>
</div>
})}
    </div>
    </div>

    <div  className=' w-full mt-20 menu2 bg-zinc-100' >
        <h1 className='uppercase p-4 text-3xl font-semibold text-black '>box meals</h1>
      <div className='value snickers pb-[8vh] w-full grid grid-cols-3 mx-3 gap-4'>
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
      return  <div key={index} className='img menu3 value-snickers text-black shadow-xl relative w-[18vw] h-[70vh] rounded-md overflow-hidden p-4'>
          <img key={index} src={items.img} alt="" className=''/>
          <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
        <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
        <p className='text-[2.5vh]'>{items.p}</p>
          <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center p-2 h-[7.5vh] w-[15vw] align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2'>
      <button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
      <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
          </div>
      </div>
})}
    </div>
    </div>
    <div   className='bg-zinc-100 w-full mt-20 menu2'>
    <h1 className='uppercase p-4 text-3xl font-semibold text-black '>burgers</h1>
  <div className=' pb-[8vh] grid grid-cols-3 gap-7 mx-3'>
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
  return  <div  key={index}  className='value-snickers relative text-black shadow-xl menu3 w-[18vw] h-[70vh]  rounded-md overflow-hidden p-4'>
      <img key={index} src={items.img}  alt="" className='img'/>
      <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
    <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
    <p className='text-[2.5vh]'>{items.p}</p>
      <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] p-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2'>
  <button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
  <img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
  </div>
</div>
})}
    </div>
    </div>
    <div   className=' w-full mt-20  bg-zinc-100 menu2'>
        <h1 className='uppercase p-4 text-3xl font-semibold text-black '>snacks</h1>
      <div className=' box value snickers pb-[8vh] w-full grid grid-cols-3 mx-3 gap-4'>
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
return  <div key={index} className='value-snickers text-black shadow-xl menu3 w-[18vw] h-[70vh] rounded-md relative overflow-hidden p-4'>
    <img key={index} src={items.img} alt=""  className='img'/>
    <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
  <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
  <p className='text-[2.5vh]'>{items.p}</p>
    <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] p-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2 '>
<button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
<img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
</div>
</div>
})}
  </div>
  </div>

  <div   className='  w-full mt-20 menu2 bg-zinc-100'>
    <h1 className='uppercase p-4 text-3xl font-semibold text-black'>beverages</h1>
  <div className='w-full grid grid-cols-3 mx-3 gap-4 pb-[8vh]'>
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
return  <div key={index} className='menu3 text-black shadow-xl w-[18vw] h-[60vh]  rounded-md relative p-4'>
    <img key={index} src={items.img} alt=""  className='img'/>
    <h1 className='text-red-700 text-[3.5vh] font-bold'>{items.h2}</h1>
  <h2 className='font-semibold text-[2.5vh]'>{items.amt}</h2>
  <p className='text-[2.5vh] text-black'>{items.p}</p>
    <div className='flex mt-3 gap-2 bg-red-600 rounded-xl justify-center h-[7.5vh] w-[15vw] p-2 align-middle absolute bottom-[5%] left-1/2 -translate-x-1/2 '>
<button className='capitalize text-white  pt-[0.5vh]'>add to cart</button>
<img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" className='' alt="" />
</div>
</div>
})}
  </div>
  </div>
     </div>
     </div>
     </div>
     
    
    
  )
}

export default Menu