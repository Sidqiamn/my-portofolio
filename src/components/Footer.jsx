import React from 'react'
import facebook from "../assets/img/facebook (2).png"
import instargram from "../assets/img/instagra.png"
import linkedin from "../assets/img/linkedin.png"
import call from "../assets/img/call.png"
const Footer = () => {
  return (
    <div>
        <div className='bg-black h-1'></div>
        <div className='bg-white h-96 gap-y-5 border-top flex justify-center items-center flex-col'>
            <p className='text-3xl font-bold'>Sidqi Amanullah</p>
            <p className='text-center w-[60rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti dicta dolores, iusto exercitationem id nemo quibusdam ad nostrum, eius deserunt reprehenderit quam unde voluptatibus vero quisquam eveniet animi aut.</p>
            <div className='flex gap-3 '>
                <img className="h-12" src={facebook} alt="" />
                <img className="h-12" src={instargram} alt="" />
                <img src={linkedin} className='h-12' alt="" />
            </div>
            <div>
            <img src={call} className='inline-block h-6' alt="" />
            <p className='inline-block'>+62231xxxxx</p>
            </div>
        </div>
    </div>
  )
}

export default Footer