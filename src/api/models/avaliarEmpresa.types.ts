export type Avaliacao = {
    id_avaliacao: number
    id_empresa: number
    estrelas: number
    data_avaliacao: string
}

export namespace AvaliarEmpresa {
    export type Request = {
        id_empresa: number
        estrelas: number
    }

    export type Response = {
        message: string
        data: Avaliacao
    }
}
