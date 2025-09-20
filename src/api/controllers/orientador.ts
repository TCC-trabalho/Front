import { useQuery } from "@tanstack/react-query"
import { Orientador, Querykeys } from "../models/orientador.types"
import { api } from "../../lib/config/axios"

export const useListagemOrientadores = () => {
    return useQuery({
        queryKey: [Querykeys.LISTAGEM_ORIENTADORES],
        queryFn: async () => {
            const {data} = await api.get<Orientador.Response>("orientadores/emails")
            return data
        }
    })
}