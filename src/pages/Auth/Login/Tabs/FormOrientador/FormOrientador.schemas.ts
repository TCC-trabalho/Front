import * as Yup from "yup";

const EMAIL_ERROR = "o email é obrigatório"
const SENHA_ERROR = "a senha é obrigatório"

export const validacaoOrientador = Yup.object({
  email: Yup.string().typeError(EMAIL_ERROR).required(EMAIL_ERROR),
  senha: Yup.string().typeError(SENHA_ERROR).required(SENHA_ERROR),
});
