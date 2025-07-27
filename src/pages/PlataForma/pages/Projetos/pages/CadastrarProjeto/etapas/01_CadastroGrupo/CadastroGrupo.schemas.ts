import * as Yup from "yup";

export const validacaoGrupo = Yup.object({

    nome: Yup.string().typeError("O nome é obrigatório").required("O nome é obrigatório"),
    descricao: Yup.string().typeError("A descrição é obrigatória").required("A descrição é obrigatória"),

})