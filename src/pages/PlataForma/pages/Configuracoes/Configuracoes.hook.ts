import { useMemo } from "react"
import {
    useObterProjetoPorIdAluno,
    useObterProjetoPorIdOrientador,
} from "../../../../api/controllers/projeto"
import { useUser } from "../../../../lib/hooks/useUser"

export const useConfiguracoes = () => {
    const { user } = useUser()

    const idAluno = user.aluno?.id_aluno
    const idOrientador = user.orientador?.id_orientador

    const alunoQuery = useObterProjetoPorIdAluno(idAluno)
    const orientadorQuery = useObterProjetoPorIdOrientador(idOrientador)

    const data = user.aluno ? alunoQuery.data : user.orientador ? orientadorQuery.data : undefined

    const isFetching =
        (user.aluno ? alunoQuery.isPending : user.orientador ? orientadorQuery.isPending : false) ||
        false

    const opcoes = useMemo(
        () => ({
            projetos: data?.projetos.map((projeto) => ({
                id: projeto.id_projeto,
                nome: projeto.titulo,
            })) || [],
        }),
        [data]
    )

    return {
        user,
        opcoes,
        isFetching,
    }
}
