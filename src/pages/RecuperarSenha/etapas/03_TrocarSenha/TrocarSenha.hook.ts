import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router"
import { toast } from "sonner"
import { NovaSenhaSchema } from "../../RecuperarSenha.schema"

export const useTrocarSenha = () => {
    const [params] = useSearchParams()
    const tipoUser = params.get("User")
    const email = params.get("Email")
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(NovaSenhaSchema),
    })

    const onSubmit = handleSubmit((data) => {
        console.log({ ...data, email, tipoUser })

        toast.success("Senha redefinida com sucesso!")
        navigate("/login")
    })

    return { control, onSubmit }
}
