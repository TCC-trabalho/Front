export enum AlunoQueryKeys {
    LISTAR_ALUNOS = "LISTAR_ALUNOS",
}

export type Aluno = {
    id_aluno: number;
    nome: string;
    email: string;
}

export namespace ObterAlunos {
    export type Resposta = Aluno[];
}