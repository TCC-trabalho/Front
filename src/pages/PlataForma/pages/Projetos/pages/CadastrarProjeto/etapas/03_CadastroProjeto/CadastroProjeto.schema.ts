import * as Yup from "yup"

export const CadastroProjetoSchema = Yup.object().shape({
    titulo: Yup.string().required("Título é obrigatório"),
    descricao: Yup.string().required("Descrição é obrigatória"),
    area: Yup.string().required("Área é obrigatória"),
    foto: Yup.mixed<File>()
        .nullable()
        .test(
            "fileSize",
            "A imagem deve ter no máximo 5MB",
            (file) => !file || (file && file.size <= 5 * 1024 * 1024)
        )
        .test(
            "fileType",
            "Formato inválido (use jpg, jpeg, png ou webp)",
            (file) =>
                !file ||
                (file && ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type))
        ),
})
