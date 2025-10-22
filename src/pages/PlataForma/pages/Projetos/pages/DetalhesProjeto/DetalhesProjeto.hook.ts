/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useObterProjetoPorId,
    useVincularGestorFinanceiro,
} from "../../../../../../api/controllers/projeto"
import { useParams } from "react-router"
import { useUser } from "../../../../../../lib/hooks/useUser"
import { toast } from "sonner"

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
        data?.grupo?.integrantes?.some((integrante: any) => integrante.id_aluno === idAluno)

    const projetoEhDoOrientador = tipoUser === "orientador" && data?.id_orientador === idOrientador

    const { mutateAsync: vincularGestor, isPending: isVincularGestorPending } =
        useVincularGestorFinanceiro()

    const handleVincularGestor = async () => {
        if (!idProjeto) return
        try {
            await vincularGestor({
                id_projeto: Number(idProjeto),
                id_usuario: user.aluno?.id_aluno ?? user.orientador?.id_orientador ?? 0,
                tipo_usuario: user.aluno?.tipoUser ?? user.orientador?.tipoUser ?? null,
            })
            toast.success("Vinculado como gestor financeiro com sucesso")
        } catch (err: any) {
            const msg =
                err?.response?.data?.erro ||
                err?.response?.data?.message ||
                "Erro ao vincular gestor financeiro"
            toast.error(msg)
        }
    }

    return {
        tipoUser,
        alunoEhIntegrante,
        projetoEhDoOrientador,
        isFetching: isPending,
        detalhes: data,
        idProjeto,
        handleVincularGestor,
        isVincularGestorPending,
    }
}
