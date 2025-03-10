import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../Layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Register } from "../pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import { AddVisaPage } from "../pages/AddVisaPage";
import { AllVisasPage } from "../pages/AllVisasPage";
import { VisaDetailsPage } from "../pages/VisaDetailsPage";
import { MyVisaApplicationPage } from "../pages/MyVisaApplicationPage";
import { MyAddedVisas } from "../pages/MyAddedVisas";
import { PrivateRoute } from "./PrivateRoute";
import { ErrorPage } from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "addVisa",
                element: <PrivateRoute><AddVisaPage /></PrivateRoute>
            },
            {
                path: "allVisas",
                element: <PrivateRoute><AllVisasPage /></PrivateRoute>,
                loader: () => fetch("https://travel-axis-server.vercel.app/allVisas")
            },
            {
                path: "visas/:id",
                element: <PrivateRoute><VisaDetailsPage /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-axis-server.vercel.app/visas/${params.id}`)
            },
            {
                path: "myAppliedVisas",
                element: <PrivateRoute><MyVisaApplicationPage /></PrivateRoute>
            },
            {
                path: "myAddedVisas",
                element: <PrivateRoute><MyAddedVisas /></PrivateRoute>
            },


        ]

    },
    {
        path: "*",
        element: <ErrorPage />
    }

])

export default router