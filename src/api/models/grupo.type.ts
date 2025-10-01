export enum GrupoQueryKeys {
    ObterIntegrantes = "obterIntegrantes",
}

export type Grupo = {
    id?: string
    nome: string
    descricao: string
    data_criacao: string
}

export type Integrante = {
    id?: string
    email: string
}

export type IntegranteCompleto = {
    id_aluno: number
    nomeUsuario?: string
    nome: string
    email: string
}

export namespace ObterIntegrantes {
    export type Request = {
        idGrupo: number
    }

    export type Response = IntegranteCompleto[]
}

export namespace ExcluirIntegrante {
    export type Request = {
        idGrupo: number
        idAluno: number
    }

    export type Response = { message: string }
}
