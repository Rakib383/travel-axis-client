import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import { AddVisaPage } from "../pages/AddVisaPage";

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

        ]

    }
])

export default router