import { SxProps, Theme } from "@mui/material"
import { Control, FieldValues, Path } from "react-hook-form"

export type InputDropdownItem = { id: number | string } & Record<string | number, unknown>

export type InputDropdownOptionProps = React.HTMLAttributes<HTMLLIElement> & {
    key: unknown
}

export namespace InputDropdownProps {
    export type NormalProps<
        ItemOpcao extends InputDropdownItem,
        Valor extends ItemOpcao | ItemOpcao[]
    > = {
        opcoes: ItemOpcao[]
        placeholder?: string
        label?: string
        readOnly?: boolean
        disabled?: boolean
        multiplo?: boolean
        isCarregandoDados?: boolean
        erro?: string
        onInputChange?: (valor: string) => void
        value?: Valor | null | undefined
        onChange?: (value: Valor | null) => void
        renderizarLabel: (opcao: ItemOpcao) => string | undefined
        deveDesabilitarOpcao?: (opcao: ItemOpcao) => boolean
        renderizarOpcao?: (props: InputDropdownOptionProps, opcao: ItemOpcao) => React.ReactNode
    }

    export interface ControladoProps<
        ItemOpcao extends InputDropdownItem,
        Valor extends ItemOpcao | ItemOpcao[],
        TFieldValues extends FieldValues
    > extends Omit<NormalProps<ItemOpcao, Valor>, "onChange" | "value" | "erro"> {
        control: Control<TFieldValues>
        name: Path<TFieldValues>
        retornarSomenteId?: boolean
        retornarSomenteNome?: boolean
    }
}

export type Estilos = {
    input: (params: { erro: boolean }) => SxProps<Theme>
    popper: SxProps<Theme>
}
