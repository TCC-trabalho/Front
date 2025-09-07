import { useParams } from "react-router"
import { useObterEmpresasPorId } from "../../../../../../api/controllers/empresa"
import { useState } from "react"

export const useDetalhesEmpresa = () => {
    const [modal, setModal] = useState(false)

    const { idEmpresa } = useParams()

    const { data: empresa, isPending } = useObterEmpresasPorId({ id_empresa: Number(idEmpresa) })

    const feed = Array.isArray(empresa?.projetos_patrocinados) ? empresa!.projetos_patrocinados : []

    return {
        isFetching: isPending,
        feed,
        user: empresa,
        modal,
        setModal
    }
}
