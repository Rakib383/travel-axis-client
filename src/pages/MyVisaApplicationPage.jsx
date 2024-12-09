import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { ApplicationCard } from "../components/ApplicationCard";
import { IoMdSearch } from "react-icons/io";

export const MyVisaApplicationPage = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const [filteredVisas, setFilteredVisas] = useState([])
    const [allAppliedVisas, setAllAppliedVisas] = useState([])


    useEffect(() => {
        fetch('https://travel-axis-server.vercel.app/myAppliedVisas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {

                setAllAppliedVisas(data)
                setFilteredVisas(data)
            })



    }, [allAppliedVisas])

    const handleSearch = () => {
        const inputCountry = document.getElementById('countryName').value.trim().toLowerCase()
        const searchedCountries = allAppliedVisas.filter(visa => visa.Countryname.toLowerCase() === inputCountry)

        setFilteredVisas(searchedCountries)


    }

    const handleInputChange = () => {
        setFilteredVisas(allAppliedVisas)

    }

    return (
        <div className="space-y-2 text-center min-h-screen px-3">
            <h1 className="font-black mt-7 text-sky-400 sm:text-lg">Applied Visas Dashboard</h1>
            <p className="px-4 text-gray-600 dark:text-gray-400 pt-1 text-[15px] sm:w-[420px] mx-auto pb-6">Easily view and manage your submitted visa applications in one convenient dashboard.</p>

            {
                allAppliedVisas.length > 0 && <div className="flex flex-col w-40 mx-auto gap-1 pb-4">
                    <p className="text-xs text-start text-gray-500 mb-1 ">Enter Country Name</p>
                    <div className="flex items-center gap-2">
                        <input onChange={handleInputChange} id="countryName" type="text" placeholder="Search" className="input input-bordered w-40 h-9" />
                        <button onClick={handleSearch}>
                            <IoMdSearch className="text-2xl cursor-pointer" />
                        </button>
                    </div>

                </div>
            }


            {
                allAppliedVisas.length == 0 && (<div className="flex items-center flex-col justify-center">

                    <img className="w-72 mt-8" src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg" alt="" />
                    <h3 className="font-bold text-lg">Nothing to show</h3>
                </div>)


            }


            <div className="flex gap-8 flex-col sm:flex-row flex-wrap justify-center items-center max-w-6xl mx-auto" >
                {
                    filteredVisas.map(visa => <ApplicationCard key={visa._id} visa={visa} />)

                }
            </div>

        </div>
    )
}
