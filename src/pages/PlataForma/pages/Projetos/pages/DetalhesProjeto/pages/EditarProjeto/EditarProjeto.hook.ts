import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useParams } from "react-router"
import {
    useAtualizarProjeto,
    useObterProjetoPorId,
} from "../../../../../../../../api/controllers/projeto"

type FormValues = {
    titulo: string
    status: string
    area: string
    descricao: string
    objetivo: string | null
    justificativa: string | null
    foto: File | null
}

export const useEditarProjeto = () => {
    const { idProjeto } = useParams()
    const { data, isFetching, isLoading } = useObterProjetoPorId(Number(idProjeto))

    const [openModal, setOpenModal] = useState(false)

    const { control, getValues, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            titulo: "",
            status: "",
            area: "",
            descricao: "",
            objetivo: "",
            justificativa: "",
            foto: null,
        },
    })

    useEffect(() => {
        if (!data) return
        reset({
            titulo: data.titulo,
            status: data.status,
            area: data.area,
            descricao: data.descricao,
            objetivo: data.objetivo,
            justificativa: data.justificativa,
            foto: null,
        })
    }, [data, reset])

    const { mutateAsync: atualizarProjeto, isPending: atualizarProjetoLoading } = useAtualizarProjeto(
        Number(idProjeto)
    )

    const onSubmit = handleSubmit(async () => {
        const v = getValues()
        const toastId = toast.loading("Editando projeto...")

        try {
            const form = new FormData()
            form.append("_method", "PUT")
            form.append("titulo", v.titulo)
            form.append("descricao", v.descricao)
            form.append("area", v.area)
            form.append("status", v.status)
            form.append("objetivo", v.objetivo ?? "")
            form.append("justificativa", v.justificativa ?? "")
            if (v.foto) form.append("foto", v.foto)

            await atualizarProjeto(form)
            toast.success("Projeto editado com sucesso!", { id: toastId })
            setOpenModal(true)
        } catch {
            toast.error("Falha ao editar projeto. Verifique os dados.", { id: toastId })
        }
    })

    return {
        idProjeto,
        projetosIsloading: isFetching || isLoading,
        control,
        onSubmit,
        detalhes: data,
        openModal,
        setOpenModal,
        atualizarProjetoLoading,
    }
}
