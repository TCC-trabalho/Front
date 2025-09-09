import { useMutation } from "@tanstack/react-query"
import { AvaliarEmpresa } from "../models/avaliarEmpresa.types"
import { api, nexusQueryClient } from "../../lib/config/axios"
import { QueryKeys } from "../models/empresa.types"

export const useAvaliarEmpresa = () => {
    return useMutation({
        mutationFn: async (request: AvaliarEmpresa.Request) => {
            const response = await api.post<AvaliarEmpresa.Response>(
                `empresas/${request.id_empresa}/avaliacoes`,
                request
            )
            return response.data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [QueryKeys.obterEmpresas] })
            nexusQueryClient.invalidateQueries({ queryKey: [QueryKeys.obterEmpresaPorId] })
            nexusQueryClient.invalidateQueries({ queryKey: [QueryKeys.obterEmpresaProjetos] })
        },
    })
}
