import { useQuery } from "@tanstack/react-query"
import { ObterInsituicoes, QueryKeys } from "../models/instituicao.types"
import { api } from "../../lib/config/axios"

export const useObterInstituicoes = () => {
    return useQuery({
        queryKey: [QueryKeys.ObterInstituicoes],
        queryFn: async () => {
            const { data } = await api.get<ObterInsituicoes.Response>("instituicoes")
            return data
        },
    })
}
