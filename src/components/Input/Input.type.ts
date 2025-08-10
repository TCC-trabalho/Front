import { InputBaseProps } from "@mui/material"
import { LucideIcon } from "lucide-react"
import { Control, FieldValues, Path } from "react-hook-form"

export interface InputProps<TFieldValues extends FieldValues>
    extends Omit<EstiloInput, "name" | "erro"> {
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    Icon?: LucideIcon
    label?: string
    mask?: string
}

export interface EstiloInput extends Omit<InputBaseProps, "error"> {
    tamanho: "sm" | "md"
    erro?: string
}
