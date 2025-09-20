export enum Querykeys {
    LISTAGEM_ORIENTADORES = "LISTAGEM_ORIENTADORES",
}

export type listagemOrientadores = {
    id_orientador: number
    email: string
}

export namespace Orientador {
    export type Response = { data: listagemOrientadores[] }
}
