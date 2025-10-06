/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form"
import { useUser } from "../../../../lib/hooks/useUser"
import { useParams } from "react-router"
import { useObterProjetoPorId, useObterProjetosLimit } from "../../../../api/controllers/projeto"
import { useObterFotoIntegrantes, useObterFotoUser } from "../../../../api/controllers/fotoUser"

export const useContainerPlataforma = () => {
    const { idProjeto } = useParams()
    const id = Number(idProjeto)
    const { control } = useForm()
    const { user } = useUser()

    const { data: obterProjetoPorId, isPending: obterProjetoPorIdIsPending } = useObterProjetoPorId(id)

    const { data: obterProjetos, isPending: obterProjetosIsPending } = useObterProjetosLimit(4)

    const { data: obterFotoUser, isPending: obterFotoUserIsPending } = useObterFotoUser({
        nomeUser:
            user.aluno?.nomeUsuario || user.orientador?.nomeUsuario || user.visitante?.nomeUsuario || "",
    })

    const { data: avatares, isPending: avataresIsPending } = useObterFotoIntegrantes(
        obterProjetoPorId?.grupo?.integrantes || []
    )

    const alunoEhIntegrante =
        user.aluno &&
        obterProjetoPorId?.grupo?.integrantes?.some(
            (integrante: any) => integrante.id_aluno === user.aluno?.id_aluno
        )

    const projetoEhDoOrientador =
        user.orientador && obterProjetoPorId?.id_orientador === user.orientador.id_orientador

    return {
        obterProjetoPorId,
        obterProjetoPorIdIsPending,
        obterProjetos,
        obterFotoUser,
        obterFotoUserIsPending,
        obterProjetosIsPending,
        avatares,
        avataresIsPending,
        control,
        user,
        idProjeto,
        alunoEhIntegrante,
        projetoEhDoOrientador,
    }
}
