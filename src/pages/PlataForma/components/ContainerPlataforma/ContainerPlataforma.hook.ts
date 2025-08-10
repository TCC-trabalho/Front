import { useForm } from "react-hook-form"
import { useUser } from "../../../../lib/hooks/useUser"
import { useParams } from "react-router"
import { useObterProjetoPorId } from "../../../../api/controllers/projeto"

export const useContainerPlataforma = () => {
    const { idProjeto } = useParams()
    const id = Number(idProjeto)
    const { control } = useForm()
    const { user } = useUser()

    const { data, isFetching } = useObterProjetoPorId(id)

    return {
        projeto: data,
        isFetching,
        control,
        user,
    }
}
