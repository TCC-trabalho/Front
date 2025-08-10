import { useMutation } from "@tanstack/react-query"
import { api } from "../../lib/config/axios"
import { Grupo, Integrante } from "../models/grupo.type"

export const useCadastrarGrupo = () => {
    return useMutation({
        mutationFn: async (request: Grupo) => {
            const { data } = await api.post("grupos", request)
            return data
        },
    })
}

export const useCadastrarIntegrantes = (idGrupo: number) => {
    return useMutation({
        mutationFn: async (integrante: Integrante) => {
            const { data } = await api.post(`grupo/${idGrupo}/adicionar-integrantes`, {
                emails: integrante.email,
            })
            return data
        },
    })
}
