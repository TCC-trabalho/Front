import * as Yup from "yup";

export const RecuperarSenhaSchema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
});

export const CodigoRecuperacaoSchema = Yup.object().shape({
    codigo: Yup.string().required("Por favor, insira o código de recuperação").length(4, "O código deve ter 4 dígitos"),
});

export const NovaSenhaSchema = Yup.object().shape({
    senha: Yup.string()
        .min(6, "A senha deve ter no mínimo 6 caracteres")
        .required("A nova senha é obrigatória"),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref("senha")], "As senhas devem ser iguais")
        .required("A confirmação da nova senha é obrigatória"),
});