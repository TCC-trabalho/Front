import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validacaoAluno } from "./FormAluno.schemas"
import { toast } from "sonner"
import { useCadastroAluno } from "../../../../../api/controllers/auth"
import { useNavigate } from "react-router"
import { useObterInstituicoes } from "../../../../../api/controllers/instituicao"
import { useMemo } from "react"

export const useFormAluno = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, getValues, reset } = useForm({
        resolver: yupResolver(validacaoAluno),
    })

    const { mutateAsync, isPending } = useCadastroAluno()
    const { data: instituicoes, isPending: isLoadingInstituicoes } = useObterInstituicoes({
        limit: 5000,
        name: null,
        page: null,
        type: null,
    })

    const instituicoesOptions = useMemo(
        () => ({
            instituicoes:
                instituicoes?.response.map((inst) => ({
                    id: `${inst.classification}-${inst.name_institution}`,
                    tipo: inst.classification,
                    nome: inst.name_institution,
                })) || [],
        }),
        [instituicoes]
    )

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const payload = {
            nome: valores.nome,
            nomeUsuario: valores.nomeUser,
            biografia: "",
            email: valores.email,
            nascimento: valores.dataNascimento,
            telefone: valores.telefone.replace(/\D/g, ""),
            curso: valores.curso,
            inst_ensino: valores.instituicao,
            senha: valores.senha,
        }

        const toastId = toast.loading("Enviando seus dados...")

        try {
            await mutateAsync(payload)
            toast.success("Cadastro realizado com sucesso!", { id: toastId })

            reset()
            navigate("/login")
        } catch {
            toast.error("Erro ao cadastrar. Verifique os dados.", { id: toastId })
        }
    })

    return {
        control,
        onSubmit,
        isPending,
        isLoadingInstituicoes,
        instituicoesOptions,
    }
}
