import React, { useEffect, useState } from 'react'
import arrowgambar from "../assets/img/arrow.png" 
import orang from "../assets/img/orang.jpg"
// import profile from "../assets/img/profile.jpg"
import profile from "../assets/img/profilenobg.png"
import bgdarkgrey from "../assets/img/bg-darkgrey.jpg"


const Banner = () => {
  const [scroll, setScroll]  = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', function (params) {
      if(scrollY>50){
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  })
  return (
    <div className={`h-screen ${scroll && " mt-24"}`}  >
      
    <br /><br /><br /> <br />
    <div className='grid grid-cols-4 gap-4 ml-7 mt-10 '>
    <div style={{backgroundImage:`url(${bgdarkgrey})`, zIndex:-1}} className='bg-no-repeat absolute inset-0'></div>
        <div className='col-span-2 text-start '>
            <span className='text-xl text-white bg-gradient-to-br from-blue-900 to-blue-950 p-2 bg-opacity-60'>Welcome To My Portofolio</span>
        </div>
        <div className='ml-40 auto-cols-auto col-span-2 w-72 row-span-4 '><img className='mb-5' src={profile} alt="" /></div>
      
        <div className='text-white text-4xl col-span-2  font-bold text-shadow-lg'>Hi! i'm Sidqi Web Designer</div>
        {/* <div>4</div>
        <div>5</div> */}
        <div className='col-span-2 text-slate-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nulla aliquam rem aspernatur quas eaque, sunt nostrum atque! Totam dolorum vel delectus labore ipsa magni, porro sunt! Pariatur, commodi officia?</div>
        {/* <div>10</div>
        <div>11</div> */}
        <div className='col-span-2 mt-11 text-white'>let's Connect <span><img  className="h-10 inline-block" src={arrowgambar} alt="" /></span></div>

        <div></div>        
    </div>
    </div>
  )
}

export default Banner