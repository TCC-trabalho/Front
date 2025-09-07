import * as Yup from "yup"
import { toNumberBR } from "../../../../lib/utils/yup"

export const apoiarProjetoSchema = Yup.object().shape({
    tipoApoio: Yup.string()
        .oneOf(["dinheiro", "divulgacao", "equipamentos", "capacitacao"], "Selecione um tipo válido")
        .required("Tipo de apoio é obrigatório"),
    valorApoio: Yup.number()
        .transform((_val, original) => toNumberBR(original) as number | undefined)
        .typeError("Informe um valor válido")
        .required("Valor de apoio é obrigatório")
        .moreThan(0, "Informe um valor maior que zero"),
    mensagemApoio: Yup.string().max(500, "Mensagem de apoio deve ter no máximo 500 caracteres"),
})

export type ApoiarProjetoForm = Yup.InferType<typeof apoiarProjetoSchema>
