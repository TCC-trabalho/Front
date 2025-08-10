import * as Yup from "yup"

export const validacaoIntegrantes = Yup.object({
    emailIntegrante: Yup.array()
        .of(
            Yup.string()
                .typeError("Digite um e-mail válido")
                .email("E-mail inválido")
                .required("O e-mail é obrigatório")
        )
        .required("Adicione pelo menos um integrante")
        .min(1, "Adicione pelo menos um integrante"),
})
