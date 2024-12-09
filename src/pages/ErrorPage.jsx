
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaFaceSadTear } from "react-icons/fa6";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-3 md:gap-5 items-center h-screen justify-center mx-4 text-center">
            <img src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg" alt="" />
            <h1 className="font-bold text-lg flex">We're sorry,<FaFaceSadTear className="text-2xl text-sky-400 mx-2" /></h1>
            <h2 className="font-bold text-lg flex"> the page you're looking for can't be found.</h2>
            <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Go back to the</p>
                <Link to="/"><button className="btn bg-sky-400 text-white underline hover:text-black"><FaArrowAltCircleLeft className="text-xl" />HomePage</button></Link>
                
            </div>
        </div>
    )
}
