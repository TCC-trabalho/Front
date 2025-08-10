import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validacaoAluno } from "./FormAluno.schemas"
import { toast } from "sonner"
import { useCadastroAluno } from "../../../../../api/controllers/auth"
import { useNavigate } from "react-router"

export const useFormAluno = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, getValues, reset } = useForm({
        resolver: yupResolver(validacaoAluno),
    })

    const { mutateAsync } = useCadastroAluno()

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const payload = {
            nome: valores.nome,
            nomeUsuario: valores.nomeUser,
            cpf: valores.cpf.replace(/\D/g, ""),
            rg: valores.rg.replace(/\D/g, ""),
            email: valores.email,
            nascimento: valores.dataNascimento,
            telefone: valores.telefone.replace(/\D/g, ""),
            curso: valores.curso,
            inst_ensino: valores.instituicao === 2 ? "ETEC São Paulo" : "FATEC São Paulo",
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
    }
}
