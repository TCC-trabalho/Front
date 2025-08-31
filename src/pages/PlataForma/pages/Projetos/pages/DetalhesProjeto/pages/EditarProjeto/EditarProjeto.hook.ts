import { useParams } from "react-router"
import {
    useAtualizarProjeto,
    useObterProjetoPorId,
} from "../../../../../../../../api/controllers/projeto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { useSuccessModal } from "../../../../../../../../lib/hooks/useSuccessModal"

export const useEditarProjeto = () => {
    const { idProjeto } = useParams()

    const { data, isFetching, isLoading } = useObterProjetoPorId(Number(idProjeto))

    const { control, getValues, handleSubmit } = useForm({
        values: {
            titulo: data?.titulo || "",
            status: data?.status || "",
            area: data?.area || "",
            descricao: data?.descricao || "",
            objetivo: data?.objetivo || "",
            justificativa: data?.justificativa || "",
            imagemUrl: data?.foto || "",
        },
    })

    const { mutateAsync: atualizarProjeto } = useAtualizarProjeto(Number(idProjeto))

    const {
        open: openModal,
        setOpen: setOpenModal,
        isPending,
        execute: AtualizarComModal,
    } = useSuccessModal(atualizarProjeto)

    const onSubmit = handleSubmit(async () => {
        const valores = getValues()

        const toastId = toast.loading("Editando projeto...")

        try {
            const response = await AtualizarComModal({
                titulo: valores.titulo,
                descricao: valores.descricao,
                area: valores.area,
                status: valores.status,
                objetivo: valores.objetivo,
                justificativa: valores.justificativa,
            })

            toast.success("Projeto editado com sucesso!", { id: toastId })
            return response
        } catch {
            toast.error("Falha ao editar projeto. Verifique os dados.", {
                id: toastId,
            })
        }
    })

    return {
        idProjeto,
        projetosIsloading: isFetching || isLoading,
        atualizarProjeto: isPending,
        detalhes: data,
        control,
        openModal,
        setOpenModal,
        onSubmit
    }
}
