import { useLocation } from "react-router"

export const useRotasSemPadding = () => {
    const location = useLocation()
    const path = location.pathname

    const rotasSemPadding = [
        "/solicitar-apoio",
        "/editar-grupo"
    ]

    return rotasSemPadding.some((rota) => path.includes(rota))
}
