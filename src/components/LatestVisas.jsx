import { useEffect, useState } from "react"
import { VisaCard } from "./VisaCard"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";

export const LatestVisas = () => {
    const [latestVisas, setLatestVisas] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setLatestVisas(data))

    }, [])

    return (
        <div className="text-center">

            <h2 className="font-bold text-lg pt-5 md:pt-10 md:text-xl italic ">Explore the Latest Visa Updates</h2>
            <h5 className=" text-gray-700 dark:text-white/70 px-8 mt-3 mb-10 md:mb-16 md:w-[480px] mx-auto ">Check out the latest visa announcements to ensure a smooth application process for your travel plans.</h5>
            {/* visa cards */}

            <div className="flex gap-8 flex-col sm:flex-row flex-wrap justify-center items-center max-w-6xl mx-auto">
                {
                    latestVisas.map(visa => <VisaCard visa={visa} key={visa.Countryname} />)
                }
            </div>

            <Link to="/allVisas" className="btn mt-12 bg-Pink hover:outline outline-Pink hover:text-black hover:bg-white text-white ">See All Visas <FaArrowRight /></Link>

        </div>
    )
}
