import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { RecuperarSenhaSchema } from "../../RecuperarSenha.schema"
import { useNavigate, useSearchParams } from "react-router"

export const useVerificarEmail = () => {
    const [params] = useSearchParams()
    const tipoUser = params.get("User")
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(RecuperarSenhaSchema),
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        navigate(`/recuperar-senha?step=VerificaCodigo&User=${tipoUser}&Email=${data.email}`)
    })

    return { control, onSubmit }
}
