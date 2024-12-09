
import { FaFlag } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import Swal from "sweetalert2";


export const ApplicationCard = ({ visa }) => {




    const { _id, Countryname, Countryimage, Visa_type, Processing_time, Fee, Validity, Application_method, email, FirstName, LastName, Applied_date } = visa

    const handleVisaDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://travel-axis-server.vercel.app/visas/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });


    }
    return (

        <div className="card bg-base-100 w-[340px] sm:w-[360px] shadow-xl dark:text-black  " >
            <div className="card-body p-6">
                <img src={Countryimage} className="w-16 mx-auto mb-2" alt="" />
                <div className="flex text-sm font-bold justify-start flex-nowrap gap-2 items-start " >

                    <div className="flex w-44 items-center gap-2 flex-nowrap">
                        <FaRegUserCircle />
                        Applicant's name:
                    </div>

                    <div className="text-wrap sm:text-nowrap">
                        {`${FirstName} ${LastName}`}
                    </div>

                </div>

                <div className="flex text-sm text-start  justify-start flex-nowrap gap-2 items-start " >

                    <div className="flex w-44 items-center gap-2 flex-nowrap">
                        <MdMarkEmailRead />
                        Applicant’s email:
                    </div>

                    <div className="text-wrap sm:text-nowrap">
                        {email}
                    </div>

                </div>


                <div className="text-sm  flex shrink-0 flex-wrap">
                    <p className="flex items-center " ><FaPassport className="mr-2" />Visa type: {Visa_type}</p>
                    <p className="flex items-center " ><FaDollarSign />Fee: {Fee}</p>
                </div>
                <h2 className="flex items-start ">
                    <FaFlag className="text-sm  mr-2" />
                    <span className=" text-sm">Country : {Countryname}</span>

                </h2>

                <p className="flex items-center text-sm " ><GrValidate className="mr-2" />Validity: {Validity}</p>
                <p className="text-sm  flex  items-center " ><IoMdTime className="mr-2" />Processing Time:  {Processing_time}</p>


                <p className=" text-sm  flex shrink-0 flex-wrap items-center " ><FcProcess className="mr-2" /> Application Method: {Application_method}</p>
                <p className="flex items-center text-sm gap-2 " ><MdOutlineDateRange />Applied Date: {Applied_date}</p>
                <p className="flex items-center text-sm gap-2" ><GrStatusUnknown />Status: <span className="font-bold">Pending...</span></p>



                <button onClick={() => handleVisaDelete(_id)} className="btn mt-2 bg-Pink text-white hover:outline outline-Pink hover:text-black hover:bg-white">Cancel</button>
            </div>
        </div>

    )
}
