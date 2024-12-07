import { useLoaderData } from "react-router-dom"
import { Card } from "../components/Card"

export const AllVisasPage = () => {

    const allVisas = useLoaderData()

    return (

        <div className="mx-2 my-8 md:mt-12">
            <h2 className="font-bold  text-center mt-5 ">Discover the Perfect Visa for <span className="font-black text-xl md:text-2xl text-Pink">Your Journey</span></h2>
            <p className="font-semibold my-3 mb-9 text-center text-gray-600 dark:text-gray-400">Find all the visa types you need in one place for a seamless travel experience.</p>

            <div className="sm:flex-row flex-wrap flex flex-col gap-7 sm:mt-12 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-2  justify-center items-center ">
                {
                    allVisas.map(visa => <Card visa={visa} key={visa.Countryname} />)
                }
            </div>

        </div>
    )
}
