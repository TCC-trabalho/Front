import { Enum } from "../enum/enum"

export namespace EnviarCodigo {
    export interface Request {
        email: string
        tipo_user: Enum.TipoUsuario
    }

    export interface Response {
        message: string
    }
}

export namespace VerificarCodigo {
    export interface Request {
        email: string
        codigo: string
    }

    export interface Response {
        message: string
    }
}

export namespace TrocarSenha {
    export interface Request {
        email: string
        nova_senha: string
        nova_senha_confirmation: string
        tipo_user: Enum.TipoUsuario
        codigo: string
    }

    export interface Response {
        message: string
    }
}