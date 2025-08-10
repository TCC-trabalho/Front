import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "sonner"
import { validacaoOrientador } from "./FormOrientador.schemas"
import { useCadastroProfessor } from "../../../../../api/controllers/auth"
import { useNavigate } from "react-router"

export const useFormOrientador = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, getValues, reset } = useForm({
        resolver: yupResolver(validacaoOrientador),
    })

    const { mutateAsync } = useCadastroProfessor()

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const payload = {
            nome: valores.nome,
            nomeUsuario: valores.nomeUser,
            cpf: valores.cpf.replace(/\D/g, ""),
            rg: valores.rg.replace(/\D/g, ""),
            email: valores.email,
            telefone: valores.telefone.replace(/\D/g, ""),
            formacao: valores.formacao,
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
