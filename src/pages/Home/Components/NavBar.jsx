import { NavLink } from "react-router-dom"
import date from "../../../assets/icons/date.png"

const NavBar = () => {
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
            <div className="w-[120px] h-full fixed top-4 right-2 flex-col justify-start items-center gap-6 flex md:hidden">
                {
                    navLinks.map((navlink, idx) => {
                        return (
                            <NavLink to={navlink?.path} key={idx}>
                                <h4 className="text-xl transition-[0.4s] hover:transition-[0.4s] hover:text-orange-500 ">{navlink?.name}</h4>
                            </NavLink>
                        )
                    })
                }
            </div>

        </div>
      
    </div>
  )
}

export default NavBar
