import { useObterProjetoPorId } from "../../../../../../api/controllers/projeto"
import { useParams } from "react-router"
import { useUser } from "../../../../../../lib/hooks/useUser"

export const useDetalhesProjeto = () => {
    const { idProjeto } = useParams()
    const { user } = useUser()

    const tipoUser =
        user.aluno?.tipoUser ??
        user.orientador?.tipoUser ??
        user.empresa?.tipoUser ??
        user.visitante?.tipoUser ??
        null

    const idOrientador = user.orientador?.id_orientador
    const idAluno = user.aluno?.id_aluno

    const id = Number(idProjeto)

    const { data, isPending } = useObterProjetoPorId(id)

    const alunoEhIntegrante =
        tipoUser === "aluno" &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?.grupo?.integrantes?.some((integrante: any) => integrante.id_aluno === idAluno)

    const projetoEhDoOrientador = tipoUser === "orientador" && data?.id_orientador === idOrientador

    return {
        tipoUser,
        alunoEhIntegrante,
        projetoEhDoOrientador,
        isFetching: isPending,
        detalhes: data,
        idProjeto,
    }
}
