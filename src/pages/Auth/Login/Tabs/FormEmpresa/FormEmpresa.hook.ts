import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "sonner"
import { validacaoEmpresa } from "./FormEmpresa.schemas"
import { useNavigate } from "react-router"
import { useLogin } from "../../../../../api/controllers/auth"

export const useFormEmpresa = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, getValues } = useForm({
        resolver: yupResolver(validacaoEmpresa),
    })

    const { mutateAsync, isPending } = useLogin()

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const toastId = toast.loading("Validando credenciais...")

        try {
            const response = await mutateAsync({
                tipo: "empresa",
                cnpj: valores.cnpj,
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
