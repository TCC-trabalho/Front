export enum QueryKeys {
    ObterInstituicoes = "ObterInstituicoes",
}

export type instituicao = {
    id: number
    nome_instituicao: string
    classificacao: string
}

export namespace ObterInsituicoes {
    export type Response = {
        data: instituicao[]
    }
}
