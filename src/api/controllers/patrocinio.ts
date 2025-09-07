import { useMutation } from "@tanstack/react-query"
import { api } from "../../lib/config/axios"
import { Patrocinar } from "../models/patrocinio.types"

export const usePatrocinar = () => {
    return useMutation({
        mutationFn: async (request: Patrocinar.Request) => {
            const response = await api.post<Patrocinar.Response>("patrocinios", request)
            return response.data
        },
    })
}
