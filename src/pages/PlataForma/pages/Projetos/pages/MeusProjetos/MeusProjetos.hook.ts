import { useUser } from "../../../../../../lib/hooks/useUser"
import {
    useObterProjetoPorIdAluno,
    useObterProjetoPorIdOrientador,
} from "../../../../../../api/controllers/projeto"

export const useMeusProjetos = () => {
    const { user } = useUser()
    const tipo = user?.tipoUser
    const idAluno = tipo === "aluno" ? user?.id_aluno : undefined
    const idOrientador = tipo === "orientador" ? user?.id_orientador : undefined

    const alunoQuery = useObterProjetoPorIdAluno(idAluno)
    const orientadorQuery = useObterProjetoPorIdOrientador(idOrientador)

    const data = tipo === "aluno" ? alunoQuery.data : orientadorQuery.data
    const isFetching = (tipo === "aluno" ? alunoQuery.isFetching : orientadorQuery.isFetching) || false
    const feed = Array.isArray(data?.projetos) ? data!.projetos : []

    return {
        isFetching,
        feed,
    }
}
