import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export const RootLayout = () => {
    return (
        <div className="dark:bg-black dark:text-white">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
