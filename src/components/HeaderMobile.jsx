
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { product } from '../../server/data';
import { productHead } from '../../server/data';
import { FiSearch } from "react-icons/fi";

import './components.css'
const HeaderMobile = () => {
    const accordionRef = useRef();
    const menuIconRef = useRef();
    const userIconRef = useRef();
    const [menu,setMenu]=useState(false)
    const [clippath,setClippath]=useState(false)
    const [showLoginHint,setshowLoginHint]=useState(false)
    const [rangeval, setRangeval] = useState(null);
    const [showProductMenu, setshowProductMenu] = useState(false);
    const [subProduct, setSubProduct] = useState(false);
    const [indexSubProduct, setIndexSubProduct] = useState(null);
    const [serchIcon, setserchIcon] = useState(false);
    const refSearchMobile = useRef()

    const aa=productHead()
    const data=product
    console.log("aaaaaaaaaaaa",data);

    
    const subProductHandler=(id)=>{
        if(subProduct===false || id===indexSubProduct)
        {

            setSubProduct(prev=>!prev)
        }

        setIndexSubProduct(id)
    }
const showProductMenuhandler=()=>{
    setshowProductMenu(prev=>!prev)
    setSubProduct(false)
}

    const showMenuMobileHandler=(e)=>{
        // e.stopPropagation()
       
        setMenu(prev=>!prev)
        setClippath(prev=>!prev)
        setshowLoginHint(false)
        setSubProduct(false)
        setshowProductMenu(false)

  
    }
const showLoginHintHandler=()=>{
    // e.stopPropagation()
    setshowLoginHint(prev=>!prev)
}
    useEffect(() => {
     
    
        let clickHandler = (e) => {
          if (!accordionRef.current.contains(e.target) && 
          !userIconRef.current.contains(e.target) && 
          !menuIconRef.current.contains(e.target)  
         ) {
             
          
            setshowProductMenu(false)
            setMenu(false)
            setClippath(false)
            setshowLoginHint(false)
            setSubProduct(false)


          }
          if (!refSearchMobile.current.contains(e.target)
       
         ) {
             
          
            // setshowProductMenu(false)
            // setMenu(false)
            // setClippath(false)
            // setshowLoginHint(false)
            // setSubProduct(false)
           
            setserchIcon(false)


          }
          
        };

        document.addEventListener("mousedown", clickHandler);
        return ()=>{document.removeEventListener("mousedown",clickHandler)}
      }, [menu]);
    const serchIconHandler=()=>{
        setserchIcon(prev=>!prev)
        refSearchMobile.current.select();

    }
  return (
    <div className='bg-primaryColor h-16 fixed top-0 w-full  z-40 '>
        <div className='w-full h-16 flex'>

        <div className='w-[30%] h-full flex  gap-x-1 pl-10 relative '>
        <div className='absolute  left-[0%] translate-x-[10%] top-[40%] translate-y-[-50%] '>

        <span className='font-[logo1] text-4xl font-bold text-whiteColor tracking-[.25rem]'>MAJD</span>
        </div>
        <div className='absolute left-20 top-[60%] translate-y-[-50%] '>

        <span className='font-[logo2] text-5xl italic lowercase'>shop</span>
        </div>
        {/* <span className='font-[logo]'>Majd</span> */}
        </div>

        <div className='relative w-[48%]  h-full align-content:center flex items-center bg-green-600 justify-end  rounded px-1' ref={userIconRef}>
            {/* <FaUser   onClick={(e)=>{showLoginHintHandler(e)}} className='bg-whiteColor w-7 h-7 p-1 rounded-full hover:scale-110 duration-100 cursor-pointer'/> */}
            <div className={`   w-full flex justify-center items-center bg-blue-600 h-12 	duration-200   rounded overflow-hidden z-50`}>
                <input ref={refSearchMobile} style={{direction:"rtl"}} type="text" placeholder="" className={`transition-all overflow-hidden duration-500 bg-green-100 px-2 opacity-0 ${
          serchIcon ? 'max-w-full opacity-100 ' : 'max-w-0'}`}/>
                <FiSearch className={` transition-all overflow-hidden duration-500 absolute ${serchIcon ?"left-6 translate-x-[10%]":" left-[50%] translate-x-[-50%]"}` } onClick={serchIconHandler}/>
            </div>


        </div>
        <div className='w-[10%] bg-red-600 h-full align-content:center flex items-center justify-center relative rounded' ref={userIconRef}><FaUser   onClick={(e)=>{showLoginHintHandler(e)}} className='bg-whiteColor w-7 h-7 p-1 rounded-full hover:scale-110 duration-100 cursor-pointer'/>
            <div className={` ${showLoginHint ? "opacity-100 top-16":"opacity-0 top-28 "} absolute w-52 bg-blue-600 h-auto 	duration-200 -right-12  rounded overflow-hidden z-50`}>
                <ul className='w-full bg-amber-600 flex flex-col gap-y-2'>
                    <li className='w-full text-center'>aaaa</li>
                    <li className='w-full text-center'>aaaa</li>
                    <li className='w-full text-center'>aaaa</li>
                    
                </ul>
            </div>


        </div>
  
        <div className='w-[12%]  h-full align-content:center flex items-center justify-center' ref={menuIconRef}><TiThMenu   onClick={(e)=>{showMenuMobileHandler(e)}} className='bg-whiteColor w-10 h-10 p-2 rounded-full hover:scale-110 duration-100 cursor-pointer'/></div>
        </div>












        <div    ref={accordionRef} className={`${menu ? "translate-x-[67%] top-16 mt-[2px] " : " translate-x-full mt-[2px]  " } md:hidden flex flex-col h-screen top-16  absolute  z-40 left-0 w-[60%] transition-transform duration-700 ease-in-out	  overflow-hidden `}>
                <div className= {` ${clippath ? "[clip-path:circle(150%_at_100%_0%)] " : " [clip-path:circle(0%_at_120%_-50%)] "} clipPath  absolute top-0 right-0 bg-primaryColor h-screen  box-border w-full flex flex-col gap-y-1 px-1`}  >
               <div className='w-full bg-red-600 py-2'>
                        <input type="text" />
               </div>
               <div>
      <input type="range"  min="199" max="3999" 
       onChange={(event) => setRangeval(event.target.value)} />
      <h4>The range value is {rangeval}</h4>
    </div>
               <div>
  
      <h4>home</h4>
    </div>
    <div >
    <div className='' >
        <span className='' onClick={showProductMenuhandler}>producet</span>
        <div    className={`transition-all overflow-hidden duration-500 bg-green-100 px-2 ${
          showProductMenu ? 'max-h-screen' : 'max-h-0'
        //   showProductMenu ? 'h-auto' : 'h-0'
        }`}>
            
            <div className='flex flex-col'>
                {aa.map((a,index)=>(
                    <div key={index}>
                        <span onClick={()=>{subProductHandler(index)}}>{index}{a}</span>
                        <div    className={`transition-all overflow-hidden duration-500 bg-green-100 px-2 ${
          subProduct ? 'max-h-screen' : 'max-h-0'
        //   showProductMenu ? 'h-auto' : 'h-0'
        }`}>{index===indexSubProduct ? (
            <div className='flex flex-col'>
              {/* {console.log("dataaaaaaaaaaaaa",  data[a] )} */}
              {data[a].map((b,i)=>(<span key={i}>{b.type}</span>))}
              
            </div>
        ):null}</div>    
                    </div>
                ))}

            </div>
          
        </div>
    </div>
    <div>nnnnnn</div>

    </div>
                </div>
            </div>
    </div>
  )
}

export default HeaderMobile