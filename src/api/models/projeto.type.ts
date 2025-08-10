export type Projeto = {
    id_projeto?: number
    imagemUrl?: string
    organizacao?: string
    integrantes?: number
    titulo: string
    descricao: string
    area: string
    data_criacao: string
    objetivo: string | null
    justificativa: string | null
    senha_acesso: string
    id_grupo: number
    grupo?: {
        id_grupo: number
        integrantes: {
            id_aluno: number
            nomeUsuario?: string
            nome: string
            email: string
        }[]
    }
    id_orientador: number
    qnt_empresas_patrocinam: number
    status: string
}

export type ListaProjetosResponse = { total: number; projetos: Projeto[] }
