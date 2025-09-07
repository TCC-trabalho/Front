import { Autocomplete, AutocompleteRenderInputParams, Stack, TextField, Typography } from "@mui/material"
import { InputDropdownItem, InputDropdownProps } from "./InputDropdown.types"
import { estilos } from "./InputDropdown.styles"
import { Controller, FieldValues } from "react-hook-form"
import { ChevronDown, X } from "lucide-react"

export const Normal = <ItemOpcao extends InputDropdownItem, Valor extends ItemOpcao | ItemOpcao[]>({
    opcoes,
    renderizarLabel,
    renderizarOpcao,
    disabled,
    multiplo,
    onChange,
    label,
    placeholder,
    readOnly,
    value,
    deveDesabilitarOpcao,
    erro,
    onInputChange,
    isCarregandoDados,
}: InputDropdownProps.NormalProps<ItemOpcao, Valor>) => {
    const obterLabelOpcao = (o: ItemOpcao) => renderizarLabel(o) || "-"
    const obterChaveOpcao = (o: ItemOpcao) => o.id
    const obterIgualdadeOpcao = (option: ItemOpcao, value: ItemOpcao) => option.id === value.id

    const obterInput = (params: AutocompleteRenderInputParams) => (
        <TextField
            placeholder={
                Array.isArray(value) && value.length > 0
                    ? `${value.length} ${value.length === 1 ? "item" : "itens"}`
                    : placeholder
            }
            {...params}
        />
    )

    const lidarAlteracao = (_: React.SyntheticEvent, value: ItemOpcao | ItemOpcao[] | null) => {
        onChange?.((multiplo ? value || [] : value || null) as Valor)
    }

    const lidarAlteracaoInput = (_: React.SyntheticEvent, value: string, reason: string) => {
        if (reason === "input") onInputChange?.(value)
    }

    return (
        <Stack
            gap={0.75}
            width="100%"
        >
            {label && (
                <Typography
                    variant="subtitle1"
                    color="#05334A"
                    fontWeight={500}
                    sx={{
                        display: "inline-block",
                        transition: "transform 0.2s ease",
                        transformOrigin: "left center",
                    }}
                >
                    {label}
                </Typography>
            )}

            <Autocomplete
                options={opcoes}
                disabled={disabled}
                readOnly={readOnly}
                multiple={multiplo}
                value={value || (multiplo ? [] : null)}
                isOptionEqualToValue={obterIgualdadeOpcao}
                getOptionKey={obterChaveOpcao}
                renderInput={obterInput}
                getOptionLabel={obterLabelOpcao}
                getOptionDisabled={deveDesabilitarOpcao}
                onChange={lidarAlteracao}
                renderOption={renderizarOpcao}
                onInputChange={lidarAlteracaoInput}
                clearText="Limpar"
                openText="Abrir"
                closeText="Fechar"
                loading={isCarregandoDados}
                loadingText="Buscando..."
                noOptionsText="Opção inválida"
                popupIcon={<ChevronDown />}
                clearIcon={<X />}
                sx={estilos.input({ erro: !!erro })}
                slotProps={{
                    chip: {
                        sx: { display: "none" },
                    },
                    popper: {
                        sx: estilos.popper,
                    },
                }}
            />

            {!!erro && (
                <Typography
                    variant="body2"
                    color="#A91208"
                >
                    {erro || " "}
                </Typography>
            )}
        </Stack>
    )
}

export const Controlado = <
    ItemOpcao extends InputDropdownItem,
    Valor extends ItemOpcao | ItemOpcao[],
    TFieldValues extends FieldValues
>({
    control,
    name,
    retornarSomenteId,
    ...inputDropdownNormalProps
}: InputDropdownProps.ControladoProps<ItemOpcao, Valor, TFieldValues>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                const opcoes = inputDropdownNormalProps.opcoes

                const valorAtual = (
                    Array.isArray(field.value)
                        ? opcoes.filter((e) => field.value?.includes(e.id))
                        : opcoes.find((e) => e.id === field.value)
                ) as Valor

                const handleOnChange = (e: Valor | null) => {
                    const isMultiplo = Array.isArray(e)

                    const novoValor =
                        (isMultiplo
                            ? retornarSomenteId
                                ? e.map((e) => e.id)
                                : e
                            : retornarSomenteId
                            ? e?.id
                            : e) || null

                    field.onChange(novoValor)
                }

                return (
                    <Normal
                        {...inputDropdownNormalProps}
                        value={valorAtual}
                        onChange={handleOnChange}
                        erro={fieldState.error?.message}
                    />
                )
            }}
        />
    )
}
