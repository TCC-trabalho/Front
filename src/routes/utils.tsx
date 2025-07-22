import { Navigate, Outlet } from "react-router"

const isAuthenticated = (): boolean => {
    const user = localStorage.getItem("usuarioLogado")
    return !!user
}

export const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
}

export const PublicRoute = () => {
    return !isAuthenticated() ? <Outlet /> : <Navigate to="/plataforma-nexus" />
}