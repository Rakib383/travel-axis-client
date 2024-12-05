import { AboutUs } from "../components/AboutUs"
import { Header } from "../components/Header"
import { LatestVisas } from "../components/LatestVisas"
import { Services } from "../components/Services"

export const HomePage = () => {
    return (
        <div>
            <Header/>
            <LatestVisas/>
            <AboutUs/>
            <Services/>
        </div>
    )
}
