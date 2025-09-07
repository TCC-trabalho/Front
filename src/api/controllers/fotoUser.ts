import { useQuery } from "@tanstack/react-query"
import { FotoUser, IntegranteFoto, QueryKey } from "../models/fotoUser.types"
import axios from "axios"
import { useUser } from "../../lib/hooks/useUser"

export const useObterFotoUser = (request: FotoUser.Request) => {
    const { user } = useUser()

    return useQuery({
        enabled: !!request.nomeUser && (!!user.aluno || !!user.orientador),
        queryKey: [QueryKey.ObterFotoUser, request],
        queryFn: async () => {
            const { data } = await axios.get<string>(
                `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(request.nomeUser)}`,
                {
                    responseType: "text",
                    headers: { Accept: "image/svg+xml" },
                }
            )
            return `data:image/svg+xml;utf8,${encodeURIComponent(data)}`
        },
    })
}

export const useObterFotoIntegrantes = (request: IntegranteFoto.Request) => {
    return useQuery({
        enabled: !!request?.length,
        queryKey: [QueryKey.ObterFotoIntegrantes, (request ?? []).map((i) => i.nomeUsuario ?? i.nome)],
        queryFn: () => {
            return (request ?? []).map((i) => {
                const seed = (i.nomeUsuario?.trim() || i.nome.trim() || "user").toString()
                const url = `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodeURIComponent(seed)}`
                return {
                    id_aluno: i.id_aluno,
                    nome: i.nome,
                    email: i.email,
                    seed,
                    src: url,
                }
            })
        },
        staleTime: Infinity,
    })
}
