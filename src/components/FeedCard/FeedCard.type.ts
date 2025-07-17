import { StackProps } from "@mui/material";

export interface FeedCardProps extends StackProps {
    imagemUrl: string;
    titulo: string;
    area: string;
    organizacao?: string;
    integrantes?: number;
    descricao: string;
    avaliacao?: number;
    loading?: boolean;
}