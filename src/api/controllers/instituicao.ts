import { useQuery } from "@tanstack/react-query"
import { ObterInsituicoes, QueryKeys } from "../models/instituicao.types"
import axios from "axios"

export const useObterInstituicoes = (request: ObterInsituicoes.Request) => {
    return useQuery({
        queryKey: [QueryKeys.ObterInstituicoes, request],
        queryFn: async () => {
            const { data } = await axios.get<ObterInsituicoes.Response>(
                `https://app.feteps.cpscetec.com.br/appfeteps/pages/Institution/get.php?&limit=${request.limit}`,
                {
                    params: {
                        type: request.type,
                        name: request.name,
                        page: request.page,
                        limit: request.limit,
                    },
                }
            )
            return data
        },
    })
}
