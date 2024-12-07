import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import { AddVisaPage } from "../pages/AddVisaPage";
import { AllVisasPage } from "../pages/AllVisasPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children:[
            {
                path:"",
                element:<HomePage/>
            },
            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"addVisa",
                element:<AddVisaPage/>
            },
            {
                path:"allVisas",
                element:<AllVisasPage/>,
                loader: () => fetch("http://localhost:5000/allVisas")
            }

        ]

    }
])

export default router