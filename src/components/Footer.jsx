import logo from "../assets/images/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaRegMessage } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
export const Footer = () => {
    return (
        <div className="bg-base-200 dark:bg-black mt-20">
            <footer className="flex flex-col gap-5 items-center justify-center  md:flex-row  max-w-6xl mx-auto  px-4 py-10">
                <div className="md:w-1/2 mx-auto">
                    <div className="flex items-end md:justify-start  justify-center gap-1">
                        <img src={logo} className="w-12" alt="" />
                        <p className="font-bold text-lg">
                            Travel Axis
                        </p>

                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start gap-1">
                        <h6 className="font-semibold ">Simplifying Your Visa Journey</h6>
                        <p className="flex gap-1 "><FaLocationDot />Progati Sarani, Merul Badda, Dhaka 1212.</p>
                        <p className="flex gap-1 "><TfiHeadphoneAlt /> +(880)445-3694</p>
                        <p className="flex gap-1 "><FaRegMessage />TravelAxis@gmail.com</p>
                        <div className="flex gap-2 items-center" >
                            <p>Follow us:</p>
                            <div className="flex text-lg gap-3">
                                <FaXTwitter className="text-Pink cursor-pointer" /> <FaLinkedin className="text-Pink cursor-pointer"/> <FaFacebook className="text-Pink cursor-pointer" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex mt-2   gap-8 md:w-2/3  justify-evenly">
                    <nav className="flex flex-col items-center md:items-start">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Book an appointment</a>
                        <a className="link link-hover">Meet Expert</a>
                        <a className="link link-hover">Testimonial</a>
                        <a className="link link-hover">All Visas</a>
                        <a className="link link-hover">Terms of Service</a>
                    </nav>

                    <nav className="flex flex-col items-center md:items-start">
                        <h6 className="footer-title">Visa</h6>
                        <a className="link link-hover">Residence Visa</a>
                        <a className="link link-hover">Student Visa</a>
                        <a className="link link-hover">Business Visa</a>
                        <a className="link link-hover">Medical Visa</a>
                        <a className="link link-hover">Work Visa</a>
                    </nav>
                </div>
            </footer>

            <p className="text-gray-400 pt-4  text-center pb-4"> Copyright &copy; {new Date().getFullYear()} - All rights reserved</p>
        </div>
    )
}
