import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"

export const ProtectedRouter = () => {
    const {isAuth} = useAuth();

    return isAuth ? <Outlet/> : <Navigate to="/login"/>
}