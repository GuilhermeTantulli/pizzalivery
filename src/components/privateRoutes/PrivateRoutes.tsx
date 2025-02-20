import { Navigate, Outlet } from "react-router-dom"
import { routes } from "../../routes"

export default function privateRoutes () {
    const userToken = sessionStorage.getItem("token")
    return userToken ? <Outlet /> : <Navigate to={routes.login}/>
}