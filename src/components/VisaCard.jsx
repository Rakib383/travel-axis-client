import { FaFlag } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FcProcess } from "react-icons/fc";

export const VisaCard = ({ visa }) => {
    const { Countryname, Countryimage, Visa_type, Processing_time, Fee, Validity, Application_method, icon_img,_id } = visa
    return (
        <div className="card bg-base-100 w-[320px] shadow-xl dark:text-black mx-1">
            <div className="relative  ">
                <img
                    src={icon_img}
                    alt="Shoes" className="rounded-tr-xl h-40 w-full rounded-tl-xl " />
                <div className="absolute bottom-4 left-1 bg-gray-100/80 rounded-md text-Pink px-2  text-b font-bold ">

                    <h3>{Countryname}</h3>
                </div>
            </div>
            <div className="card-body p-6">
                <img src={Countryimage} className="w-16 h-8 mx-auto" alt="" />

                <h2 className="flex items-start ">
                    <FaFlag className="text-sm  mr-2" />
                    <span className="font-bold text-sm">Country : {Countryname}</span>

                </h2>
                <div className="text-sm  flex shrink-0 flex-wrap">
                    <p className="flex items-center " ><FaPassport className="mr-2" />Visa type: {Visa_type}</p>
                    <p className="flex items-center " ><FaDollarSign />Fee: {Fee}</p>
                </div>
                
                    <p className="flex text-sm items-center " ><IoMdTime className="mr-2" />Processing Time:  {Processing_time}</p>

              

                    <p className="flex text-sm items-center " ><FcProcess className="mr-2" />Application Method: {Application_method}</p>                   

              

                <p className="flex items-center text-sm " ><GrValidate className="mr-2" />Validity: {Validity}</p>

                <Link to={`visas/${_id}`} className="btn mt-2 bg-Pink text-white hover:outline outline-Pink hover:text-black hover:bg-white">See Details</Link>
            </div>
        </div>
    )
}
