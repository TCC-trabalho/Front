import { useMutation } from "@tanstack/react-query"
import { CadastroAluno, CadastroEmpresa, CadastroProfessor, CadastroVisitante, LoginPayload } from "../models/auth.type"
import { api } from "../../lib/config/axios"

// Login da plataforma

export const useLogin = () => {
    return useMutation({
        mutationFn: async (request: LoginPayload) => {
            const { data } = await api.post("/login", request)
            return data
        },
    })
}

// Cadastro da plataforma

export const useCadastroAluno = () => {
    return useMutation({
        mutationFn: async (request: CadastroAluno) => {
            const { data } = await api.post("alunos", request)
            return data
        },
    })
}

export const useCadastroProfessor = () => {
    return useMutation({
        mutationFn: async (request: CadastroProfessor) => {
            const { data } = await api.post("orientadores", request)
            return data
        },
    })
}

export const useCadastroEmpresa = () => {
    return useMutation({
        mutationFn: async (request: CadastroEmpresa) => {
            const { data } = await api.post("empresas", request)
            return data
        },
    })
}

export const useCadastroVisitante = () => {
    return useMutation({
        mutationFn: async (request: CadastroVisitante) => {
            const { data } = await api.post("visitantes", request)
            return data
        },
    })
}
