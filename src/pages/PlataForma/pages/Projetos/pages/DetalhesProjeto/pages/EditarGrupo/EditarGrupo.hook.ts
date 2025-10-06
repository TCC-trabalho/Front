import { useParams } from "react-router"
import { useObterProjetoPorId } from "../../../../../../../../api/controllers/projeto"
import { validacaoIntegrantes } from "../../../CadastrarProjeto/etapas/02_CadastroIntegrantes/CadastroIntegrantes.schemas"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useObterAlunos } from "../../../../../../../../api/controllers/aluno"
import {
    useCadastrarIntegrantes,
    useExcluirIntegrante,
    useObterIntegrantes,
} from "../../../../../../../../api/controllers/grupo"
import { useMemo } from "react"
import { toast } from "sonner"

export const useEditarGrupo = () => {
    const { idProjeto } = useParams()

    const { data, isPending } = useObterProjetoPorId(Number(idProjeto))

    const idGrupo = data?.id_grupo

    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(validacaoIntegrantes),
        defaultValues: {
            aluno: undefined,
        },
    })

    const { data: alunosData, isPending: isAlunosPending } = useObterAlunos()

    const { data: integrantesData, isPending: isIntegrantesPending } = useObterIntegrantes({
        idGrupo: Number(idGrupo),
    })

    const { mutateAsync: cadastrarIntegrantes, isPending: isCadastrarPending } = useCadastrarIntegrantes(
        Number(idGrupo)
    )

    const { mutateAsync: excluirIntegrante, isPending: isExcluirPending } = useExcluirIntegrante()

    const handleExcluir = async (idAluno: number) => {
        if (!idGrupo) return
        await excluirIntegrante({
            idGrupo: Number(idGrupo),
            idAluno,
        })
    }

    const opcoesAlunos = useMemo(
        () => ({
            alunos:
                alunosData?.map((aluno) => ({
                    id: aluno.id_aluno,
                    nome: aluno.email,
                })) || [],
        }),
        [alunosData]
    )

    const integrantesIds = useMemo(
        () => integrantesData?.map((i) => i.id_aluno) ?? [],
        [integrantesData]
    )

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (data.aluno) {
                await cadastrarIntegrantes({ email: data.aluno })
                toast.success("Integrante adicionado com sucesso!")
                reset()
            }
        } catch (error) {
            toast.error("Não foi possível adicionar o integrante.")
            console.error(error)
        }
    })

    return {
        opcoesAlunos,
        integrantesIds,
        isAlunosPending,
        control,
        onSubmit,
        isCadastrarPending,
        isLoading: isPending || isIntegrantesPending,
        integrantesData,
        handleExcluir,
        isExcluirPending,
        idProjeto,
    }
}
