import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { RecuperarSenhaSchema } from "../../RecuperarSenha.schema"
import { useNavigate, useSearchParams } from "react-router"
import { useEnviarCodigo } from "../../../../api/controllers/recuperarSenha"
import { Enum } from "../../../../api/enum/enum"

export const useVerificarEmail = () => {
    const [params] = useSearchParams()
    const tipoUser = params.get("User")
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(RecuperarSenhaSchema),
    })

    const { mutateAsync: enviarCodigo, isPending: isEnviandoCodigo } = useEnviarCodigo()

    const onSubmit = handleSubmit(async (data) => {
        await enviarCodigo({ email: data.email, tipo_user: tipoUser! as Enum.TipoUsuario })
        navigate(`/recuperar-senha?step=VerificaCodigo&User=${tipoUser}&Email=${data.email}`)
    })

    return { control, onSubmit, isEnviandoCodigo }
}
