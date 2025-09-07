export type Grupo = {
    id?: string
    nome: string
    descricao: string
    data_criacao: string
}

export type Integrante = {
    id?: string
    email: string[]
}

export type IntegranteCompleto = {
    id_aluno: number
    nomeUsuario?: string
    nome: string
    email: string
}