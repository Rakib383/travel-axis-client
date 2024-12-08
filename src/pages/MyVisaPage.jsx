import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { ApplicationCard } from "../components/ApplicationCard";

export const MyVisaPage = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email
    const [appliedVisas, setAppliedVisas] = useState([])



    useEffect(() => {
        fetch('http://localhost:5000/myAppliedVisas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setAppliedVisas(data))



    }, [appliedVisas])

    return (
        <div className="space-y-2 text-center px-3">
            <h1 className="font-black mt-7 text-sky-400 sm:text-lg">Applied Visas Dashboard</h1>
            <p className="px-4 text-gray-600 dark:text-gray-400 pt-1 text-[15px] sm:w-[420px] mx-auto pb-6">Easily view and manage your submitted visa applications in one convenient dashboard.</p>

            <div className="flex gap-8 flex-col sm:flex-row flex-wrap justify-center items-center max-w-6xl mx-auto" >
                {
                    appliedVisas.map(visa => <ApplicationCard key={visa._id} visa={visa} />)

                }
            </div>

        </div>
    )
}
