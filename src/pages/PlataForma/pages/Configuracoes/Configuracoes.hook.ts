import { useEffect, useMemo, useState } from "react"
import {
    useObterProjetoPorIdAluno,
    useObterProjetoPorIdOrientador,
} from "../../../../api/controllers/projeto"
import { useUser } from "../../../../lib/hooks/useUser"
import {
    useObterPatrociniosPorProjetoAluno,
    useObterPatrociniosPorProjetoOrientador,
    useObterValorTotalPatrocinioAluno,
    useObterValorTotalPatrocinioOrientador,
} from "../../../../api/controllers/patrocinio"
import { useForm } from "react-hook-form"
import { useConectarConta, useObterStatusConta } from "../../../../api/controllers/mercadoPago"
import { toast } from "sonner"
import { useSearchParams } from "react-router"

export const useConfiguracoes = () => {
    const { user } = useUser()
    const [open, setOpen] = useState(false)
    const [searchParams] = useSearchParams()
    const status = searchParams.get("status")

    const idAluno = user.aluno?.id_aluno
    const idOrientador = user.orientador?.id_orientador

    // projetos para o dropdown
    const alunoQuery = useObterProjetoPorIdAluno(idAluno)
    const orientadorQuery = useObterProjetoPorIdOrientador(idOrientador)

    const { control, watch } = useForm<{ projeto?: number }>({
        defaultValues: { projeto: undefined },
    })
    const projetoSelecionado = watch("projeto")
    const temProjetoSelecionado = !!projetoSelecionado

    // valores por projeto
    const { data: valorPatrocinioAluno, isPending: isPendingPatrocinioAluno } =
        useObterPatrociniosPorProjetoAluno({
            id_aluno: idAluno || 0,
            id_projeto: projetoSelecionado || 0,
        })

    const { data: valorPatrocinioOrientador, isPending: isPendingPatrocinioOrientador } =
        useObterPatrociniosPorProjetoOrientador({
            id_orientador: idOrientador || 0,
            id_projeto: projetoSelecionado || 0,
        })

    // valores totais
    const { data: valorTotalPatrocinioAluno, isPending: isPendingTotalPatrocinioAluno } =
        useObterValorTotalPatrocinioAluno({ id_aluno: idAluno || 0 })

    const { data: valorTotalPatrocinioOrientador, isPending: isPendingTotalPatrocinioOrientador } =
        useObterValorTotalPatrocinioOrientador({ id_orientador: idOrientador || 0 })

    // dados do dropdown
    const data = user.aluno ? alunoQuery.data : user.orientador ? orientadorQuery.data : undefined

    const isFetching =
        (user.aluno ? alunoQuery.isPending : user.orientador ? orientadorQuery.isPending : false) ||
        false

    const opcoes = useMemo(
        () => ({
            projetos:
                data?.projetos.map((p) => ({
                    id: p.id_projeto,
                    nome: p.titulo,
                })) || [],
        }),
        [data]
    )

    const valorExibido: number = useMemo(() => {
        if (user.aluno) {
            return temProjetoSelecionado
                ? Number(valorPatrocinioAluno?.valor ?? 0)
                : Number(valorTotalPatrocinioAluno?.valor ?? 0)
        }
        if (user.orientador) {
            return temProjetoSelecionado
                ? Number(valorPatrocinioOrientador?.valor ?? 0)
                : Number(valorTotalPatrocinioOrientador?.valor ?? 0)
        }
        return 0
    }, [
        user.aluno,
        user.orientador,
        temProjetoSelecionado,
        valorPatrocinioAluno?.valor,
        valorTotalPatrocinioAluno?.valor,
        valorPatrocinioOrientador?.valor,
        valorTotalPatrocinioOrientador?.valor,
    ])

    const isLoadingValor: boolean = useMemo(() => {
        if (user.aluno) {
            return temProjetoSelecionado ? !!isPendingPatrocinioAluno : !!isPendingTotalPatrocinioAluno
        }
        if (user.orientador) {
            return temProjetoSelecionado
                ? !!isPendingPatrocinioOrientador
                : !!isPendingTotalPatrocinioOrientador
        }
        return false
    }, [
        user.aluno,
        user.orientador,
        temProjetoSelecionado,
        isPendingPatrocinioAluno,
        isPendingTotalPatrocinioAluno,
        isPendingPatrocinioOrientador,
        isPendingTotalPatrocinioOrientador,
    ])

    const { data: statusConta, isPending: isLoadingStatus } = useObterStatusConta({
        id_usuario: idAluno || idOrientador || 0,
        tipo_usuario: user.aluno?.tipoUser || user.orientador?.tipoUser || null,
    })

    const { mutateAsync: conectarConta, isPending: isLoadingConectar } = useConectarConta({
        id_usuario: idAluno || idOrientador || 0,
        tipo_usuario: user.aluno?.tipoUser || user.orientador?.tipoUser || null,
    })

    const handleConectarConta = async () => {
        try {
            const response = await conectarConta()
            window.location.href = response.url
        } catch {
            toast.error("Erro ao conectar conta. Tente novamente.")
        }
    }

    useEffect(() => {
        if (status === "success") {
            toast.success("Conta vinculada com sucesso!")
        }
    }, [status])

    return {
        user,
        opcoes,
        isFetching,
        control,
        projetoSelecionado,
        temProjetoSelecionado,
        valorExibido,
        isLoadingValor,
        open,
        setOpen,
        statusConta,
        isLoadingStatus,
        handleConectarConta,
        isLoadingConectar,
    }
}
