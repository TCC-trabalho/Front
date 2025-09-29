import * as Yup from "yup"

export const solicitarApoioSchema = Yup.object({
    tipoApoio: Yup.string()
        .oneOf(["dinheiro", "divulgacao", "equipamentos", "capacitacao"], "Selecione um tipo válido")
        .required("Tipo de apoio é obrigatório"),
    projeto: Yup.string().typeError("Selecione um projeto válido").required("Projeto é obrigatório"),
    mensagemApoio: Yup.string().max(200, "A mensagem deve ter no máximo 200 caracteres").required("Mensagem é obrigatória"),
})

