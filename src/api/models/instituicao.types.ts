import { Enum } from "../enum/enum"

export enum QueryKeys{
    ObterInstituicoes = "ObterInstituicoes",
}

export type instituicao = {
    id: number
    name_institution: string
    state_institution: string
    city_institution: string
    classification: string
    code_institution: number
    country: string
    campus: string
}

export namespace ObterInsituicoes {
    export type Request = {
        type: Enum.TipoInstituicao | null
        name: string | null
        page: number | null
        limit: number | null
    }

    export type Response = {
        response: instituicao[]
    }
}