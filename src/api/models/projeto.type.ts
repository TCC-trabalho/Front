export type Grupo = {
    id?: string;
    nome: string;
    descricao: string;
    data_criacao: Date;
}

export type Projeto = {
    id?: string;
    nome: string;
    descricao: string;
    data_criacao: Date;
    data_inicio: Date;
    data_fim: Date;
    grupo_id: string;
}