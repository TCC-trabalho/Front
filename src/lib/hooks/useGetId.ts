import { useUser } from "./useUser"

export const useUserId = () => {
    const { user } = useUser()
    const tipo = user?.tipoUser

    if (!user) return undefined

    switch (tipo) {
        case "aluno":
            return user.id_aluno
        case "orientador":
            return user.id_orientador
        case "empresa":
            return user.id_empresa
        default:
            return undefined
    }
}
