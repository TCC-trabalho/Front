import { StackProps } from "@mui/material"
import { LucideIcon } from "lucide-react"

export interface FormTabOption {
    label: string
    icon?: LucideIcon
    titulo: string
    subtitulo: string
    content: React.ReactNode
    to: string
    toRecuperarSenha?: string
}

export interface FormContainerProps extends StackProps {
    variante: "login" | "cadastro"
    tabs?: FormTabOption[]
}
