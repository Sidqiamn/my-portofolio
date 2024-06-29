import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react.png"
import CSS from "../assets/img/HtmlLogo.png"
import html from "../assets/img/CSSLogo.png"
import whitegray from "../assets/img/whitegray.jpg"


const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='flex w-full justify-center pt-32 pb-32 '>
        <div className='container w-[200rem] bg-white pt-16 p-10 rounded-3xl' style={{backgroundImage:`url(${whitegray})`}}>
            <p className='text-center  text-5xl mb-14 font-bold'>Skills</p>

<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider " autoPlay={true}  itemClass="carousel-item-padding-40-px">
  <div className='flex flex-col justify-center items-center'>
    <img className="h-28 "src={react} alt="" />
    <p className='font-semibold'>react Js</p>
  </div>
 
  <div className='flex flex-col justify-center items-center'>
    <img className="h-28  "src={html} alt="" />
    <p className='font-semibold'>HTML</p>
  </div>
 
  <div className='flex flex-col justify-center items-center'>
    <img className="h-28 "src={CSS} alt="" />
    <p className='font-semibold'>CSS</p>
  </div>
 
</Carousel>;
        </div>
    </div>
  )
}

export default Skills