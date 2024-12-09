import { Checkbox, Label } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'


export const AddVisaPage = () => {

    const [visaType, setVisaType] = useState("")
    const [documents, setDocuments] = useState([])
    const { user } = useContext(AuthContext)




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


    const handleAddVisa = (e) => {
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
        const visaCreator = user.email

        const newVisa = { Countryname, Countryimage, icon_img, Visa_type, Processing_time, Required_documents, Description, Age_restriction, Fee, Validity, Application_method, visaCreator }

        fetch("http://localhost:5000/addVisa", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Visa added successfully",
                    showConfirmButton: true,

                });
                form.reset()

                return res.json()
            })
            .then(data => console.log(data))
            .catch(err => console.log(err))

    }

    return (

        <form onSubmit={handleAddVisa} className="w-[280px] mx-auto mt-12 sm:w-[540px] ">
            <h2 className="text-Pink text-xl  md:text-2xl text-center mb-8 sm:mb-12 font-bold underline underline-offset-8 ">Add A New Visa</h2>
            <div className="grid gap-6 mb-6 sm:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country Name</label>
                    <input type="text" name="Countryname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country Image</label>
                    <input type="text" name="Countryimage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ImageURL" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visa Type</label>
                    <select required onChange={handleVisaTypeChange} className="select select-bordered w-full h-[42px]  min-h-[42px] dark:bg-gray-700">

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
                    <input type="text" name="Processing_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age Restriction</label>
                    <input type="number" name="Age_restriction" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fee</label>
                    <input type="number" name="Fee" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Validity</label>
                    <input name="Validity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Application Method</label>
                    <input name="Application_method" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="online/in-person" required />
                </div>
            </div>
            {/*  */}
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white sm:mb-5">Required Documents</label>
                <div className="flex max-w-md flex-col gap-4" id="checkbox">
                    <div className="flex gap-4 flex-col sm:flex-row sm:gap-16 ">
                        <div className="flex items-center gap-2 ">
                            <Checkbox value="valid passport" onChange={handleCheckboxChange} />
                            <Label htmlFor="accept" className="flex">
                                Valid Passport
                            </Label>
                        </div>
                        <div className="flex sm:ml-2.5 items-center gap-2">
                            <Checkbox value="Visa application form" onChange={handleCheckboxChange} />
                            <Label htmlFor="accept" className="flex">
                                Visa application form
                            </Label>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col sm:flex-row sm:gap-14">
                        <div className="flex items-center gap-2">
                            <Checkbox value="Bank statements" onChange={handleCheckboxChange} />
                            <Label htmlFor="accept" className="flex">
                                Bank statements
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox value="Travel itinerary" onChange={handleCheckboxChange} />
                            <Label htmlFor="accept" className="flex">
                                Travel itinerary
                            </Label>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" name="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Icon Image(For Card UI )</label>
                <input name="icon_img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ImageURL" required />
            </div>

            <button type="submit" className="text-white bg-Pink   focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-Pink hover:bg-white hover:outline  outline-Pink hover:text-black dark:hover:bg-white font-bold">Add Visa</button>
        </form>

    )
}
