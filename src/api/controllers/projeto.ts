import { useMutation } from "@tanstack/react-query"
import { api } from "../../lib/config/axios"
import { Grupo } from "../models/projeto.type"

export const useCadastrarGrupo = () => {
    return useMutation({
        mutationFn: async (request: Grupo) => {
            const { data } = await api.post("grupos", request)
            return data
        }
    })
}