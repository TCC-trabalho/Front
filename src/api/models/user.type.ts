import { Enum } from "../enum/enum"

export type Atualizaruser = {
    senha?: string | null
    nomeUsuario?: string | null
    telefone?: string | null
    biografia?: string | null
    curso?: string | null
    formacao?: string | null
    inst_ensino?: string | null
}

export namespace DeletarConta {
    export type Request = {
        id: number
        tipo: Enum.TipoUsuario | null
    }

    export type Response = {
        message: string
    }
}
