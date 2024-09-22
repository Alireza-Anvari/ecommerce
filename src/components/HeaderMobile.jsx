
"use client"
import MultiRangeSlider from "../utils/multiRange/MultiRangeSlider";

import React, { useEffect, useRef, useState } from 'react'
import { TiThMenu,TiTimes  } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FiPlusSquare ,FiMinusSquare  } from "react-icons/fi";
import { product } from '../../server/data';
import { productHead } from '../../server/data';
import { FiSearch } from "react-icons/fi";
import { Select, Option } from "@material-tailwind/react";
import { LuArrowLeftSquare } from "react-icons/lu";

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
    const refInputSearchMobile = useRef()
    const refIconSearchMobile = useRef()
    const [value, setValue] = React.useState("react");

    const producets=productHead()
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
        setserchIcon(false)

  
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
            // setserchIcon(false)


          }

          
          
          
        };

        document.addEventListener("mousedown", clickHandler);
        return ()=>{document.removeEventListener("mousedown",clickHandler)}
      }, [menu]);
    const serchIconHandler=()=>{
        setserchIcon(prev=>!prev)
        refInputSearchMobile.current.select();

    }
  return (
    <div className='bg-primaryColor h-16 fixed top-0 w-full  z-40  ' >
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





        <div className='relative w-[48%]  h-full align-content:center flex items-center justify-end  rounded px-1' ref={userIconRef}>
            {/* <FaUser   onClick={(e)=>{showLoginHintHandler(e)}} className='bg-whiteColor w-7 h-7 p-1 rounded-full hover:scale-110 duration-100 cursor-pointer'/> */}
            <div className={`   w-full flex justify-center items-center  h-14 	duration-200   rounded overflow-hidden z-50`}>
                <input ref={refInputSearchMobile} style={{direction:"rtl"}} type="text" placeholder="" className={`transition-all overflow-hidden bg-whiteColor duration-500 text-md p-1 opacity-0 ${
          serchIcon ? 'max-w-full opacity-100 ' : 'max-w-0'}`}/>
                <FiSearch ref={refIconSearchMobile} className={` transition-all bg-whiteColor rounded text-3xl overflow-hidden  p-1 duration-500 absolute ${serchIcon ?"left-4 translate-x-[10%]":" left-[50%] translate-x-[-50%] hover:scale-125 "}` } onClick={serchIconHandler}/>
            </div>


        </div>





        <div className='w-[10%]  h-full align-content:center flex items-center justify-center relative rounded' ref={userIconRef}><FaUser   onClick={(e)=>{showLoginHintHandler(e)}} className='bg-whiteColor w-7 h-7 p-1 rounded-full hover:scale-110 duration-100 cursor-pointer'/>
            <div className={` ${showLoginHint ? "opacity-100 top-16 max-h-auto overflow-hidden":"opacity-0 top-28 max-h-0 overflow-hidden"} absolute w-52 bg-blue-600 h-auto 	duration-200 -right-12  rounded overflow-hidden z-50 `}>
                <ul className='w-full  flex flex-col gap-[1px]  iconUser '>
                    <li className='w-full  text-center bg-whiteColor p-1 '>aaaa</li>
                    <li className='w-full  text-center bg-whiteColor p-1 '>aaaa</li>
                    <li className='w-full  text-center bg-whiteColor p-1 '>aaaa</li>
                    
                </ul>
            </div>


        </div>
  









{/* icon menu///////////////////////////////////////////////////////////// */}
        <div className='w-[12%]  h-full align-content:center flex items-center justify-center' ref={menuIconRef}> 
            {!menu ? (
                <TiThMenu   onClick={(e)=>{showMenuMobileHandler(e)}} className='bg-whiteColor w-10 h-10 p-2 rounded-full hover:scale-110 duration-100 cursor-pointer'/>

            ):(                <TiTimes   onClick={(e)=>{showMenuMobileHandler(e)}} className='bg-whiteColor w-10 h-10 p-2 rounded-full hover:scale-110 duration-100 cursor-pointer '/>
        )}
            </div>
        </div>















{/* accordion/////////////////////////////////// */}

        <div    ref={accordionRef} className={`${!menu ? "translate-x-0 " : "-translate-x-full mt-[2px]  " } md:hidden flex flex-col h-screen top-16  left-full absolute  z-40  w-[50%] transition-transform duration-700 ease-in-out	bg-transparent   overflow-hidden `}>
            
                <div className= {` ${clippath ? "[clip-path:circle(150%_at_100%_0%)] " : " [clip-path:circle(0%_at_120%_-50%)] "} clipPath  absolute top-0 right-0 bg-primaryColor h-screen  box-border w-full flex duration-500 flex-col gap-y-1 p-1`} style={{direction:"rtl"}} >


{/* home/////////////////////////////////// */}

                <div className="bg-whiteColor rounded flex items-center pr-2 h-16">
  
  <h4 className="hover:font-bold">home</h4>
</div>





{/* range//////////////////////////////////////////// */}

                 <div className=" flex-col gap-x-1 bg-whiteColor rounded flex items-center pr-2 rangrSlider">
                  
<div className=" flex  h-4 justify-start items-center text-sm">جستجو بر اساس محدوده قیمت</div>
<div className="h-12" style={{direction:"ltr"}}>
<MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
</div>
    </div>
 





{/* sort/////////////////////////////////////////// */}

               <div className='w-full h-16 bg-whiteColor rounded flex items-center pr-2 py-2  mb-0 sortBox' style={{direction:"rtl"}}>

               <div className="w-full text-darkColor colorSelect">
      <Select 
        label="مرتب سازی بر اساس"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html" className="w-full text-darkColor">Material Tailwind HTML</Option>
        <Option value="react">Material Tailwind React</Option>
        <Option value="vue">Material Tailwind Vue</Option>
        <Option value="angular">Material Tailwind Angular</Option>
        <Option value="svelte">Material Tailwind Svelte</Option>
      </Select>
    </div>


               </div>




   

{/* produce////////////////////////////////////////////// */}

    <div className='bg-whiteColor rounded  min-h-16 flex items-start justify-center flex-col hover:font-bold' >
        <span className='' onClick={showProductMenuhandler}>producet</span>
        <div    className={`transition-all overflow-hidden duration-500  px-2 ${
          showProductMenu ? 'max-h-screen' : 'max-h-0'
        //   showProductMenu ? 'h-auto' : 'h-0'
        }`}>
            
            <div className='flex flex-col'>
                {producets.map((producet,index)=>(
                    <div key={index}>
                        <div className="flex py-1" onClick={()=>{subProductHandler(index)}}>
                               {index===indexSubProduct ?<FiMinusSquare className="mx-1 text-primaryColor"/>:<FiPlusSquare className="mx-1"/>}        
                                 {index===indexSubProduct ?(
    <span className="text-pr text-primaryColor">
                            
    {producet}
   </span>
                                 ):(    <span className="text-pr">
                            
                                    {producet}
                                   </span>)
                                }
                            </div>
                        <div    className={` overflow-hidden   px-2 ${
          subProduct ? 'max-h-screen' : 'max-h-0'
        //   showProductMenu ? 'h-auto' : 'h-0'
        }`}>{index===indexSubProduct ? (
            <div className='flex flex-col '>
              {data[producet].map((value,i)=>(
                <span key={i} className="flex my-1  ">
                <LuArrowLeftSquare className="my-1 mx-2"/>
                {value.type}
                </span>))}
              
            </div>
        ):null}</div>    
                    </div>
                ))}

            </div>
          
        </div>
    </div>
 

    {/* blog////////////////////////////////////////////// */}
    <div className="bg-whiteColor rounded flex items-center pr-2 h-16 hover:font-bold">nnnnnn</div>
    {/* about as////////////////////////////////////////////// */}
    <div className="bg-whiteColor rounded flex items-center pr-2 h-16 hover:font-bold">nnnnnn</div>
                </div>
            </div>
    </div>
  )
}

export default HeaderMobile