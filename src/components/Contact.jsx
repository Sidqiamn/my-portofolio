import React from 'react';
import bgwhite from "../assets/img/bgwhite.jpg";
import planet from "../assets/img/planet.png";

const Contact = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[74rem] h-[30rem] mb-20 mt-20 bg-cover bg-no-repeat flex justify-evenly rounded-2xl' style={{backgroundImage:`url(${bgwhite})`}}>
        
        <img src={planet} alt="" />
        <div className="   flex justify-center items-center ">
          <form action="" className=' p-6 rounded-lg grid grid-cols-2 gap-3'>
            
            <input type="text" name="name" className='w-full mb-4 p-2 border border-gray-400 rounded-lg ' placeholder='First Name' />
            <input type="text" name="email" className='w-full mb-4 p-2 border border-gray-400 rounded-lg' placeholder='Last Name' />
            <input type="email" name="email" className='w-full mb-4 p-2 border border-gray-400 rounded-lg' placeholder='Email Adress' />
            <input type="number" name="email" className='w-full mb-4 p-2 border border-gray-400 rounded-lg' placeholder='Phone No.' />
            <textarea name="" id="" placeholder='Massage' className='px-1 border col-span-2 h-44 border-gray-400'></textarea>
            <button type="submit" className="bg-gray-500 hover:bg-gray-700 w-36 mt-5 text-white py-3 px-4 rounded-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
