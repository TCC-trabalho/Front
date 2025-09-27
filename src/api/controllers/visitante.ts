import { useQuery } from "@tanstack/react-query"
import { api } from "../../lib/config/axios"
import { ObterProjetosApoiadosPorVisitante, QueryKeys } from "../models/visitante"

export const useObterProjetosApoiadosPorVisitante = (
    request: ObterProjetosApoiadosPorVisitante.Request
) => {
    return useQuery({
        enabled: !!request.id_visitante,
        queryKey: [QueryKeys.obterProjetosApoiadosPorVisitante, request],
        queryFn: async () => {
            const { data } = await api.get<ObterProjetosApoiadosPorVisitante.Response>(
                `/visitantes/${request.id_visitante}/projetos-apoiados`
            )
            return data
        },
    })
}
