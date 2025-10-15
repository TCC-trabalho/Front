import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router"
import { toast } from "sonner"
import { NovaSenhaSchema } from "../../RecuperarSenha.schema"
import { useRedefinirSenha } from "../../../../api/controllers/recuperarSenha"
import { Enum } from "../../../../api/enum/enum"

export const useTrocarSenha = () => {
    const [params] = useSearchParams()
    const tipoUser = params.get("User")
    const email = params.get("Email")
    const codigo = params.get("Codigo")
    const navigate = useNavigate()

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(NovaSenhaSchema),
    })

    const { mutateAsync: redefinirSenha, isPending: isRedefinindoSenha } = useRedefinirSenha()

    const onSubmit = handleSubmit(async (data) => {
        await redefinirSenha({
            nova_senha: data.senha,
            nova_senha_confirmation: data.confirmarSenha,
            email: email!,
            tipo_user: tipoUser as Enum.TipoUsuario,
            codigo: codigo!,
        })

        toast.success("Senha redefinida com sucesso!")
        navigate("/login")
    })

    return { control, onSubmit, isRedefinindoSenha }
}
