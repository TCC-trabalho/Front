import { useMutation, useQuery } from "@tanstack/react-query"
import {
    EditarEmpresa,
    ObterEmpresaPorId,
    obterEmpresaProjetos,
    ObterEmpresas,
    ObterProjetosPatrocinadosPorEmpresa,
    EmpresaQueryKeys,
} from "../models/empresa.types"
import { api, nexusQueryClient } from "../../lib/config/axios"

export const useObterEmpresas = () => {
    return useQuery({
        queryKey: [EmpresaQueryKeys.obterEmpresas],
        queryFn: async () => {
            const { data } = await api.get<ObterEmpresas.Response>("empresas")
            return data
        },
    })
}

export const useObterEmpresaPorId = (request: ObterEmpresaPorId.Request) => {
    return useQuery({
        enabled: !!request.id_empresa,
        queryKey: [EmpresaQueryKeys.obterEmpresaPorId, request.id_empresa],
        queryFn: async () => {
            const { data } = await api.get<ObterEmpresaPorId.Response>(`empresa/${request.id_empresa}`)
            return data
        },
    })
}

export const useObterEmpresasProjetos = (request: obterEmpresaProjetos.Request) => {
    return useQuery({
        enabled: !!request.id_empresa,
        queryKey: [EmpresaQueryKeys.obterEmpresaProjetos, request.id_empresa],
        queryFn: async () => {
            const { data } = await api.get<obterEmpresaProjetos.Response>(
                `empresas/${request.id_empresa}/projetos`
            )
            return data
        },
    })
}

export const useObterProjetosPatrocinadosPorEmpresa = (
    request: ObterProjetosPatrocinadosPorEmpresa.Request
) => {
    return useQuery({
        enabled: !!request.id_empresa,
        queryKey: [EmpresaQueryKeys.obterProjetosPatrocinadosPorEmpresa, request.id_empresa],
        queryFn: async () => {
            const { data } = await api.get<ObterProjetosPatrocinadosPorEmpresa.Response>(
                `empresas/${request.id_empresa}/projetos-patrocinados`
            )
            return data
        },
    })
}

// Mutations

export const useAtualizarEmpresa = (id_empresa: number) => {
    return useMutation({
        mutationFn: async (request: FormData | EditarEmpresa.Request) => {
            const isForm = typeof FormData !== "undefined" && request instanceof FormData

            if (isForm) {
                request.append("_method", "PUT")
                const { data } = await api.post(`empresa/${id_empresa}`, request, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                return data
            } else {
                const { data } = await api.put(`empresa/${id_empresa}`, request)
                return data
            }
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaQueryKeys.obterEmpresas] })
            nexusQueryClient.invalidateQueries({
                queryKey: [EmpresaQueryKeys.obterEmpresaPorId, id_empresa],
            })
            nexusQueryClient.invalidateQueries({
                queryKey: [EmpresaQueryKeys.obterEmpresaProjetos, id_empresa],
            })
        },
    })
}
