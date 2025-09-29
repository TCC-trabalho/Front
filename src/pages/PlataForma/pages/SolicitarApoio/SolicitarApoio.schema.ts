import * as Yup from "yup"

export const solicitarApoioSchema = Yup.object({
    tipoApoio: Yup.string()
        .oneOf(["dinheiro", "divulgacao", "equipamentos", "capacitacao"], "Selecione um tipo válido")
        .required("Tipo de apoio é obrigatório"),
    projeto: Yup.object({
        id: Yup.number().required("Projeto é obrigatório"),
        nome: Yup.string().required("Nome do projeto é obrigatório"),
    }),
    mensagemApoio: Yup.string().max(200, "A mensagem deve ter no máximo 200 caracteres").required("Mensagem é obrigatória"),
})

