import * as Yup from "yup"
import { ignoreVazio } from "../../../../../../lib/utils/yup"

export const EditarPerfilSchema = Yup.object().shape({
    senha: Yup.string().transform(ignoreVazio).min(6, "Mínimo 6 caracteres").notRequired(),
    nome: Yup.string().transform(ignoreVazio).notRequired(),
    telefone: Yup.string().transform(ignoreVazio).notRequired(),
    biografia: Yup.string().transform(ignoreVazio).notRequired(),
    curso: Yup.string().transform(ignoreVazio).notRequired(),
    formacao: Yup.string().transform(ignoreVazio).notRequired(),
})

export type EditarPerfilForm = Yup.InferType<typeof EditarPerfilSchema>
