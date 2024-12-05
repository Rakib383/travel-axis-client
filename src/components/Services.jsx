import { Typewriter } from 'react-simple-typewriter'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import tour from "../assets/images/tour2.jpg"
import work from "../assets/images/work.jpg"
import bussiness from "../assets/images/Business-visitor-visa.jpg"
import medical from "../assets/images/Medical-visa-1.jpg"
import student from "../assets/images/student.jpeg"
import { Link } from 'react-router-dom';

export const Services = () => {
    const words = ['Business Visa', 'Student Visa', 'Work Visa', 'Tourist Visa', 'Medical Visa']
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 800,
        rows: 1,
        slidesPerRow: 1,
        autoplay: true
    };
    return (
        <div>
            <div className="text-center mt-16">
                <h3 className="font-bold text-lg md:text-xl capitalize text-Pink border-b-4 border-sky-400/20 w-52 mx-auto">Services we Provide</h3>
                <div className="flex justify-center items-center gap-1 font-bold mt-4">
                    <h4 >Explore Our</h4>
                    <span className='text-xl md:text-2xl font-bold text-sky-400'> <Typewriter loop={0} words={words} /></span>
                </div>
                <h5>& Immigration Services</h5>

            </div>
            {/* All visa Slide */}
            <div className='mt-10 w-[440px] md:w-[540px] mx-auto space-x-5'>
                <Slider {...settings} >
                    <div className=''>
                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl ">
                            <div className="card-body p-6 text-center">
                                <h2 className="text-lg font-semibold ">Business Visa </h2>
                                <p className='text-gray-600 '>Facilitates seamless entry for attending business meetings, conferences, or exploring investment opportunities abroad. <Link className=' text-Pink'>See Details....</Link></p>
                               
                            </div>
                            <figure>
                                <img className='h-[180px] md:h-[220px] w-full '
                                    src={bussiness}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl ">
                            <div className="card-body p-6 text-center">
                                <h2 className="text-lg  font-semibold ">Student Visa </h2>
                                <p className='text-gray-600 '>Empowers students to pursue educational opportunities at renowned institutions in foreign countries.<Link className=' text-Pink'>See Details....</Link></p>
                            </div>
                            <figure>
                                <img className='h-[180px] md:h-[220px] w-full'
                                    src={student}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl ">
                            <div className="card-body p-6 text-center">
                                <h2 className="text-lg font-semibold ">Work Visa</h2>
                                <p className='text-gray-600 '>Provides authorization to work and contribute professionally in another country with legal employment rights.<Link className=' text-Pink'>See Details....</Link></p>
                            </div>
                            <figure>
                                <img className='h-[180px] md:h-[220px] w-full'
                                    src={work}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl ">
                            <div className="card-body p-6 text-center">
                                <h2 className="text-lg font-semibold ">Tourist Visa</h2>
                                <p className='text-gray-600 '>Allows travelers to explore and experience the culture, landmarks, and attractions of their desired destination.<Link className=' text-Pink'>See Details....</Link></p>
                            </div>
                            <figure>
                                <img className='h-[180px] md:h-[220px] w-full' 
                                    src={tour}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="card bg-base-100 w-80 md:w-96 shadow-xl ">
                            <div className="card-body p-6 text-center">
                                <h2 className="text-lg font-semibold ">Medical Visa</h2>
                                <p className='text-gray-600 '>Enables individuals to access advanced medical treatments and healthcare facilities in foreign countries.<Link className=' text-Pink'>See Details....</Link></p>
                            </div>
                            <figure>
                                <img className='h-[180px] md:h-[200px] w-full'
                                    src={medical}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
