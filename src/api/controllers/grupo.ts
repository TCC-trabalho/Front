import { useMutation, useQuery } from "@tanstack/react-query"
import { api, nexusQueryClient } from "../../lib/config/axios"
import {
    ExcluirIntegrante,
    Grupo,
    GrupoQueryKeys,
    Integrante,
    ObterIntegrantes,
} from "../models/grupo.type"

export const useObterIntegrantes = (request: ObterIntegrantes.Request) => {
    return useQuery({
        queryKey: [GrupoQueryKeys.ObterIntegrantes, request.idGrupo],
        queryFn: async () => {
            const { data } = await api.get<ObterIntegrantes.Response>(
                `grupo/${request.idGrupo}/integrantes`
            )
            return data
        },
    })
}

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
                email: integrante.email,
            })
            return data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [GrupoQueryKeys.ObterIntegrantes, idGrupo] })
        },
    })
}

export const useExcluirIntegrante = () => {
    return useMutation({
        mutationFn: async (request: ExcluirIntegrante.Request) => {
            const { data } = await api.delete(
                `grupo/${request.idGrupo}/remover-integrante/${request.idAluno}`
            )
            return data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [GrupoQueryKeys.ObterIntegrantes] })
        },
    })
}
