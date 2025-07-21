import * as Yup from "yup";

const NOME_ERROR = "o nome completo é obrigatório";
const TELEFONE_ERROR = "o telefone é obrigatório";
const EMAIL_ERROR = "o email é obrigatório";
const CNPJ_ERROR = "o cnpj da sua empresa é obrigatório";
const ENDERECO_ERROR = "o endereço é obrigatório";
const SETOR_ERROR = "o setor/área da sua empresa é obrigatória";
const SENHA_ERROR = "a senha da sua empresa é obrigatória";

export const validacaoEmpresa = Yup.object({
  nome: Yup.string().typeError(NOME_ERROR).required(NOME_ERROR),
  telefone: Yup.string()
    .typeError(TELEFONE_ERROR)
    .required(TELEFONE_ERROR)
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido"),
  email: Yup.string()
    .email("Email inválido")
    .typeError(EMAIL_ERROR)
    .required(EMAIL_ERROR),
  cnpj: Yup.string()
    .matches(/^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/, "CNPJ inválido")
    .typeError(CNPJ_ERROR)
    .required(CNPJ_ERROR),
  endereco: Yup.string()
    .matches(
      /^[A-Z]{2}-[A-Z]+$/,
      "O endereço deve estar no formato UF-PAIS, ex: SP-BRASIL"
    )
    .required(ENDERECO_ERROR),
  setor: Yup.string().required(SETOR_ERROR),
  senha: Yup.string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required(SENHA_ERROR),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha")], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});
