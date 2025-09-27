import { useMutation } from "@tanstack/react-query"
import { Atualizaruser } from "../models/user.type"
import { api, nexusQueryClient } from "../../lib/config/axios"
import { QueryKey } from "../models/fotoUser.types"

export const useAtualizarDadosUsuario = (id: number, tipo: string) => {
    return useMutation({
        mutationFn: async (request: Atualizaruser) => {
            const { data } = await api.put(`/${tipo}/${id}`, request)
            return data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({
                queryKey: [QueryKey.ObterFotoUser]
            })
        },
    })
}
