
"use client"

import HeaderDesktop from "./HeaderDesktop"
import HeaderMobile from "./HeaderMobile"

const Header = () => {
    
  return (
    <>
    <div className="md:hidden font-[vazir]">
    <HeaderMobile />
    </div>
    <div className="hidden md:block font-[vazir]">
    <HeaderDesktop/>
    </div>
    </>
     )
}

export default Header