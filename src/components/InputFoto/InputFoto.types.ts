import { Control, FieldValues, Path } from "react-hook-form"

export interface InputFotoProps<TFieldValues extends FieldValues>{
    label: string
    value?: File | null
    initialUrl?: string | null
    disabled?: boolean
    name: Path<TFieldValues>
    control: Control<TFieldValues>
}

