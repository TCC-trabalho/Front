import * as Yup from "yup"

const CNPJ_ERROR = "o cnpj da sua empresa é obrigatório"
const SENHA_ERROR = "a senha da sua empresa é obrigatória"

export const validacaoEmpresa = Yup.object({
    cnpj: Yup.string().typeError(CNPJ_ERROR).required(CNPJ_ERROR),
    senha: Yup.string().typeError(SENHA_ERROR).required(SENHA_ERROR),
})
