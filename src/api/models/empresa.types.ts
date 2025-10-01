import { Projeto } from "./projeto.type"

export enum EmpresaQueryKeys {
    obterEmpresas = "obterEmpresas",
    obterEmpresaPorId = "obterEmpresaPorId",
    obterEmpresaProjetos = "obterEmpresasPorId",
    obterProjetosPatrocinadosPorEmpresa = "obterProjetosPatrocinadosPorEmpresa",
}

export interface Empresa {
    id_empresa: number
    foto: string
    nome: string
    descricao: string
    setor: string
    cnpj: string
    endereco: string
    email: string
    telefone: string
    qnt_projetos_patrocinados: number
    avaliacao: number
}

export namespace ObterEmpresas {
    export type Response = Empresa[]
}

export namespace ObterEmpresaPorId {
    export type Request = {
        id_empresa: number
    }
    export type Response = Empresa
}

export namespace obterEmpresaProjetos {
    export type Request = {
        id_empresa: number
    }

    export type Response = { empresa: Empresa; total_projetos: number; projetos_patrocinados: Projeto[] }
}

export namespace ObterProjetosPatrocinadosPorEmpresa {
    export type Request = {
        id_empresa: number
    }

    export type Response = { total_projetos: number; projetos_patrocinados: Projeto[] }
}

export namespace EditarEmpresa {
    export type Request = {
        foto: File | null
        nome: string
        descricao: string | null
        setor: string
        telefone: string
        senha?: string
    }

    export type Response = Empresa
}
