import * as Yup from "yup"

export const CadastroProjetoSchema = Yup.object().shape({
    titulo: Yup.string().required("Título é obrigatório"),
    descricao: Yup.string().required("Descrição é obrigatória"),
    area: Yup.string().required("Área é obrigatória"),
    // senha_acesso: Yup.string().required('Senha de acesso é obrigatória'),
})
