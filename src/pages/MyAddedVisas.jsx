import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { EntryCard } from "../components/EntryCard";

export const MyAddedVisas = () => {

    const { user } = useContext(AuthContext)
    const email = user?.email
    const [addedVisas, setAddedVisas] = useState([])

    useEffect(() => {
        fetch('https://travel-axis-server.vercel.app/myAddedVisas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setAddedVisas(data))

    }, [addedVisas])

    return (

        <div className="space-y-2 text-center min-h-screen px-3">
            <h1 className="font-black mt-7 text-sky-400 sm:text-lg">My Visa Entries</h1>
            <p className="px-4 text-gray-600 dark:text-gray-400 pt-1 text-[15px] sm:w-[420px] mx-auto pb-6">Check and update the visa details you’ve registered in the system.</p>


            {
                addedVisas.length == 0 && (<div className="flex items-center flex-col justify-center">

                    <img className="w-72 mt-8" src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg" alt="" />
                    <h3 className="font-bold text-lg">Nothing to show</h3>
                </div>)


            }

            <div className="flex gap-8 sm:gap-10 flex-col sm:flex-row flex-wrap justify-center   items-center max-w-6xl mx-auto" >
                {
                    addedVisas.map(visa => <EntryCard key={visa._id} visa={visa} />)

                }
            </div>

        </div>
    )
}
