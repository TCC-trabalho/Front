import { useMutation } from "@tanstack/react-query";
import { api } from "../../lib/config/axios";
import { Projeto } from "../models/projeto.type";

export const useCadastrarProjeto = () => {
    return useMutation({
        mutationFn: async (request: Projeto) => {
            const { data } = await api.post("projetos", request);
            return data;
        },
    });
}