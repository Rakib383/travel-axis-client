import { AboutUs } from "../components/AboutUs"
import { Header } from "../components/Header"
import { LatestVisas } from "../components/LatestVisas"

export const HomePage = () => {
    return (
        <div>
            <Header/>
            <LatestVisas/>
            <AboutUs/>
        </div>
    )
}
