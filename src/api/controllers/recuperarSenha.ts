import { useMutation } from "@tanstack/react-query"
import { api } from "../../lib/config/axios"
import { EnviarCodigo, TrocarSenha, VerificarCodigo } from "../models/recuperarSenha.types"

export const useEnviarCodigo = () => {
    return useMutation({
        mutationFn: async (request: EnviarCodigo.Request) => {
            await api.post<EnviarCodigo.Response>("senha/enviar-codigo", request)
        },
    })
}

export const useValidarCodigo = () => {
    return useMutation({
        mutationFn: async (request: VerificarCodigo.Request) => {
            await api.post<VerificarCodigo.Response>("senha/verificar-codigo", request)
        },
    })
}

export const useRedefinirSenha = () => {
    return useMutation({
        mutationFn: async (request: TrocarSenha.Request) => {
            await api.post<TrocarSenha.Response>("senha/redefinir", request)
        },
    })
}
