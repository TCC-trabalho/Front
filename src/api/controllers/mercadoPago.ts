import { useMutation, useQuery } from "@tanstack/react-query"
import {
    ConectarConta,
    CriarPagamento,
    MercadoPagoQueryKes,
    ObterStatusConta,
} from "../models/MercadoPago.types"
import { api } from "../../lib/config/axios"

export const useObterStatusConta = (request: ObterStatusConta.Request) => {
    return useQuery({
        enabled: !!request.id_usuario && !!request.tipo_usuario,
        queryKey: [MercadoPagoQueryKes.statusConta, request],
        queryFn: async () => {
            const response = await api.get<ObterStatusConta.Response>(
                `mercadopago/status?id_usuario=${request.id_usuario}&tipo_usuario=${request.tipo_usuario}`
            )
            return response.data
        },
    })
}

export const useConectarConta = (request: ConectarConta.Request) => {
    return useMutation({
        mutationFn: async () => {
            const response = await api.get<ConectarConta.Response>(
                `mercadopago/connect?id_usuario=${request.id_usuario}&tipo_usuario=${request.tipo_usuario}`
            )
            return response.data
        },
    })
}

export const useCriarPagamento = () => {
    return useMutation({
        mutationFn: async (request: CriarPagamento.Request) => {
            const response = await api.post<CriarPagamento.Response>(
                `pagamentos/pix/${request.id_projeto}`,
                request
            )
            return response.data
        },
    })
}
