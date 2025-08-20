import { useForm } from "react-hook-form"
import { useUser } from "../../../../../../lib/hooks/useUser"
import { EditarPerfilForm, EditarPerfilSchema } from "./EditarPerfil.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useAtualizarDadosUsuario } from "../../../../../../api/controllers/user"
import { toast } from "sonner"
import { useUserId } from "../../../../../../lib/hooks/useGetId"

export const useEditarPerfil = () => {
    const userId = useUserId()
    const { user } = useUser()
    const { control, handleSubmit, getValues } = useForm<EditarPerfilForm>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: yupResolver<EditarPerfilForm, any, EditarPerfilForm>(EditarPerfilSchema),
        values: {
            nome: user?.nomeUsuario ?? undefined,
            telefone: user?.telefone ?? undefined,
            biografia: user?.biografia ?? undefined,
            curso: user?.curso ?? undefined,
            formacao: user?.formacao ?? undefined,
            senha: undefined,
        },
    })

    const { mutateAsync: atualizarDados, isPending } = useAtualizarDadosUsuario(
        userId ?? 0,
        user?.tipoUser ?? ""
    )

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const payload = {
            nomeUsuario: valores.nome,
            biografia: valores.biografia,
            curso: valores.curso,
            formacao: valores.formacao,
            senha: valores.senha,
            telefone: valores.telefone,
        }
        const toastId = toast.loading("Editando dados...")

        try {
            const updatedUser = await atualizarDados(payload)

            localStorage.setItem("usuarioLogado", JSON.stringify(updatedUser))

            toast.success("Dados editados com sucesso!", { id: toastId })
        } catch {
            toast.error("Erro ao editar dados.", { id: toastId })
        }
    })

    return {
        user,
        control,
        onSubmit,
        isPending,
    }
}
