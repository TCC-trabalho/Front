import * as Yup from "yup"

const NOME_ERROR = "o nome completo é obrigatório"
const NOMEUSER_ERROR = "o nome de usuario é obrigatório"
const EMAIL_ERROR = "o email é obrigatório"
const SENHA_ERROR = "a senha é obrigatória"

export const validacaoVisitante = Yup.object({
    nome: Yup.string().typeError(NOME_ERROR).required(NOME_ERROR),
    nomeUser: Yup.string().typeError(NOMEUSER_ERROR).required(NOMEUSER_ERROR),
    email: Yup.string().email("Email inválido").typeError(EMAIL_ERROR).required(EMAIL_ERROR),
    senha: Yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required(SENHA_ERROR),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref("senha")], "As senhas não coincidem")
        .required("Confirmação de senha é obrigatória"),
})
