import { useLoaderData, useNavigate } from "react-router-dom"
import { FaFlag } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import { MdOutlineDescription } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { IoDocumentsOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import moment from "moment";
import Swal from 'sweetalert2'


export const VisaDetailsPage = () => {
    const visa = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const { Countryname, Countryimage, Visa_type, Processing_time, Fee, Validity, Application_method, Required_documents, Description, Age_restriction } = visa



    const handleApplyVisa = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const FirstName = e.target.FirstName.value
        const LastName = e.target.LastName.value
        const Applied_date = e.target.Applied_Data.value
        const visaApplicationInfo = {
            Countryname, Countryimage, Visa_type, Processing_time, Fee, Validity, Application_method, email, FirstName, LastName, Applied_date
        }
        fetch('http://localhost:5000/applyVisa', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visaApplicationInfo)
        })
            .then(res => {
                res.json()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Visa added successfully",
                    showConfirmButton: true,

                }).then(result => {
                    if(result.isConfirmed) {
                        navigate("/")
                    }
                })
            }
            )
            .then(data => {

                console.log(data)
               
            }
            )
            .catch(err => console.log(err))




    }

    return (

        <div className="space-y-2 text-center px-3">
            <h1 className="font-black mt-7 text-sky-400 sm:text-lg">Comprehensive Visa Information</h1>
            <p className="px-4 text-gray-600 dark:text-gray-400 pt-1 text-[15px] sm:w-[420px] mx-auto pb-6">Get a complete overview of the requirements, validity, and application process for this visa.</p>

            <div className="card bg-base-100 w-[320px] sm:w-[380px] shadow-xl dark:text-black  mx-auto" >
                <div className="card-body p-6">
                    <img src={Countryimage} className="w-16 mx-auto" alt="" />

                    <h2 className="flex items-start ">
                        <FaFlag className="text-sm  mr-2" />
                        <span className="font-bold text-sm">Country : {Countryname}</span>

                    </h2>
                    <div className="text-sm  flex shrink-0 flex-wrap">
                        <p className="flex items-center " ><FaPassport className="mr-2" />Visa type: {Visa_type}</p>
                        <p className="flex items-center " ><FaDollarSign />Fee: {Fee}</p>
                    </div>

                    <div className="w-full flex items-start ">
                        <p className="text-sm w-2/5 flex shrink-0 flex-wrap items-center " ><MdOutlineDescription className="mr-2" />Description: </p>
                        <p className="text-sm w-3/5 text-start " >{Description}</p>
                    </div>

                    <p className="text-sm  flex  items-center " ><IoMdTime className="mr-2" />Processing Time:  {Processing_time}</p>

                    <p className=" text-sm  flex shrink-0 flex-wrap items-center " ><FcProcess className="mr-2" /> Application Method: {Application_method}</p>
                    <p className="flex items-center text-sm " ><GrValidate className="mr-2" />Validity: {Validity}</p>
                    <p className="flex items-center text-sm " ><FaChild className="mr-2" />Age Restriction: {
                        Age_restriction == 0 ? "none" : `${Age_restriction}+ only`

                    }</p>

                    <div>
                        <p className="flex items-center text-sm gap-2"> <IoDocumentsOutline />Required Documents:</p>
                        <div className="flex flex-col items-start ml-5 text-sm " >
                            {
                                Required_documents.map((doc, i) => <li key={i} className="">{doc}.</li>)
                            }
                        </div>
                    </div>


                    <button onClick={() => document.getElementById('apply_modal').showModal()} className="btn mt-2 bg-Pink text-white hover:outline outline-Pink hover:text-black hover:bg-white">Apply For The Visa</button>
                </div>
            </div>


            <dialog id="apply_modal" className="modal  modal-bottom sm:modal-middle">
                <form onSubmit={handleApplyVisa} className="modal-box w-[320px] bg-white mx-auto mt-12 sm:w-[440px] text-start ">
                    <h2 className="text-Pink text-xl  mt-6 md:text-2xl text-center mb-8 sm:mb-12 font-bold underline underline-offset-8 ">Visa Application Form</h2>
                    <div className="grid gap-6 mb-6 sm:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" readOnly value={user?.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> FirstName</label>
                            <input type="text" name="FirstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
                            <input type="text" name="LastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee</label>
                            <input readOnly value={`$ ${Fee}`} name="Fee" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>

                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Applied Data</label>
                        <input type="text" readOnly value={moment().format('LL')} name="Applied_Data" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <button onClick={() => document.getElementById('apply_modal').close()} id="closeModal" type="submit" className="text-white bg-Pink    focus:ring-blue-300  rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-Pink hover:bg-white hover:outline  outline-Pink hover:text-black dark:hover:bg-white font-bold">Apply</button>
                </form>
            </dialog>




        </div>
    )
}

