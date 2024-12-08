import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import { AddVisaPage } from "../pages/AddVisaPage";
import { AllVisasPage } from "../pages/AllVisasPage";
import { VisaDetailsPage } from "../pages/VisaDetailsPage";
import { MyVisaPage } from "../pages/MyVisaPage";
import { MyAddedVisas } from "../pages/MyAddedVisas";
import { PrivateRoute } from "./PrivateRoute";
import { ErrorPage } from "../pages/ErrorPage";

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
                element:<PrivateRoute><AddVisaPage/></PrivateRoute>
            },
            {
                path:"allVisas",
                element:<PrivateRoute><AllVisasPage/></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/allVisas")
            },
            {
                path:"visas/:id",
                element:<PrivateRoute><VisaDetailsPage/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/visas/${params.id}`)
            },
            {
                path:"myAppliedVisas",
                element:<PrivateRoute><MyVisaPage/></PrivateRoute> 
            },
            {
                path:"myAddedVisas",
                element:<PrivateRoute><MyAddedVisas/></PrivateRoute> 
            },


        ]

    },
    {
        path:"*",
        element:<ErrorPage/>
    }

])

export default router