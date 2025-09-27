import { Enum } from "../enum/enum"

export const enum QueryKeys {
    obterPatrociniosPorProjetoAluno = "obterPatrociniosPorProjetoAluno",
    obterPatrociniosPorProjetoOrientador = "obterPatrociniosPorProjetoOrientador",
    obterValorTotalPatrocinioAluno = "obterValorTotalPatrocinioAluno",
    obterValorTotalPatrocinioOrientador = "obterValorTotalPatrocinioOrientador",
}

export type Patrocinio = {
    id_empresa: number
    id_projeto: number
    data_patrocinio: string
    tipo_apoio: Enum.TipoApoio
    mensagem: string | null
    valorPatrocinio: number | null
}

export type Apoio = {
    id_visitante: number
    id_projeto: number
    data_apoio: string
    tipo_apoio: Enum.TipoApoio
    mensagem: string | null
    valorApoio: number | null
}

export namespace Patrocinar {
    export type Request = Patrocinio

    export type Response = Patrocinio
}

export namespace Apoiar {
    export type Request = Apoio

    export type Response = Apoio
}

export namespace ObterPatrociniosPorProjetoAluno {
    export type Request = {
        id_projeto: number
        id_aluno: number
    }

    export type Response = { id_projeto: number; valor: number }
}

export namespace ObterPatrociniosPorProjetoOrientador {
    export type Request = {
        id_projeto: number
        id_orientador: number
    }

    export type Response = { id_projeto: number; valor: number }
}

export namespace ObterValorTotalPatrocinioAluno {
    export type Request = {
        id_aluno: number
    }

    export type Response = { id_aluno: number; valor: number }
}

export namespace ObterValorTotalPatrocinioOrientador {
    export type Request = {
        id_orientador: number
    }
    export type Response = { id_orientador: number; valor: number }
}
