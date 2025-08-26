import { useForm } from "react-hook-form"
import { useUser } from "../../../../lib/hooks/useUser"
import { useParams } from "react-router"
import { useObterProjetoPorId, useObterProjetosLimit } from "../../../../api/controllers/projeto"

export const useContainerPlataforma = () => {
    const { idProjeto } = useParams()
    const id = Number(idProjeto)
    const { control } = useForm()
    const { user } = useUser()

    const { data: obterProjetoPorId, isPending: obterProjetoPorIdIsPending } = useObterProjetoPorId(id)

    const { data: obterProjetos, isPending: obterProjetosIsPending } = useObterProjetosLimit(4)

    return {
        obterProjetoPorId,
        obterProjetoPorIdIsPending,
        obterProjetos,
        obterProjetosIsPending,
        control,
        user,
    }
}
