import { useMutation, useQuery } from "@tanstack/react-query"
import { api, nexusQueryClient } from "../../lib/config/axios"
import {
    Apoiar,
    ObterPatrociniosPorProjetoAluno,
    ObterPatrociniosPorProjetoOrientador,
    ObterValorTotalPatrocinioAluno,
    ObterValorTotalPatrocinioOrientador,
    Patrocinar,
    QueryKeys,
} from "../models/patrocinio.types"
import { QueryKeys as EmpresaKey } from "../models/empresa.types"

export const useObterPatrociniosPorProjetoAluno = (request: ObterPatrociniosPorProjetoAluno.Request) => {
    return useQuery({
        queryKey: [QueryKeys.obterPatrociniosPorProjetoAluno, request.id_aluno, request.id_projeto],
        enabled: !!request.id_aluno && !!request.id_projeto,
        queryFn: async () => {
            const response = await api.get<ObterPatrociniosPorProjetoAluno.Response>(
                `projetos/${request.id_projeto}/patrocinios/valor/aluno/${request.id_aluno}`
            )
            return response.data
        },
    })
}

export const useObterPatrociniosPorProjetoOrientador = (
    request: ObterPatrociniosPorProjetoOrientador.Request
) => {
    return useQuery({
        queryKey: [
            QueryKeys.obterPatrociniosPorProjetoOrientador,
            request.id_orientador,
            request.id_projeto,
        ],
        enabled: !!request.id_orientador && !!request.id_projeto,
        queryFn: async () => {
            const response = await api.get<ObterPatrociniosPorProjetoOrientador.Response>(
                `projetos/${request.id_projeto}/patrocinios/valor/orientador/${request.id_orientador}`
            )
            return response.data
        },
    })
}

export const useObterValorTotalPatrocinioAluno = (request: ObterValorTotalPatrocinioAluno.Request) => {
    return useQuery({
        queryKey: [QueryKeys.obterValorTotalPatrocinioAluno, request.id_aluno],
        enabled: !!request.id_aluno,
        queryFn: async () => {
            const response = await api.get<ObterValorTotalPatrocinioAluno.Response>(
                `alunos/${request.id_aluno}/patrocinios/valor-total`
            )
            return response.data
        },
    })
}

export const useObterValorTotalPatrocinioOrientador = (
    request: ObterValorTotalPatrocinioOrientador.Request
) => {
    return useQuery({
        queryKey: [QueryKeys.obterValorTotalPatrocinioOrientador, request.id_orientador],
        enabled: !!request.id_orientador,
        queryFn: async () => {
            const response = await api.get<ObterValorTotalPatrocinioOrientador.Response>(
                `orientadores/${request.id_orientador}/patrocinios/valor-total`
            )
            return response.data
        },
    })
}

export const usePatrocinar = () => {
    return useMutation({
        mutationFn: async (request: Patrocinar.Request) => {
            const response = await api.post<Patrocinar.Response>("patrocinios", request)
            return response.data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaKey.obterEmpresas] })
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaKey.obterEmpresaPorId] })
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaKey.obterEmpresaProjetos] })
            nexusQueryClient.invalidateQueries({
                queryKey: [EmpresaKey.obterProjetosPatrocinadosPorEmpresa],
            })
        },
    })
}

export const useApoiar = () => {
    return useMutation({
        mutationFn: async (request: Apoiar.Request) => {
            const response = await api.post<Apoiar.Response>("apoios", request)
            return response.data
        },
    })
}
