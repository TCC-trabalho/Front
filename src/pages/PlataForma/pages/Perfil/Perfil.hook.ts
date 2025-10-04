/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUser } from "../../../../lib/hooks/useUser"
import {
    useObterProjetoPorIdAluno,
    useObterProjetoPorIdOrientador,
} from "../../../../api/controllers/projeto"
import { useUserId } from "../../../../lib/hooks/useGetId"
import { useObterFotoUser } from "../../../../api/controllers/fotoUser"
import { useObterProjetosPatrocinadosPorEmpresa } from "../../../../api/controllers/empresa"
import { useObterProjetosApoiadosPorVisitante } from "../../../../api/controllers/visitante"

export const usePerfil = () => {
    const { user } = useUser()
    const userId = useUserId()

    const idAluno = user.aluno?.id_aluno
    const idOrientador = user.orientador?.id_orientador

    const alunoQuery = useObterProjetoPorIdAluno(idAluno)

    const orientadorQuery = useObterProjetoPorIdOrientador(idOrientador)

    const { data: obterProjetosPatrocinados, isPending: obterProjetosPatrocinadosIsPending } =
        useObterProjetosPatrocinadosPorEmpresa({
            id_empresa: user.empresa?.id_empresa || 0,
        })

    const { data: obterProjetosApoiados, isPending: obterProjetosApoiadosIsPending } =
        useObterProjetosApoiadosPorVisitante({
            id_visitante: user.visitante?.id_visitante || 0,
        })

    const { data: obterFotoUser, isPending: obterFotoUserIsPending } = useObterFotoUser({
        nomeUser:
            user.aluno?.nomeUsuario || user.orientador?.nomeUsuario || user.visitante?.nomeUsuario || "",
    })

    const papel = user.aluno
        ? "aluno"
        : user.orientador
        ? "orientador"
        : user.empresa
        ? "empresa"
        : user.visitante
        ? "visitante"
        : "nenhum"

    const isFetching =
        papel === "aluno"
            ? !!alunoQuery.isPending
            : papel === "orientador"
            ? !!orientadorQuery.isPending
            : papel === "empresa"
            ? !!obterProjetosPatrocinadosIsPending
            : papel === "visitante"
            ? !!obterProjetosApoiadosIsPending
            : false

    let feed: any[] = []

    if (papel === "empresa") {
        feed = obterProjetosPatrocinados?.projetos_patrocinados ?? []
    } else if (papel === "visitante") {
        feed = obterProjetosApoiados?.projetos_apoiados ?? []
    } else if (papel === "aluno") {
        const d = alunoQuery.data as { projetos?: any[] } | any[] | undefined
        feed = Array.isArray(d) ? d : Array.isArray(d?.projetos) ? d!.projetos! : []
    } else if (papel === "orientador") {
        const d = orientadorQuery.data as { projetos?: any[] } | any[] | undefined
        feed = Array.isArray(d) ? d : Array.isArray(d?.projetos) ? d!.projetos! : []
    }

    const isEmpty = feed.length === 0 && !isFetching

    return {
        isFetching,
        feed,
        user,
        isEmpty,
        userId,
        obterFotoUser,
        obterFotoUserIsPending,
    }
}
