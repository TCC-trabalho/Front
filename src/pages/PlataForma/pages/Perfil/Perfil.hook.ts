import { useMediaQuery, useTheme } from "@mui/material"
import { useRef } from "react"
import { useUser } from "../../../../lib/hooks/useUser"
import {
    useObterProjetoPorIdAluno,
    useObterProjetoPorIdOrientador,
} from "../../../../api/controllers/projeto"

export const usePerfil = () => {
    const { user } = useUser()
    const tipo = user?.tipoUser

    const getUserId  = () => {
        if (tipo === "aluno") return user?.id_aluno
        if (tipo === "orientador") return user?.id_orientador
        if (tipo === "empresa") return user?.id_empresa
        return undefined
    }
    const userId = getUserId()

    const idAluno = tipo === "aluno" ? user?.id_aluno : undefined
    const idOrientador = tipo === "orientador" ? user?.id_orientador : undefined
    const scrollRef = useRef<HTMLDivElement>(null)
    const theme = useTheme()
    const isAboveMd = useMediaQuery(theme.breakpoints.up("md"))

    const alunoQuery = useObterProjetoPorIdAluno(idAluno)
    const orientadorQuery = useObterProjetoPorIdOrientador(idOrientador)

    const data = tipo === "aluno" ? alunoQuery.data : orientadorQuery.data
    const isFetching = (tipo === "aluno" ? alunoQuery.isFetching : orientadorQuery.isFetching) || false
    const feed = Array.isArray(data?.projetos) ? data!.projetos : []

    const paddingTop = {
        xs: 4,
        md: 0,
        lg: 10,
    }

    const scroll = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: offset, behavior: "smooth" })
        }
    }

    return {
        isAboveMd,
        scroll,
        scrollRef,
        isFetching,
        feed,
        paddingTop,
        user,
        userId,
    }
}
