import { useMutation } from "@tanstack/react-query"
import {
    CadastroAluno,
    CadastroEmpresa,
    CadastroProfessor,
    CadastroVisitante,
    LoginPayload,
} from "../models/auth.type"
import { api, nexusQueryClient } from "../../lib/config/axios"
import { AlunoQueryKeys } from "../models/aluno.types"
import { OrientadorQueryKeys } from "../models/orientador.types"
import { EmpresaQueryKeys } from "../models/empresa.types"

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
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [AlunoQueryKeys.LISTAR_ALUNOS] })
        },
    })
}

export const useCadastroProfessor = () => {
    return useMutation({
        mutationFn: async (request: CadastroProfessor) => {
            const { data } = await api.post("orientadores", request)
            return data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [OrientadorQueryKeys.LISTAGEM_ORIENTADORES] })
        },
    })
}

export const useCadastroEmpresa = () => {
    return useMutation({
        mutationFn: async (request: CadastroEmpresa) => {
            const { data } = await api.post("empresas", request)
            return data
        },
        onSuccess: () => {
            nexusQueryClient.invalidateQueries({ queryKey: [EmpresaQueryKeys.obterEmpresas] })
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
