import { useParams } from "react-router"
import { useConfiguracoes } from "../Configuracoes/Configuracoes.hook"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { solicitarApoioSchema } from "./SolicitarApoio.schema"
import { useObterEmpresaPorId } from "../../../../api/controllers/empresa"
import { useSolicitarAjuda } from "../../../../api/controllers/patrocinio"
import { toast } from "sonner"
import { useUser } from "../../../../lib/hooks/useUser"
import { Enum } from "../../../../api/enum/enum"

export const useSolicitarApoio = () => {
    const { idEmpresa } = useParams()
    const { user } = useUser()

    const { opcoes, isFetching } = useConfiguracoes()

    const { data: empresa, isFetching: isFetchingEmpresa } = useObterEmpresaPorId({
        id_empresa: Number(idEmpresa),
    })

    const { mutateAsync: solicitarApoio, isPending: isSolicitarApoioPending } = useSolicitarAjuda()

    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(solicitarApoioSchema),
        defaultValues: {
            tipoApoio: undefined,
            projeto: undefined,
            mensagemApoio: "",
        },
    })

    const onSubmit = handleSubmit(async (data) => {
        if (!idEmpresa) return

        const request = {
            nome_usuario: user?.aluno?.nome || user?.orientador?.nome || "",
            tipo_usuario: user?.aluno?.tipoUser || user?.orientador?.tipoUser || null,
            id_projeto: data.projeto.id,
            projeto: data.projeto.nome,
            tipo_apoio: data.tipoApoio as Enum.TipoApoio,
            mensagem: data.mensagemApoio,
            email_empresa: "trabalhotcc489@gmail.com",
        }

        const toastId = toast.loading("Enviando solicitação...")

        try {
            await solicitarApoio(request)
            toast.success("Apoio solicitado com sucesso!", { id: toastId })
            reset()
        } catch (error) {
            toast.error("Erro ao enviar solicitação", { id: toastId })
            console.error(error)
        }
    })

    return {
        id_empresa: Number(idEmpresa),
        opcoes,
        isFetching,
        control,
        onSubmit,
        isFetchingEmpresa,
        empresa,
        isSolicitarApoioPending,
    }
}
