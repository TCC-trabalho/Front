import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validacaoAluno } from "./FormAluno.schemas"
import { toast } from "sonner"
import { useNavigate } from "react-router"
import { useLogin } from "../../../../../api/controllers/auth"

export const useFormAluno = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, getValues } = useForm({
        resolver: yupResolver(validacaoAluno),
    })

    const { mutateAsync, isPending } = useLogin()

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const toastId = toast.loading("Validando credenciais...")

        try {
            const response = await mutateAsync({
                tipo: "aluno",
                email: valores.email,
                senha: valores.senha,
            })

            localStorage.setItem("usuarioLogado", JSON.stringify(response.user))
            toast.success("Login realizado com sucesso!", { id: toastId })

            navigate("/plataforma-nexus")
        } catch {
            toast.error("Falha no login. Verifique seus dados.", { id: toastId })
        }
    })

    return {
        control,
        onSubmit,
        isPending
    }
}
