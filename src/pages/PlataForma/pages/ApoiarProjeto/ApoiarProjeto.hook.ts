import { Resolver, useForm } from "react-hook-form"
import { ApoiarProjetoForm, apoiarProjetoSchema } from "./ApoiarProjeto.schema"
import { yupResolver } from "@hookform/resolvers/yup"
import { useParams } from "react-router"
import { useObterProjetoPorId } from "../../../../api/controllers/projeto"
import { useApoiar, usePatrocinar } from "../../../../api/controllers/patrocinio"
import { useUser } from "../../../../lib/hooks/useUser"
import { Enum } from "../../../../api/enum/enum"
import { toast } from "sonner"
import { useState } from "react"

export const useApoiarProjeto = () => {
    const { idProjeto } = useParams()
    const { user } = useUser()

    const [openModalPix, setOpenModalPix] = useState(false)
    const [dataPagamento, setDataPagamento] = useState({
        id_projeto: 0,
        valor: 0,
        email: "",
        nome: "",
    })

    const { data, isPending } = useObterProjetoPorId(Number(idProjeto))
    const { mutateAsync: patrocinar, isPending: isPatrocinarPending } = usePatrocinar()
    const { mutateAsync: apoiar, isPending: isApoiarPending } = useApoiar()

    type ApoiarProjetoFormResolved = ApoiarProjetoForm & { mensagemApoio: string | undefined }

    const { control, handleSubmit, reset } = useForm<ApoiarProjetoFormResolved>({
        resolver: yupResolver(apoiarProjetoSchema) as Resolver<ApoiarProjetoFormResolved>,
        defaultValues: {
            tipoApoio: undefined,
            valorApoio: undefined,
            mensagemApoio: undefined,
        },
    })

    const onSubmit = handleSubmit(async (data) => {
        const isEmpresa = !!user?.empresa?.id_empresa

        const valorApoio = Number(data.valorApoio)

        if (isEmpresa) {
            const payload = {
                id_projeto: Number(idProjeto),
                id_empresa: user?.empresa?.id_empresa || 0,
                data_patrocinio: new Date().toISOString().slice(0, 19).replace("T", " "),
                tipo_apoio: data.tipoApoio as Enum.TipoApoio,
                valorPatrocinio: Number(data.valorApoio),
                mensagem: data.mensagemApoio || "",
            }

            await patrocinar(payload, {
                onSuccess: () => {
                    const userDataRaw = localStorage.getItem("usuarioLogado")
                    if (userDataRaw) {
                        const userData = JSON.parse(userDataRaw)
                        userData.qnt_projetos_patrocinados =
                            (userData.qnt_projetos_patrocinados || 0) + 1
                        localStorage.setItem("usuarioLogado", JSON.stringify(userData))
                    }

                    setDataPagamento({
                        id_projeto: Number(idProjeto),
                        valor: valorApoio,
                        email: user?.empresa?.email || "",
                        nome: user?.empresa?.nome || "",
                    })

                    setOpenModalPix(true)
                    reset()
                },
                onError: () => {
                    toast.error("Não foi possível registrar o patrocínio. Tente novamente.")
                },
            })
        } else {
            const payload = {
                id_projeto: Number(idProjeto),
                id_visitante: user?.visitante?.id_visitante || 0,
                data_apoio: new Date().toISOString().slice(0, 19).replace("T", " "),
                tipo_apoio: data.tipoApoio as Enum.TipoApoio,
                valorApoio: Number(data.valorApoio),
                mensagem: data.mensagemApoio || "",
            }

            await apoiar(payload, {
                onSuccess: () => {
                    setDataPagamento({
                        id_projeto: Number(idProjeto),
                        valor: valorApoio,
                        email: user?.visitante?.email || "",
                        nome: user?.visitante?.nome || "",
                    })
                    setOpenModalPix(true)
                    reset()
                },
                onError: () => {
                    toast.error("Não foi possível registrar o apoio. Tente novamente.")
                },
            })
        }
    })

    return {
        control,
        onSubmit,
        projeto: data,
        isPending,
        isPatrocinarPending: isPatrocinarPending || isApoiarPending,
        openModalPix,
        setOpenModalPix,
        dataPagamento,
    }
}
