import { useParams } from "react-router"
import { useConfiguracoes } from "../Configuracoes/Configuracoes.hook"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { solicitarApoioSchema } from "./SolicitarApoio.schema"
import { useObterEmpresaPorId } from "../../../../api/controllers/empresa"

export const useSolicitarApoio = () => {
    const { idEmpresa } = useParams()

    const { opcoes, isFetching } = useConfiguracoes()

    const { data: empresa, isFetching: isFetchingEmpresa } = useObterEmpresaPorId({
        id_empresa: Number(idEmpresa),
    })

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(solicitarApoioSchema),
        defaultValues: {
            tipoApoio: undefined,
            projeto: undefined,
            mensagemApoio: "",
        },
    })

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return {
        id_empresa: Number(idEmpresa),
        opcoes,
        isFetching,
        control,
        onSubmit,
        isFetchingEmpresa,
        empresa,
    }
}
