import { useParams } from "react-router"
import { useObterEmpresasProjetos } from "../../../../../../api/controllers/empresa"
import { useState } from "react"
import { useUser } from "../../../../../../lib/hooks/useUser"

export const useDetalhesEmpresa = () => {
    const [modal, setModal] = useState(false)
    const { user } = useUser()

    const { idEmpresa } = useParams()

    const { data: empresa, isPending } = useObterEmpresasProjetos({ id_empresa: Number(idEmpresa) })

    const feed = Array.isArray(empresa?.projetos_patrocinados) ? empresa!.projetos_patrocinados : []

    const isEmpty = feed.length === 0

    return {
        isFetching: isPending,
        feed,
        empresa,
        modal,
        setModal,
        user,
        isEmpty,
    }
}
