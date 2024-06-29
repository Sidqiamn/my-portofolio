import React from 'react';
import web1 from "../assets/img/web1.jpg";
import web2 from "../assets/img/web2.jpg";
import web3 from "../assets/img/web3.jpg";
import web4 from "../assets/img/web4.jpg";
import web5 from "../assets/img/web5.jpg";
import web6 from "../assets/img/web6.jpg";

const Project = () => {
    const projekList = [
        { title: "Projek1", imgurl: web1 },
        { title: "Projek2", imgurl: web2 },
        { title: "Projek3", imgurl: web3 },
        { title: "Projek4", imgurl: web4 },
        { title: "Projek5", imgurl: web5 },
        { title: "Projek6", imgurl: web6 }
    ];

    return (
        <div className='flex justify-center flex-col items-center'>
            <div className='flex justify-center items-center flex-col mb-10'>
                <p className='text-4xl font-bold text-white mb-3'>Projects</p>
                <p className='w-[60rem] text-slate-300 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic accusantium quod obcaecati dignissimos incidunt recusandae soluta facere, molestiae ipsam, repellat fugiat assumenda aperiam, dolorem eligendi eaque fuga tempore consequuntur doloribus.</p>
            </div>
            <div className="flex justify-center gap-3 items-center flex-wrap">
                { 
                    projekList.map(item=>(
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-[16rem] w-[24rem]">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={item.imgurl} alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-3xl font-bold text-white">{item.title}</h1>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button class="rounded-full hover:bg-slate-800 bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Project;
