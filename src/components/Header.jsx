"use client"

import React, { useEffect, useRef, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import './components.css'
const Header = () => {
    const accordionRef = useRef();
    const menuIconRef = useRef();
    const [menu,setMenu]=useState(false)
    const [clippath,setClippath]=useState(false)



    const showMenuMobileHandler=(e)=>{
        e.stopPropagation()
       
        setMenu(prev=>!prev)
        setClippath(prev=>!prev)
  
    }

    useEffect(() => {
     
    
        let clickHandler = (e) => {
          if (!accordionRef.current.contains(e.target) && !accordionRef.current.contains(e.target)   ) {
             
          
        
            setMenu(false)
            setClippath(false)
          }
        };

        document.addEventListener("click", clickHandler);
        return ()=>{document.removeEventListener("click",clickHandler)}
      }, [menu]);
    
  return (
    <div className='bg-[#03c5ff] h-16 relative  z-50'>
        <div className='w-full h-16 flex'>

        <div className='w-3/4 h-full flex  gap-x-1 pl-10 relative '>
        <div className='absolute left-[16%] translate-x-[16%] top-[52%] translate-y-[-50%] '>

        <span className='font-[logo] text-xl '>shop</span>
        </div>
        <div className='absolute left-32 top-[50%] translate-y-[-50%] '>

        <span className='font-[logo] text-4xl font-bold text-white tracking-[.25rem]'>MAJD</span>
        </div>
        {/* <span className='font-[logo]'>Majd</span> */}
        </div>


        <div className='w-1/4 h-full align-content:center flex items-center justify-center' ref={menuIconRef}><TiThMenu   onClick={(e)=>{showMenuMobileHandler(e)}} className='bg-white w-10 h-10 p-2 rounded-full hover:scale-110 duration-100 cursor-pointer'/></div>
        </div>

        <div    ref={accordionRef} className={`${menu ? "translate-x-1/3 top-16 mt-[2px] " : " translate-x-full   " } md:hidden flex flex-col h-screen top-16  absolute  z-40 left-0 w-full transition-transform duration-500 ease-in-out	  overflow-hidden`}>
                <div className= {` ${clippath ? "[clip-path:circle(150%_at_100%_0%)] " : " [clip-path:circle(0%_at_120%_-50%)] "} clipPath  absolute top-0 right-0 bg-[#03c5ff] h-screen w-full   `}  >
                    ali
                </div>
            </div>
    </div>
  )
}

export default Header