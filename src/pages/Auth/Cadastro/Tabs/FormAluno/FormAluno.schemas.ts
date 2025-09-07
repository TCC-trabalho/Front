import * as Yup from "yup"

const NOME_ERROR = "o nome completo é obrigatório"
const NOMEUSER_ERROR = "o nome de usuario é obrigatório"
const TELEFONE_ERROR = "o telefone é obrigatório"
const EMAIL_ERROR = "o email é obrigatório"
const DATA_NASCIMENTO_ERROR = "a data de nascimento é obrigatória"
const CURSO_ERROR = "o curso é obrigatório"
const INSITUICAO_ERROR = "a insituição é obrigatória"
const SENHA_ERROR = "a senha é obrigatória"

export const validacaoAluno = Yup.object({
    nome: Yup.string().typeError(NOME_ERROR).required(NOME_ERROR),
    nomeUser: Yup.string().typeError(NOMEUSER_ERROR).required(NOMEUSER_ERROR),
    telefone: Yup.string()
        .typeError(TELEFONE_ERROR)
        .required(TELEFONE_ERROR)
        .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido"),
    email: Yup.string().email("Email inválido").typeError(EMAIL_ERROR).required(EMAIL_ERROR),
    dataNascimento: Yup.date().typeError(DATA_NASCIMENTO_ERROR).required(DATA_NASCIMENTO_ERROR),
    curso: Yup.string().typeError(CURSO_ERROR).required(CURSO_ERROR),
    instituicao: Yup.string().typeError(INSITUICAO_ERROR).required(INSITUICAO_ERROR),
    senha: Yup.string().min(6, "A senha deve ter no mínimo 6 caracteres").required(SENHA_ERROR),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref("senha")], "As senhas não coincidem")
        .required("Confirmação de senha é obrigatória"),
})
