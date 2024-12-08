
import { FaFlag } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import { FcProcess } from "react-icons/fc";
import Swal from "sweetalert2";
import { useState } from "react";
import { Checkbox, Label } from "flowbite-react";

export const EntryCard = ({ visa }) => {

    

    

    const { _id, Countryname, Countryimage, Visa_type, Processing_time, Fee, Validity, Application_method,Age_restriction,Required_documents,Description,icon_img,visaCreator } = visa

    const [visaType, setVisaType] = useState("")
    const [documents, setDocuments] = useState([])



    const handleVisaTypeChange = (e) => {
        setVisaType(e.target.value);


    }

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setDocuments([...documents, value]); // Add value if checked
        } else {
            setDocuments(documents.filter((doc) => doc !== value)); // Remove value if unchecked
        }
    };


    const handleUpdateVisa = (e) => {
        e.preventDefault()
        const form = e.target

        const Countryname = e.target.Countryname.value
        const Countryimage = e.target.Countryimage.value
        const icon_img = e.target.icon_img.value
        const Visa_type = visaType
        const Processing_time = e.target.Processing_time.value
        const Required_documents = documents
        const Description = e.target.Description.value
        const Age_restriction = e.target.Age_restriction.value
        const Fee = e.target.Fee.value
        const Validity = e.target.Validity.value
        const Application_method = e.target.Application_method.value


        const updateVisa = { Countryname, Countryimage, icon_img, Visa_type, Processing_time, Required_documents, Description, Age_restriction, Fee, Validity, Application_method,visaCreator }


        fetch(`http://localhost:5000/visas/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateVisa)
        })
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Visa updated successfully",
                    showConfirmButton: true,

                });
                form.reset()

                return res.json()
            })
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

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

                fetch(`http://localhost:5000/addedVisas/${_id}`, {
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

        <div>

            <div className="card bg-base-100 w-[320px] shadow-xl dark:text-black " >
                <div className="card-body p-6">
                    <img src={Countryimage} className="w-16 mx-auto mb-2" alt="" />

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


                    <div className="grid grid-cols-2 gap-8 sm:gap-9">

                        <button onClick={() => document.getElementById(`${_id}`).showModal()} className="btn mt-2 bg-sky-400 text-white hover:outline outline-Pink hover:text-black hover:bg-white">Update</button>
                        <button onClick={() => handleVisaDelete(_id)} className="btn mt-2 bg-Pink text-white hover:outline outline-Pink hover:text-black hover:bg-white">Delete</button>

                    </div>


                </div>



            </div>



            {/* update visa modal */}
            <dialog id={`${_id}`} className="modal  modal-bottom sm:modal-middle">
                <form onSubmit={ handleUpdateVisa} className=" modal-box w-[320px] bg-white mx-auto mt-12 sm:w-[480px] text-start ">
                    <h2 className="text-Pink text-xl  md:text-2xl text-center mb-8 sm:mb-12 font-bold underline underline-offset-8 ">Update Visa</h2>
                    <div className="grid gap-6 mb-6 sm:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country Name</label>
                            <input defaultValue={Countryname} type="text" name="Countryname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country Image</label>
                            <input defaultValue={Countryimage} type="text" name="Countryimage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ImageURL" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visa Type</label>
                            <select defaultValue={Visa_type} onChange={handleVisaTypeChange} className="select select-bordered w-full h-[42px]  min-h-[42px] dark:bg-gray-700">

                                <option value="" hidden>
                                    Select
                                </option>
                                <option value="tourist">Tourist Visa</option>
                                <option value="student">Student Visa</option>
                                <option value="business">Business Visa</option>
                                <option value="medical">Medical Visa</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Processing Time</label>
                            <input defaultValue={Processing_time} type="text" name="Processing_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age Restriction</label>
                            <input defaultValue={Age_restriction} type="number" name="Age_restriction" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee</label>
                            <input type="number" defaultValue={Fee} name="Fee" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Validity</label>
                            <input defaultValue={Validity} name="Validity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Method</label>
                            <input defaultValue={Application_method} name="Application_method" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="online/in-person" required />
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sm:mb-5">Required Documents</label>
                        <div className="flex max-w-md flex-col gap-4" id="checkbox">
                            <div className="flex gap-4 flex-col sm:flex-row sm:gap-16 ">
                                <div className="flex items-center gap-2 ">
                                    <Checkbox defaultChecked={Required_documents.includes("valid passport")} value="valid passport" onChange={handleCheckboxChange} />
                                    <Label htmlFor="accept" className="flex">
                                        Valid Passport
                                    </Label>
                                </div>
                                <div className="flex sm:ml-2.5 items-center gap-2">
                                    <Checkbox defaultChecked={Required_documents.includes("Visa application form")} value="Visa application form" onChange={handleCheckboxChange} />
                                    <Label htmlFor="accept" className="flex">
                                        Visa application form
                                    </Label>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col sm:flex-row sm:gap-14">
                                <div className="flex items-center gap-2">
                                    <Checkbox defaultChecked={Required_documents.includes("Bank statements")} value="Bank statements" onChange={handleCheckboxChange} />
                                    <Label htmlFor="accept" className="flex">
                                        Bank statements
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox defaultChecked={Required_documents.includes("Travel itinerary")} value="Travel itinerary" onChange={handleCheckboxChange} />
                                    <Label htmlFor="accept" className="flex">
                                        Travel itinerary
                                    </Label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" defaultValue={Description} name="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Icon Image(For Card UI )</label>
                        <input defaultValue={icon_img} name="icon_img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ImageURL" required />
                    </div>

                    <button onClick={() => document.getElementById(`${_id}`).close()} id="closeModal" type="submit" className="text-white bg-Pink   focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-Pink hover:bg-white hover:outline  outline-Pink hover:text-black dark:hover:bg-white font-bold">Update Visa</button>
                </form>
            </dialog>
        </div>
    )
}
