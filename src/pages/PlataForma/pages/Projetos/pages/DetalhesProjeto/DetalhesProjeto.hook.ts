import { useObterProjetoPorId } from "../../../../../../api/controllers/projeto"
import { useParams } from "react-router"
import { useUser } from "../../../../../../lib/hooks/useUser"

export const useDetalhesProjeto = () => {
    const { idProjeto } = useParams()
    const user = useUser()

    const tipoUser = user.user?.tipoUser
    const idOrientador = user.user?.id_orientador

    const id = Number(idProjeto)

    const { data, isPending } = useObterProjetoPorId(id)

    return {
        tipoUser,
        idOrientador,
        isFetching: isPending,
        detalhes: data,
        idProjeto
    }
}
