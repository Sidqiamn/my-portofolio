import React, { useEffect, useState } from 'react'
import reactgambar from "../assets/react.svg"
import instagram from "../assets/img/instagra.png"
import facebook from "../assets/img/facebook (2).png"
import linkedin from "../assets/img/linkedin.png"

const NavBar = () => {
  const [logo, setLogo] = useState(false)
  const [skill, setSkill] = useState(false)
  const [project, setProject] = useState(false)
  const [Home, setHome] = useState(true)
  const [scroll, setScroll] = useState(false)
  const [Contact, setContact] = useState(false)
  
  const handleLogo = () =>{
    setLogo(logo =>!logo)
    setHome(logo =>!logo)

  }
  
  useEffect(()=>{
    const handleScroll = () => {
      if(scrollY > 50){
        setScroll(true)
        setHome(true);
      } else {
        setScroll(false);
      }
    };

    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 670) {
        setSkill(true)
        setHome(false)
        setLogo(false)
        setProject(false)
      } else{
        setSkill(false)
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1120) {
        setSkill(false)
        setHome(false)
        setLogo(false)
        setProject(true)
      } else{
        setProject(false)
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1920) {
        setSkill(false)
        setHome(false)
        setLogo(false)
        setProject(false)
        setContact(true)
      } else{
        setContact(false)
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  

  const handleHome = () =>{
    setLogo(logo =>!logo)
    setHome(logo =>!logo)

  }
  return (
    <div   className ={`flex flex-row justify-between items-center pl-10 pt-5 pb-5 ${scroll && " bg-slate-800 bg-opacity-45  fixed top-0 left-0 right-0  z-0"  }` }>
      
      <div className="flex gap-8 text-white">

      <span className={logo ? " border-b-2 px-1" : " "}><button onClick={handleLogo}>logo</button></span>
      <span className={Home ? " border-b-2 px-1" :" "}> <button onClick={handleHome}>Home</button></span>
      <span className={skill ? " border-b-2 px-1" : " "}>Skill</span>
      <span className={project ? " border-b-2 px-1" : " "}>Project</span>
      <span className={Contact ? " border-b-2 px-1" : " "}>Contact</span>
      </div>

      <div className='flex flex-row items-center mr-10 text-white gap-3'>


      <img className='h-10' src={instagram} alt="" />
      <img src={facebook} className='h-10' alt="" />
      <img src={linkedin} className='h-10' alt="" />
      <p className="border h-12 text-center flex items-center  py-4 px-2">Let's Connect</p>
      </div>

    </div>
  )
}

export default NavBar