import { useQuery } from "@tanstack/react-query"
import { AlunoQueryKeys, ObterAlunos } from "../models/aluno.types"
import { api } from "../../lib/config/axios"

export const useObterAlunos = () => {
   return useQuery({
        queryKey: [AlunoQueryKeys.LISTAR_ALUNOS],
        queryFn: async () => {
            const { data } = await api.get<ObterAlunos.Resposta>("alunos")
            return data
        },
    })
}
