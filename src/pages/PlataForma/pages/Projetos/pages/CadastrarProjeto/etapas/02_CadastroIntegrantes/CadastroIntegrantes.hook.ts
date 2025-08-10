import { useForm, useFieldArray, FieldValues } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { validacaoIntegrantes } from "./CadastroIntegrantes.schemas"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useCadastrarIntegrantes } from "../../../../../../../../api/controllers/grupo"
import { toast } from "sonner"

type FormData = FieldValues & {
    emailIntegrante: string[]
}

export const useCadastroIntegrantes = () => {
    const { idGrupo } = useParams()
    const idGrupoNumber = Number(idGrupo)
    const [camposDesabilitados, setCamposDesabilitados] = useState<boolean[]>([])

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validacaoIntegrantes),
        defaultValues: {
            emailIntegrante: [""],
        },
    })

    const { fields, append, remove } = useFieldArray<FormData>({
        control,
        name: "emailIntegrante",
    })

    const { mutateAsync: cadastrarIntegrantes, isPending: isPendingCadastrarIntegrantes } =
        useCadastrarIntegrantes(idGrupoNumber)

    const emails = watch("emailIntegrante") || []

    const onSubmit = (data: FormData) => {
        const emailsParaEnviar = data.emailIntegrante.filter((_, index) => !camposDesabilitados[index])

        if (emailsParaEnviar.length === 0) return

        cadastrarIntegrantes(
            { email: emailsParaEnviar },
            {
                onSuccess: () => {
                    toast.success("Integrantes cadastrados com sucesso!")
                    setCamposDesabilitados((prev) =>
                        prev.map((_, index) =>
                            emailsParaEnviar.includes(data.emailIntegrante[index]) ? true : prev[index]
                        )
                    )
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onError: (err: any) => {
                    const message = err?.response?.data?.message || "Erro ao cadastrar integrante."
                    toast.error(message)
                },
            }
        )
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const ultimoEmailValido =
        emails.length > 0 &&
        regexEmail.test(emails[emails.length - 1]) &&
        !errors.emailIntegrante?.[emails.length - 1]

    useEffect(() => {
        if (fields.length === 0) {
            append("")
        }
    }, [append, fields])

    useEffect(() => {
        setCamposDesabilitados((prev) => {
            const novos = [...prev]

            // Se algum campo novo foi adicionado
            if (fields.length > prev.length) {
                const quantosNovos = fields.length - prev.length
                for (let i = 0; i < quantosNovos; i++) {
                    novos.push(false) // novo campo começa como habilitado
                }
            }

            return novos
        })
    }, [fields.length])

    const desabilitarCampo = (index: number) => camposDesabilitados[index]
    const podeAvancar = camposDesabilitados.every(Boolean)

    return {
        idGrupo,
        control,
        onSubmit: handleSubmit(onSubmit),
        append,
        remove,
        fields,
        emails,
        desabilitarCampo,
        setCamposDesabilitados,
        ultimoEmailValido,
        podeAvancar,
        isPendingCadastrarIntegrantes,
    }
}
