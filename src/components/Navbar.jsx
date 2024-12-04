import { Link, NavLink } from "react-router-dom"
import travelLogo from "../assets/images/travel-logo2.jpg"
import { IoMenu } from "react-icons/io5"


export const Navbar = () => {
    return (
        <div className="navbar max-w-7xl bg-base-100 mb-44 sm:px-5 mt-1 md:mt-4 mx-auto">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn pl-1 pr-0.5 btn-ghost lg:hidden hover:bg-white">
                        <IoMenu className="text-2xl sm:text-3xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-52 p-2 shadow">
                        <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                        <NavLink to="/learn" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">All Visas</NavLink>
                        <NavLink to="/tutorials" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Visa</NavLink>
                        <NavLink to="/about" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My added Visas</NavLink>
                        <NavLink to="/about" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My Visa Application</NavLink>

                    </ul>
                </div>
                <div className="hidden lg:flex items-end">
                    <img className="w-20" src={travelLogo} alt="" />
                    <Link className="font-bold text-lg  text-sky-400  mr-5">Travel-Axis</Link>
                </div>
            </div>

            <div className="navbar-center ">
                <ul className=" hidden lg:flex gap-2 xl:gap-4 font-bold ">
                    <NavLink to="/" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Home</NavLink>
                    <NavLink to="/learn" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">All Visas</NavLink>
                    <NavLink to="/tutorials" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">Add Visa</NavLink>
                    <NavLink to="/about" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My added Visas</NavLink>
                    <NavLink to="/about" className="px-2.5 py-1.5   hover:text-white rounded-md hover:bg-gray-400">My Visa Application</NavLink>

                </ul>
                <div className="lg:hidden flex items-end">
                    <img className="w-16 sm:w-20" src={travelLogo} alt="" />
                    <Link className="font-bold  sm:text-lg text-sky-400 mr-3">Travel-Axis</Link>
                </div>
            </div>

            <div className="navbar-end">

                <div className="flex gap-2 items-center">
                    <button className="px-3 h-10 bg-[#ff6392] text-white font-bold rounded-lg hover:text-[#ff6392] hover:outline outline-[#ff6392] hover:bg-white text-sm
                      ">
                        Login
                    </button>
                    <button className="px-3 h-10 bg-[#ff6392] text-white font-bold rounded-lg hover:text-[#ff6392] hover:outline outline-[#ff6392] text-sm hover:bg-white 
                      ">
                        Register
                    </button>
                </div>
                <div className="hidden">
                    <img src="" alt="" />
                    <button>Logout</button>
                </div>



            </div>
        </div>
    )
}
