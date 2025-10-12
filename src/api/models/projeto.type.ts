import { Enum } from "../enum/enum"

export type Projeto = {
    id_projeto: number
    foto: string
    organizacao?: string
    integrantes?: number
    titulo: string
    descricao: string
    area: string
    data_criacao: string
    objetivo: string | null
    justificativa: string | null
    id_grupo: number
    grupo: {
        id_grupo: number
        integrantes: {
            id_aluno: number
            nomeUsuario?: string
            nome: string
            email: string
        }[]
    }
    id_orientador: number
    nome_orientador?: string
    id_gestor_financeiro: number | null
    tipo_gestor: Enum.TipoUsuario | null
    qnt_empresas_patrocinam: number
    status: string
}

export type ListaProjetosResponse = { total: number; projetos: Projeto[] }

export namespace AtualizarProjeto {
    export type Request = {
        foto: File | null
        titulo: string
        descricao: string
        area: string
        status: string
        objetivo: string | null
        justificativa: string | null
    }
    export type Response = Projeto
}

export namespace VincularGestorFinanceiro {
    export type DetalhesProjeto = {
        id_projeto: number
        foto: string
        titulo: string
        descricao: string
        area: string
        data_criacao: string
        objetivo: string | null
        justificativa: string | null
        id_grupo: number
        id_orientador: number
        id_gestor_financeiro: number | null
        tipo_gestor: Enum.TipoUsuario | null
        qnt_empresas_patrocinam: number
        status: string
    }

    export type Request = {
        id_usuario: number
        id_projeto: number
        tipo_usuario: Enum.TipoUsuario | null
    }

    export type Response = { mensagem: string; projeto: DetalhesProjeto }
}
