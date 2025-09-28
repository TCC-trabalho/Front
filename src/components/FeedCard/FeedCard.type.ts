import { ButtonBaseProps } from "@mui/material"

export interface FeedCardProps extends ButtonBaseProps {
    variante: "projeto" | "empresa"
    imagemUrl: string
    titulo: string
    area: string
    organizacao?: string
    integrantes?: number
    descricao: string
    avaliacao?: number
    loading?: boolean
    to?: string
    viewTransition?: boolean
}
