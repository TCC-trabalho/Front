import { useMutation } from "@tanstack/react-query"
import { CadastroAluno, CadastroEmpresa, CadastroProfessor, LoginAluno, LoginEmpresa, LoginProfessor } from "../models/auth.type"
import { api } from "../../lib/config/axios"


// Login da plataforma

export const useLoginAluno = () => {
  return useMutation({
    mutationFn: async (request: LoginAluno) => {
      const { data } = await api.post("/login", request)
      return data
    }
  })
}

export const useLoginProfessor = () => {
  return useMutation({
    mutationFn: async (request: LoginProfessor) => {
      const { data } = await api.post("/login", request)
      return data
    }
  })
}

export const useLoginEmpresa = () => {
  return useMutation({
    mutationFn: async (request: LoginEmpresa) => {
      const { data } = await api.post("/login", request)
      return data
    }
  })
}

// Cadastro da plataforma

export const useCadastroAluno = () => {
  return useMutation({
    mutationFn: async (request: CadastroAluno) => {
      const { data } = await api.post("alunos", request)
      return data
    }
  })
}

export const useCadastroProfessor = () => {
  return useMutation({
    mutationFn: async (request: CadastroProfessor) => {
      const { data } = await api.post("orientadores", request)
      return data
    }
  })
}

export const useCadastroEmpresa = () => {
  return useMutation({
    mutationFn: async (request: CadastroEmpresa) => {
      const { data } = await api.post("empresas", request)
      return data
    }
  })
}