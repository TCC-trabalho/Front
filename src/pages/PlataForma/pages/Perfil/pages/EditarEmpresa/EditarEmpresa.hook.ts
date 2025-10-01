import { useForm } from "react-hook-form"
import { useAtualizarEmpresa, useObterEmpresaPorId } from "../../../../../../api/controllers/empresa"
import { useUser } from "../../../../../../lib/hooks/useUser"
import { useEffect } from "react"
import { toast } from "sonner"

type FormValues = {
    foto: File | null
    setor: string
    senha?: string
    nome: string
    telefone: string
    descricao: string
}

export const useEditarEmpresa = () => {
    const { user } = useUser()

    const { data: empresa, isPending: isEmpresaLoading } = useObterEmpresaPorId({
        id_empresa: user?.empresa?.id_empresa || 0,
    })

    const { control, getValues, handleSubmit, reset } = useForm<FormValues>({
        defaultValues: {
            foto: null,
            setor: "",
            senha: "",
            nome: "",
            telefone: "",
            descricao: "",
        },
    })

    useEffect(() => {
        if (!empresa) return
        reset({
            foto: null,
            setor: empresa.setor,
            senha: "",
            nome: empresa.nome,
            telefone: empresa.telefone,
            descricao: empresa.descricao,
        })
    }, [empresa, reset])

    const { mutateAsync: atualizarEmpresa, isPending: atualizarEmpresaLoading } = useAtualizarEmpresa(
        user?.empresa?.id_empresa || 0
    )

    const onSubmit = handleSubmit(async () => {
        const v = getValues()
        const toastId = toast.loading("Editando empresa...")

        try {
            const form = new FormData()
            form.append("_method", "PUT")
            form.append("nome", v.nome)
            if (v.descricao && v.descricao.trim() !== "") {
                form.append("descricao", v.descricao)
            }
            form.append("setor", v.setor)
            form.append("senha", v.senha ?? "")
            form.append("telefone", v.telefone)
            if (v.foto) form.append("foto", v.foto)

            await atualizarEmpresa(form)
            toast.success("Empresa editada com sucesso!", { id: toastId })
        } catch {
            toast.error("Falha ao editar empresa. Verifique os dados.", { id: toastId })
        }
    })

    return {
        empresa,
        isEmpresaLoading,
        control,
        atualizarEmpresaLoading,
        onSubmit,
    }
}
