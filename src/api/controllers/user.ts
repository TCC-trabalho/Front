import { useMutation } from "@tanstack/react-query"
import { Atualizaruser } from "../models/user.type"
import { api } from "../../lib/config/axios"

export const useAtualizarDadosUsuario = (id: number, tipo: string) => {
    return useMutation({
        mutationFn: async (request: Atualizaruser) => {
            const { data } = await api.put(`/${tipo}/${id}`, request)
            return data
        },
    })
}
