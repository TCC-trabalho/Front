import { Enum } from "../enum/enum"

export namespace UsuarioLogado {
    export interface Aluno {
        id_aluno: number
        nome: string
        nomeUsuario: string
        email: string
        biografia: string
        curso: string
        inst_ensino: string
        nascimento: string
        telefone: string
        tipoUser: Enum.TipoUsuario
        qtn_projetos: string
        senha: string
    }

    export interface Orientador {
        id_orientador: number
        nome: string
        nomeUsuario: string
        email: string
        biografia: string
        cpf: string
        rg: string
        formacao: string
        telefone: string
        tipoUser: Enum.TipoUsuario
        qtn_projetos: string
        senha: string
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
        senha: string
        tipoUser: Enum.TipoUsuario
        avaliacao: string
        qnt_projetos_patrocinados: string
    }
}

export type UsuarioGenerico = {
    aluno?: UsuarioLogado.Aluno
    orientador?: UsuarioLogado.Orientador
    empresa?: UsuarioLogado.Empresa
}
