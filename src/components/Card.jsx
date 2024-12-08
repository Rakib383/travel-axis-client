import { FaFlag } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";

export const Card = ({ visa }) => {


    const {_id, Countryname, Visa_type, Processing_time, Fee, icon_img } = visa
    return (
        <div className="card bg-base-100 w-[280px] shadow-xl dark:text-black mx-1 min-h-[354px] justify-end ">
            <div className="relative   ">
                <img
                    src={icon_img}
                    alt="Shoes" className="rounded-tr-xl h-40 w-full rounded-tl-xl " />
                <div className="absolute bottom-4 left-1 bg-gray-100/80 rounded-md text-Pink px-2  text-b font-bold ">

                    <h3 className="capitalize" >{Countryname}</h3>
                </div>
            </div>
            <div className="card-body justify-end p-4 pb-5 pt-3  ">
                
                    <h2 className="flex items-start ">
                        <FaFlag className="text-sm  mr-2" />
                        <span className="font-bold capitalize text-sm">Country : {Countryname}</span>

                    </h2>
                    <div className="text-sm  flex shrink-0 flex-wrap">
                        <p className="flex items-center " ><FaPassport className="mr-2" />Visa type: {Visa_type}</p>
                        <p className="flex items-center " ><FaDollarSign />Fee: {Fee}</p>
                    </div>
                    <div className="text-sm  flex shrink-0 flex-wrap">
                        <p className="flex items-center " ><IoMdTime className="mr-2" />Processing Time:  {Processing_time}</p>

                    </div>

                <Link to={`/visas/${_id}`} className="btn mt-2 bg-Pink text-white hover:outline outline-Pink hover:text-black hover:bg-white">See Details</Link>
            </div>
        </div>
    )
}
