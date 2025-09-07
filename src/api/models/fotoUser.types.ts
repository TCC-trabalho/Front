import { IntegranteCompleto } from "./grupo.type"

export enum QueryKey {
    ObterFotoUser = "ObterFotoUser",
    ObterFotoIntegrantes = "ObterFotoIntegrantes",
}

export namespace FotoUser {
    export type Request = {
        nomeUser: string
    }

    export type Response = {
        fotoUser: string
    }
}

export namespace IntegranteFoto {
    export type Request = 
       IntegranteCompleto[]
    

    export type Response = {
        fotoIntegrante: string
    }
}
