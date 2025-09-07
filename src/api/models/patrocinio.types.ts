import { Enum } from "../enum/enum"

export type Patrocinio = {
    id_empresa: number
    id_projeto: number
    data_patrocinio: string
    tipo_apoio: Enum.TipoApoio
    mensagem: string | null
    valorPatrocinio: number | null
}

export namespace Patrocinar {
    export type Request = Patrocinio

    export type Response = Patrocinio
}
