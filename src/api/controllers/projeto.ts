import { useMutation, useQuery } from "@tanstack/react-query"
import { api, nexusQueryClient } from "../../lib/config/axios"
import { ListaProjetosResponse, Projeto } from "../models/projeto.type"

export const useObterProjetos = () => {
    return useQuery<Projeto[], Error>({
        queryKey: ["projetos"],
        queryFn: async () => {
            const { data } = await api.get<Projeto[]>("projetos")
            return data
        },
    })
}

export const useObterProjetoPorId = (id: number) => {
    return useQuery<Projeto, Error>({
        queryKey: ["projeto", id],
        queryFn: async () => {
            const { data } = await api.get<Projeto>(`projetos/${id}`)
            return data
        },
    })
}

export const useObterProjetoPorIdOrientador = (id?: number) => {
    return useQuery<ListaProjetosResponse, Error>({
        queryKey: ["projeto-por-orientador", id ?? 0],
        queryFn: async () => {
            const { data } = await api.get<ListaProjetosResponse>(`projetos/orientador/${id}`)
            return data
        },
        enabled: !!id,
    })
}

export const useObterProjetoPorIdAluno = (id?: number) => {
    return useQuery<ListaProjetosResponse, Error>({
        queryKey: ["projeto-por-aluno", id ?? 0],
        queryFn: async () => {
            const { data } = await api.get<ListaProjetosResponse>(`projetos/aluno/${id}`)
            return data
        },
        enabled: !!id,
    })
}

export const useCadastrarProjeto = () => {
    return useMutation({
        mutationFn: async (request: Projeto) => {
            const { data } = await api.post("projetos", request)
            return data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: ["projetos"] })
            nexusQueryClient.invalidateQueries({ queryKey: ["projeto-por-orientador"] })
            nexusQueryClient.invalidateQueries({ queryKey: ["projeto"] })
        },
    })
}
