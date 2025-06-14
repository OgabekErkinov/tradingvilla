import { NavLink } from "react-router-dom"
import date from "../../../assets/icons/date.png"
import { useState } from "react"
import { TfiMenu } from "react-icons/tfi"

const NavBar = () => {
    const [ isMenu, setIsMenu ] = useState(false)
    const navLinks = [
        {
            name : 'Home', path : '/'
        },
        {
            name : 'Properties', path : '/properties'
        },
        {
            name : 'Property details', path : '/details'
        },
        {
            name : 'Contact Us', path : '/contact'
        }
    ]
  return (
    <div className="h-[90px] w-full px-8">
        <div className="w-full h-full flex justify-between items-center">

            {/* main site icon */}
            <div className="w-[30%] h-[80px] text-left flex items-center">
                <h2 className="font-bold text-2xl md:text-3xl">VILLA</h2>
            </div>

            {/* navlinks */}
            <div className="w-full h-[80px] justify-end items-center gap-6 hidden md:flex">
                {
                    navLinks.map((navlink, idx) => {
                        return (
                            <NavLink to={navlink?.path} key={idx}>
                                <h4 className="text-md lg:text-xl transition-[0.4s] hover:transition-[0.4s] hover:text-orange-500 ">{navlink?.name}</h4>
                            </NavLink>
                        )
                    })
                }
                <div className="bg-black h-[30px] w-[130px] rounded-[16px] flex justify-between items-center">
                    <div className="h-full w-[30px] flex justify-center items-center bg-[#F35525] rounded-[16px]">
                        <img src= { date } alt="date icon" />
                    </div>
                    <p className="w-[100px] text-xs text-white"> Schedule a visit</p>

                </div>
            </div>

            {/* mobile menu */}
             <TfiMenu
          className="text-[#F35525] text-2xl block md:hidden cursor-pointer"
          onClick={() => setIsMenu((prev) => !prev)}
        />

        {/* Mobile menu dropdown */}
       <div className={`absolute w-36 pl-2 top-[100px] right-4 z-50
                      bg-black/50 rounded-xl flex flex-col items-start 
                        justify-evenly gap-4 md:hidden transition-all duration-300
                      ${isMenu ? "opacity-100 visible" : "opacity-0 invisible"} `}
>
          {navLinks.map((navlink, idx) => (
            <NavLink
              to={navlink.path}
              key={idx}
              onClick={() => setIsMenu(false)}
              className={({ isActive }) =>
                `h-8 w-full text-start p-2 text-lg  transition duration-300 hover:text-orange-500 ${
                  isActive ? "text-orange-500 font-semibold" : "text-white"
                }`
              }
            >
              {navlink.name}
            </NavLink>
          ))}
        </div>


        </div>
      
    </div>
  )
}

export default NavBar
