import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { UsuarioGenerico } from "../../api/models/usuarioLogado.types"
import { Enum } from "../../api/enum/enum"

export const useUser = () => {
    const [user, setUser] = useState<UsuarioGenerico>({})

    useEffect(() => {
        const raw = localStorage.getItem("usuarioLogado")
        if (raw) {
            const parsed = JSON.parse(raw)

            switch (parsed.tipoUser) {
                case Enum.TipoUsuario.Aluno:
                    setUser({ aluno: parsed })
                    break
                case Enum.TipoUsuario.Orientador:
                    setUser({ orientador: parsed })
                    break
                case Enum.TipoUsuario.Empresa:
                    setUser({ empresa: parsed })
                    break
                default:
                    setUser({})
            }
        }
    }, [])

    return { user }
}

export const useLogout = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("usuarioLogado")
        navigate("/login")
    }

    return { handleLogout }
}
