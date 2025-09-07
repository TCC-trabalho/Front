import { useQuery } from "@tanstack/react-query"
import { ObterEmpresaPorId, ObterEmpresas, QueryKeys } from "../models/empresa.types"
import { api } from "../../lib/config/axios"

export const useObterEmpresas = () => {
    return useQuery({
        queryKey: [QueryKeys.obterEmpresas],
        queryFn: async () => {
            const { data } = await api.get<ObterEmpresas.Response>("empresas")
            return data
        },
    })
}

export const useObterEmpresasPorId = (request: ObterEmpresaPorId.Request) => {
    return useQuery({
        enabled: !!request.id_empresa,
        queryKey: [QueryKeys.obterEmpresas, request.id_empresa],
        queryFn: async () => {
            const { data } = await api.get<ObterEmpresaPorId.Response>(`empresas/${request.id_empresa}/projetos`)
            return data
        },
    })
}
