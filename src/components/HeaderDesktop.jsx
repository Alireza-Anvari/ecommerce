"use client";
import MultiRangeSlider from "../utils/multiRange/MultiRangeSlider";

import React, { useEffect, useRef, useState } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi";
import { product } from "../../server/data";
import { productHead } from "../../server/data";
import { FiSearch } from "react-icons/fi";
import { Select, Option } from "@material-tailwind/react";
import { LuArrowLeftSquare } from "react-icons/lu";
import { FaSortAlphaDown } from "react-icons/fa";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { TbLogs } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";

import "./components.css";
import Link from "next/link";

const HeaderDesktop = () => {
  const accordionRef = useRef();
  const menuIconRef = useRef();
  const userIconRef = useRef();
  const [menu, setMenu] = useState(false);
  const [clippath, setClippath] = useState(false);
  const [showLoginHint, setshowLoginHint] = useState(false);
  const [rangeval, setRangeval] = useState(null);
  const [showProductMenu, setshowProductMenu] = useState(false);
  const [subProduct, setSubProduct] = useState(false);
  const [indexSubProduct, setIndexSubProduct] = useState(null);
  const [serchIcon, setserchIcon] = useState(false);
  const refInputSearchMobile = useRef();
  const refIconSearchMobile = useRef();
  const [value, setValue] = React.useState("react");

  const producets = productHead();
  const data = product;

  const subProductHandler = (id) => {
    if (subProduct === false || id === indexSubProduct) {
      setSubProduct((prev) => !prev);
    }

    setIndexSubProduct(id);
  };
  const showProductMenuhandler = () => {
    setshowProductMenu((prev) => !prev);
    setSubProduct(false);
  };

  const showMenuMobileHandler = (e) => {
    // e.stopPropagation()

    setMenu((prev) => !prev);
    setClippath((prev) => !prev);
    setshowLoginHint(false);
    setSubProduct(false);
    setshowProductMenu(false);
    setserchIcon(false);
  };
  const showLoginHintHandler = () => {
    // e.stopPropagation()
    setshowLoginHint((prev) => !prev);
  };

  useEffect(() => {
    let clickHandler = (e) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(e.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(e.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(e.target)
      ) {
        setshowProductMenu(false);
        setMenu(false);
        setClippath(false);
        setshowLoginHint(false);
        setSubProduct(false);
        // setserchIcon(false)
      }
    };

    document.addEventListener("mousedown", clickHandler);
    // return ()=>{document.removeEventListener("mousedown",clickHandler)}
  }, [menu]);

  const serchIconHandler = () => {
    setserchIcon((prev) => !prev);
    refInputSearchMobile.current.select();
  };
  return (
    <div className="bg-primaryColor h-16 fixed top-0 w-full  z-40  ">
      <div className="w-full h-16 flex">
        <div className="w-[30%] h-full flex  gap-x-1 pl-10 relative ">
          <div className="absolute  left-[10%] translate-x-[10%] top-[40%] translate-y-[-50%] ">
            <span className="font-[logo1] text-4xl font-bold text-whiteColor tracking-[.25rem]">
              MAJD
            </span>
          </div>
          <div className="absolute left-32 top-[65%] translate-y-[-50%] ">
            <span className="font-[logo2] text-5xl italic lowercase">shop</span>
          </div>
          {/* <span className='font-[logo]'>Majd</span> */}
        </div>



        <div className="w-[50%]  h-full  ">
          <ul className="w-full h-full flex justify-evenly items-center  ">
            <li className="w-1/5  h-full flexyRow"><Link href="" className="flexyRow h-1/2 w-full  font-semibold	hover:border-b  hover:border-b-black  hover:transition-all  hover:duration-500 ">menu one </Link></li>
            <li className="w-1/5  h-full flexyRow"><Link href="" className="flexyRow h-1/2 w-full  font-semibold	hover:border-b  hover:border-b-black  hover:transition-all  hover:duration-500 ">menu one </Link></li>
            <li className="w-1/5  h-full flexyRow"><Link href="" className="flexyRow h-1/2 w-full  font-semibold	hover:border-b  hover:border-b-black  hover:transition-all  hover:duration-500 ">menu one </Link></li>
            <li className="w-1/5  h-full flexyRow"><Link href="" className="flexyRow h-1/2 w-full  font-semibold	hover:border-b  hover:border-b-black  hover:transition-all  hover:duration-500 ">menu one </Link></li>
          </ul>
        
        </div>







        {/* icon user/////////////////////////////////////////////////// */}
        <div className='w-[20%]  h-full align-content:center flex items-center justify-end relative rounded' ref={userIconRef}><FaUser   onClick={(e)=>{showLoginHintHandler(e)}} className='bg-whiteColor w-7 h-7 p-1 rounded-full hover:scale-110 duration-100 cursor-pointer'/>
            <div className={` ${showLoginHint ? "opacity-100 top-16 max-h-auto overflow-hidden":"opacity-0 top-28 max-h-0 overflow-hidden"} absolute w-52 bg-primaryColor h-auto 	duration-200 -right-12  rounded overflow-hidden z-50 `}>
                <ul className='w-full  flex flex-col gap-[1px]  iconUser p-1 '>
                    <li className='w-full  text-center bg-whiteColor p-1 '>aaaa</li>
                    <li className='w-full  text-center bg-whiteColor p-1 '>aaaa</li>
                    <li className='w-full  text-center bg-whiteColor p-1 '>aaaa</li>
                    
                </ul>
            </div>


        </div>






        {/* icon menu///////////////////////////////////////////////////////////// */}
        <div
          className="w-[10%]  h-full align-content:center flex items-center justify-center"
          ref={menuIconRef}
        >
          {!menu ? (
            <TiThMenu
              onClick={(e) => {
                showMenuMobileHandler(e);
              }}
              className="bg-whiteColor w-10 h-10 p-2 rounded-full hover:scale-110 duration-100 cursor-pointer"
            />
          ) : (
            <TiTimes
              onClick={(e) => {
                showMenuMobileHandler(e);
              }}
              className="bg-whiteColor  w-10 h-10 p-2 rounded-full hover:scale-110 duration-100 cursor-pointer "
            />
          )}
        </div>










        
{/* accordion/////////////////////////////////// */}

<div    ref={accordionRef} className={`${!menu ? "translate-x-0 " : "-translate-x-full mt-[2px]  " } flex flex-col min-h-screen top-16  left-full absolute  z-40  w-[25%] transition-transform duration-700 ease-in-out	bg-transparent   overflow-auto`}>
            
            <div className= {` ${clippath ? "[clip-path:circle(150%_at_100%_0%)] " : " [clip-path:circle(0%_at_120%_-50%)] "} clipPath  absolute top-0 right-0 bg-primaryColor min-h-screen  overflow-auto box-border w-full flex duration-500 flex-col gap-y-1 p-1`} style={{direction:"rtl"}} >


{/* home/////////////////////////////////// */}

            <div className="bg-whiteColor rounded flexyRow pr-2 h-16">

<h4 className="hover:font-bold flex justify-start items-center flex-[.9] ">خانه</h4>
<h4 className="hover:font-bold flexyRow flex-[.1] text-xl"><IoHome/></h4>
</div>





{/* search//////////////////////////////////// */}

        
        <div className=' w-full bg-whiteColor rounded  pr-2' ref={userIconRef}>
            <div className={`  flexyRow w-full   h-16 	duration-200   rounded z-50`}>
                <input ref={refInputSearchMobile} style={{direction:"rtl"}} type="text" placeholder="" className={`transition-all  bg-white  border-2 border-darkColor	 rounded text-darkColor duration-500 text-md p-1 w-[90%] `}/>
                <FiSearch ref={refIconSearchMobile} className={` w-[10%] transform scale-125 ` } />
            </div>


        </div>



{/* range//////////////////////////////////////////// */}

             <div className=" flex-col gap-x-1 bg-whiteColor rounded flex items-center pr-2 rangrSlider">
              
<div className=" flex  h-4 justify-start items-center text-sm w-full">جستجو بر اساس محدوده قیمت</div>
<div className="h-12 w-full flexyRow" style={{direction:"ltr"}}>
    <h4 className="hover:font-bold flexyRow flex-[.1] text-xl"><PiSlidersHorizontalBold/></h4>
<MultiRangeSlider
className="flex-[.9]"
  min={0}
  max={1000}
  onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
/>

</div>
</div>






{/* sort/////////////////////////////////////////// */}

           <div className='w-full h-16 bg-whiteColor rounded flex items-center pr-2 py-2  mb-0 sortBox flexyRow' style={{direction:"rtl"}}>

           <div className="flex-[.9] text-darkColor colorSelect">
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
<h4 className="hover:font-bold flexyRow flex-[.1] text-xl"><FaSortAlphaDown/></h4>


           </div>






{/* produce////////////////////////////////////////////// */}

<div className='bg-whiteColor rounded  min-h-16 flex items-start justify-center flex-col hover:font-bold pr-2' >
    <div className="flexyRow w-full">

    <h4 className='hover:font-bold flex justify-start items-center flex-[.9] ' onClick={showProductMenuhandler}>فروشگاه</h4>
    <h4 className="hover:font-bold flexyRow flex-[.1] text-xl"><FaCartShopping/></h4>

    </div>
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
                    <div    className={` overflow-hidden  px-2 ${
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
<div className="bg-whiteColor rounded flexyRow pr-2 h-16">

<h4 className="hover:font-bold flex justify-start items-center flex-[.9] ">بلاگ</h4>
<h4 className="hover:font-bold flexyRow flex-[.1] text-xl"><TbLogs/></h4>
</div>


{/* about as////////////////////////////////////////////// */}
<div className="bg-whiteColor rounded flexyRow pr-2 h-16 mb-20">

<h4 className="hover:font-bold flex justify-start items-center flex-[.9] ">درباره ما</h4>
<h4 className="hover:font-bold flexyRow flex-[.1] text-xl">< FaInfoCircle/></h4>
</div>


            </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
