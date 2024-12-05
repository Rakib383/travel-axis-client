import { Link, NavLink } from "react-router-dom"
import travelLogo from "../assets/images/logo.png"
import { IoMenu } from "react-icons/io5"
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { MdDarkMode } from "react-icons/md";

export const Navbar = () => {

    const [isLight, setIsLight] = useState(true)

    const handleDarkMode = () => {
        setIsLight(!isLight)
        const htmlTag = document.documentElement
        if (!isLight) {
            return htmlTag.classList.remove('dark')
        }
        htmlTag.classList.add('dark')
    }
    return (
        <div className="navbar  max-w-7xl sm:px-5 md:pt-4 mx-auto mb-2">
            <div className="navbar-start ">
                <div className="dropdown lg:hidden ">
                    <div tabIndex={0} role="button" className="btn pl-1 pr-0.5 btn-ghost lg:hidden hover:bg-white dark:hover:bg-black">
                        <IoMenu className="text-2xl sm:text-3xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dark:bg-gray-800 bg-gray-100 menu menu-sm dropdown-content  rounded-box z-[1] mt-1 w-52 p-2 shadow">
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">All Visas</NavLink>
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Visa</NavLink>
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My added Visas</NavLink>
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My Visa Application</NavLink>

                    </ul>
                </div>
                <div className="hidden  lg:flex items-end">
                    <img className="w-20" src={travelLogo} alt="" />
                    <Link className="font-bold text-lg  text-sky-400  mr-5">Travel-Axis</Link>
                </div>
            </div>

            <div className="navbar-center ">
                <ul className=" hidden lg:flex gap-2 xl:gap-4 font-bold ">
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">All Visas</NavLink>
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Visa</NavLink>
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My added Visas</NavLink>
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My Visa Application</NavLink>

                </ul>
                <div className="lg:hidden flex items-end">
                    <img className="w-12 sm:w-20" src={travelLogo} alt="" />
                    <Link className="font-bold text-sm sm:text-lg text-sky-400 mr-3">Travel-Axis</Link>
                </div>
            </div>

            <div className="navbar-end">

                {
                    isLight ? <CiLight onClick={handleDarkMode} className="text-lg sm:text-2xl shrink-0 mx-1 mr-2 sm:mr-6 hover:cursor-pointer" /> : <MdDarkMode onClick={handleDarkMode} className="text-lg hover:cursor-pointer sm:text-2xl shrink-0 mx-1 mr-2 sm:mr-6 " />
                }
                <div className="flex gap-2 sm:gap-4 items-center">
                    <Link className="px-3 py-2 bg-[#ff6392] text-white font-bold rounded-lg hover:text-[#ff6392] hover:outline outline-[#ff6392] hover:bg-white text-sm
                      ">
                        Login
                    </Link>
                    <Link className="px-3 py-2 bg-[#ff6392] text-white font-bold rounded-lg hover:text-[#ff6392] hover:outline outline-[#ff6392] text-sm hover:bg-white 
                      ">
                        Register
                    </Link>
                </div>
                <div className="hidden">
                    <img src="" alt="" />
                    <Link to="/">Logout</Link>
                </div>

            </div>
        </div>
    )
}
