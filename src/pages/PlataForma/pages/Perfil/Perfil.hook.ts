import { useUser } from "../../../../lib/hooks/useUser"
import {
    useObterProjetoPorIdAluno,
    useObterProjetoPorIdOrientador,
} from "../../../../api/controllers/projeto"
import { useUserId } from "../../../../lib/hooks/useGetId"
import { useObterFotoUser } from "../../../../api/controllers/fotoUser"

export const usePerfil = () => {
    const { user } = useUser()
    const userId = useUserId()

    const idAluno = user.aluno?.id_aluno
    const idOrientador = user.orientador?.id_orientador

    const alunoQuery = useObterProjetoPorIdAluno(idAluno)
    const orientadorQuery = useObterProjetoPorIdOrientador(idOrientador)
    const { data: obterFotoUser, isPending: obterFotoUserIsPending } = useObterFotoUser({
        nomeUser: user.aluno?.nomeUsuario || user.orientador?.nomeUsuario || "",
    })

    const data = user.aluno ? alunoQuery.data : user.orientador ? orientadorQuery.data : undefined

    const isFetching =
        (user.aluno ? alunoQuery.isPending : user.orientador ? orientadorQuery.isPending : false) ||
        false

    const feed = Array.isArray(data?.projetos) ? data!.projetos : []

    return {
        isFetching,
        feed,
        user,
        userId,
        obterFotoUser,
        obterFotoUserIsPending,
    }
}
