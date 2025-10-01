import { useQuery } from "@tanstack/react-query"
import { api } from "../../lib/config/axios"
import { Orientador, OrientadorQueryKeys } from "../models/orientador.types"

export const useListagemOrientadores = () => {
    return useQuery({
        queryKey: [OrientadorQueryKeys.LISTAGEM_ORIENTADORES],
        queryFn: async () => {
            const {data} = await api.get<Orientador.Response>("orientadores/emails")
            return data
        }
    })
}