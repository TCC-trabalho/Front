/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner"
import { CadastroProjetoSchema } from "./CadastroProjeto.schema"
import { Resolver, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useCadastrarProjeto } from "../../../../../../../../api/controllers/projeto"
import { useParams } from "react-router"
import { useUser } from "../../../../../../../../lib/hooks/useUser"
import { useSuccessModal } from "../../../../../../../../lib/hooks/useSuccessModal"
import { FormValues } from "./CadastroProjeto.types"

export const useCadastroProjeto = () => {
    const { user } = useUser()
    const { idGrupo } = useParams()
    const idGrupoNumber = Number(idGrupo)

    const { control, handleSubmit, getValues } = useForm<FormValues>({
        resolver: yupResolver(CadastroProjetoSchema) as unknown as Resolver<FormValues, any, FormValues>,
        defaultValues: {
            titulo: "",
            descricao: "",
            area: "",
            foto: null,
        },
    })

    const { mutateAsync: cadastrarProjeto } = useCadastrarProjeto()

    const {
        open: openModal,
        setOpen: setOpenModal,
        isPending,
        execute: cadastrarComModal,
    } = useSuccessModal(cadastrarProjeto)

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const toastId = toast.loading("Criando projeto...")

        try {
            const form = new FormData()
            form.append("titulo", valores.titulo)
            form.append("descricao", valores.descricao)
            form.append("area", valores.area)

            form.append("data_criacao", new Date().toISOString().slice(0, 19).replace("T", " "))
            form.append("status", "ativo")
            form.append("id_grupo", String(idGrupoNumber))
            form.append("id_orientador", String(user?.orientador?.id_orientador || 0))
            form.append("objetivo", "")
            form.append("justificativa", "")
            form.append("qnt_empresas_patrocinam", String(0))

            if (valores.foto) form.append("foto", valores.foto)

            const response = await cadastrarComModal(form)

            const userDataRaw = localStorage.getItem("usuarioLogado")
            if (userDataRaw) {
                const userData = JSON.parse(userDataRaw)
                userData.qtn_projetos = (userData.qtn_projetos || 0) + 1
                localStorage.setItem("usuarioLogado", JSON.stringify(userData))
            }

            toast.success("Projeto criado com sucesso!", { id: toastId })
            return response
        } catch {
            toast.error("Falha ao criar projeto. Verifique os dados.", { id: toastId })
        }
    })

    return {
        control,
        onSubmit,
        isPendingCadastrarProjeto: isPending,
        openModal,
        setOpenModal,
    }
}
