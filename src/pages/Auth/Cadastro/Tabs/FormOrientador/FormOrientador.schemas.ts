import * as Yup from "yup"

const NOME_ERROR = "o nome completo é obrigatório"
const NOMEUSER_ERROR = "o nome de usuario é obrigatório"
const TELEFONE_ERROR = "o telefone é obrigatório"
const EMAIL_ERROR = "o email é obrigatório"
const FOMACAO_ERROR = "a formação é obrigatória"
const SENHA_ERROR = "a senha é obrigatório"

export const validacaoOrientador = Yup.object({
    nome: Yup.string().typeError(NOME_ERROR).required(NOME_ERROR),
    nomeUser: Yup.string().typeError(NOMEUSER_ERROR).required(NOMEUSER_ERROR),
    telefone: Yup.string()
        .typeError(TELEFONE_ERROR)
        .required(TELEFONE_ERROR)
        .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido"),
    email: Yup.string().email("Email inválido").typeError(EMAIL_ERROR).required(EMAIL_ERROR),
    formacao: Yup.string().typeError(FOMACAO_ERROR).required(FOMACAO_ERROR),
    senha: Yup.string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .typeError(SENHA_ERROR)
        .required(SENHA_ERROR),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref("senha")], "As senhas não coincidem")
        .required("Confirmação de senha é obrigatória"),
})
