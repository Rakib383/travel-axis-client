
import slide1 from "../assets/images/slide1.jpg"
import slide3 from "../assets/images/slide-4.jpg"
import slide4 from "../assets/images/slide3.jpg"
import slide5 from "../assets/images/slide5.jpeg"
import { Carousel } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa";


export const Header = () => {
    return (
        <div className="h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]  mb-5 relative">
            <Carousel >
                <div className="flex h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={slide1} className=" h-full w-full" alt="" />
                </div>
                <div className="flex h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={slide4} className=" h-full w-full" alt="" />
                </div>
                <div className="flex h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={slide3} className=" h-full w-full" alt="" />
                </div>
                <div className="flex h-full w-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src={slide5} className=" h-full w-full" alt="" />
                </div>
            </Carousel>

            <div className=" w-[350px] sm:w-[430px] lg:w-[560px] bg-gray-100 bg-opacity-80 rounded-lg  px-3 py-2 pb-5 absolute bottom-4 sm:bottom-16 left-1/2 -translate-x-1/2">
                <div className="flex gap-1 justify-center w-full items-center">
                    <div className="w-full flex flex-col">
                        <label className="label">
                            <span className="label-text font-bold ml-2">Where am i from?</span>
                        </label>
                        <input type="email" placeholder="Bangladesh-BD" className="input w-11/12 mx-auto  h-11 input-bordered text-sm" required />
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="label ">
                            <span className="label-text font-bold ml-2 ">Where am i going?</span>
                        </label>
                        <input type="email" placeholder="Traveling to" className="input w-11/12 mx-auto  h-11 input-bordered text-sm" required />
                    </div>
                </div>
                <button className="flex items-center justify-center py-2.5 rounded-md w-[310px] sm:w-[390px] lg:w-[510px] font-bold text-white mt-4  bg-[#ff6392] mx-auto hover:text-[#ff6392] hover:outline outline-[#ff6392] hover:bg-white">Get Started!<FaArrowRight className="ml-1" /></button>
            </div>
        </div>
    )
}
