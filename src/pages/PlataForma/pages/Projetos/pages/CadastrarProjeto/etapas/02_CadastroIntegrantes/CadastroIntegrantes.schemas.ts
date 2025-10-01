import * as Yup from "yup"

export const validacaoIntegrantes = Yup.object({
    aluno: Yup.string().required("Selecione um integrante")
})
