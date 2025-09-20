import { Control, FieldValues, Path } from "react-hook-form"
import { SelectProps as MuiSelectProps } from "@mui/material"

export interface SelectOption {
    value: string | number
    label: string
    disabled?: boolean
}

export interface SelectProps<TFieldValues extends FieldValues> extends Omit<MuiSelectProps, "name"> {
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    label?: string
    options: SelectOption[]
    tamanho?: "sm" | "md"
    placeholder?: string
}
