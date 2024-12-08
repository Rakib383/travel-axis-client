import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../pages/Loading";

export const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Loading />
    }

    if (user && !loading) {
        return children
    }

    return (
        <Navigate state={location.pathname} to="/login" />
    )
}
