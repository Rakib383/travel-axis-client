import { useLoaderData } from "react-router-dom"
import { Card } from "../components/Card"
import { useState } from "react"


export const AllVisasPage = () => {

    const allVisas = useLoaderData()
    const [filteredVisas,setFilteredVisas] = useState(allVisas)


    const handleVisaTypeChange = (e) => {
        const visa_type = e.target.value

        const selectedVisas = allVisas.filter(visa => visa.Visa_type == visa_type)

        setFilteredVisas(selectedVisas)


    }

    return (

        <div className="mx-2 my-8 md:mt-12">
            <h2 className="font-bold  text-center mt-5 ">Discover the Perfect Visa for <span className="font-black text-xl md:text-2xl text-Pink">Your Journey</span></h2>

            <p className="font-semibold my-3 mb-5 text-center text-gray-600 dark:text-gray-400">Find all the visa types you need in one place for a seamless travel experience.</p>

            <div className="w-40 mx-auto">
                <select required onChange={handleVisaTypeChange} className="select select-bordered  h-[42px] w-full  min-h-[42px] dark:bg-gray-700">

                    <option value="" hidden>
                        Select
                    </option>
                    <option value="tourist">Tourist Visa</option>
                    <option value="student">Student Visa</option>
                    <option value="business">Business Visa</option>
                    <option value="medical">Medical Visa</option>
                </select>
            </div>

            <div className="sm:flex-row flex-wrap flex flex-col gap-7 sm:mt-12 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-2  justify-center items-center pt-7">
                {
                    filteredVisas.map(visa => <Card visa={visa} key={visa.Countryname} />)
                }
            </div>

        </div>
    )
}
