import { useMutation } from "@tanstack/react-query"
import { AvaliarEmpresa } from "../models/avaliarEmpresa.types"
import { api, nexusQueryClient } from "../../lib/config/axios"
import { EmpresaQueryKeys } from "../models/empresa.types"

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
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaQueryKeys.obterEmpresas] })
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaQueryKeys.obterEmpresaPorId] })
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaQueryKeys.obterEmpresaProjetos] })
        },
    })
}
