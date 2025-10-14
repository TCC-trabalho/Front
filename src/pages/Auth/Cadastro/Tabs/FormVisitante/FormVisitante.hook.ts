import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import { validacaoVisitante } from "./FormVisitante.schemas"
import { useCadastroVisitante } from "../../../../../api/controllers/auth"

export const useFormVisitante = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, getValues, reset } = useForm({
        resolver: yupResolver(validacaoVisitante),
    })

    const { mutateAsync, isPending } = useCadastroVisitante()

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const payload = {
            nome: valores.nome,
            nomeUsuario: valores.nomeUser,
            biografia: "",
            email: valores.email,
            senha: valores.senha,
        }

        const toastId = toast.loading("Enviando seus dados...")

        try {
            await mutateAsync(payload)
            toast.success("Cadastro realizado com sucesso!", { id: toastId })

            reset()
            navigate("/login?Tab=Visitante")
        } catch {
            toast.error("Erro ao cadastrar. Verifique os dados.", { id: toastId })
        }
    })

    return {
        control,
        onSubmit,
        isPending,
    }
}
