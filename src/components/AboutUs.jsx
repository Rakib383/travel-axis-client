
import { FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    return (
        <div className='text-center mt-10 md:mt-16 '>
            <h3 className='font-bold text-lg mb-4 sm:text-xl  md:text-2xl '>Why choose us?</h3>
            <p className='px-4 sm:w-[490px] mx-auto'>From visa applications to tracking your status, TravelAxis is here to guide you every step of the way. Explore the world with confidence, knowing we’ve got you covered.</p>
            <div data-aos="fade-right">

                <div className='mt-10 flex gap-6 flex-col sm:flex-row flex-wrap justify-center items-center max-w-2xl mx-auto'>
                    {/* cards */}
                    <div className="card bg-sky-200 w-72 shadow-xl mx-auto ">
                        <div className="card-body items-center justify-center">
                            <FaClock className='text-xl' />
                            <h4 className='font-bold'>Fast and hassle-free</h4>
                            <p className='text-gray-600'>Streamlined visa application processes ensure simplicity and ease of use for all travelers.</p>
                        </div>
                    </div>
                    <div className="card bg-lime-500/50 dark:bg-lime-500/80 w-72 shadow-xl mx-auto ">
                        <div className="card-body items-center justify-center">
                            <FaBook className='text-xl' />
                            <h4 className='font-bold'>Comprehensive Guidance</h4>
                            <p className='text-gray-700 '>Provides detailed information about visa requirements for various countries and visa types.</p>
                        </div>
                    </div>
                    <div className="card bg-amber-500/40 dark:bg-amber-500/80 w-72 h-56 shadow-xl mx-auto ">
                        <div className="card-body items-center justify-center">
                            <FaMobileAlt className='text-xl' />
                            <h4 className='font-bold '>Real-Time Tracking</h4>
                            <p className='text-gray-700'>Track your visa application status in real-time, keeping you informed every step of the way.</p>
                        </div>
                    </div>
                    <div className="card bg-emerald-400/50 dark:bg-emerald-400/80 w-72 shadow-xl mx-auto ">
                        <div className="card-body items-center justify-center">
                            <FcApproval className='text-2xl ' />
                            <h4 className='font-bold'>Get Approved</h4>
                            <p className='text-gray-600 '>With a 98% visa approval success rate, TravelAxis ensures your application is accurate and streamlined.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
