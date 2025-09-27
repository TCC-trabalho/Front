import { Projeto } from "./projeto.type"

export enum QueryKeys {
    obterProjetosApoiadosPorVisitante = "obterProjetosApoiadosPorVisitante",
}

export namespace ObterProjetosApoiadosPorVisitante {
    export type Request = { id_visitante: number }

    export type Response = { total_projetos: number; projetos_apoiados: Projeto[] }
}
