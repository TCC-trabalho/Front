import { Controller, FieldValues } from "react-hook-form";
import { EstiloInput, InputProps } from "./Input.type";
import { Box, Stack, Typography } from "@mui/material";
import * as Styled from "./Input.styled"
import { CircleAlert } from "lucide-react";
import { mask } from "remask";

export const Input = <TFieldValues extends FieldValues>({
    control,
    name,
    endAdornment,
    tamanho = "sm",
    Icon,
    label,
    ...props
}: InputProps<TFieldValues>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const defaultProps: EstiloInput = {
                    ...props,
                    ...field,
                    id: name,
                    name,
                    value: field.value || "",
                    erro: error?.message,
                    inputRef: field.ref,
                    tamanho,
                    endAdornment: !error?.message ? (
                        endAdornment
                    ) : (
                        <Stack>
                            <CircleAlert size={20} color="#A91208" />
                        </Stack>
                    ),
                }
                return (
                    <Stack
                        position="relative"
                        sx={{
                            "&:focus-within .input-label": {
                                transform: "scale(1.1)",
                                transition: "transform 0.2s ease",
                            },
                        }}
                    >
                        {label && (
                            <Typography
                                className="input-label"
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

                        {Icon && (
                            <Box position="absolute" left={12} top="50%" sx={{ transform: "translateY(-50%)" }}>
                                <Icon size={20} color="#999" />
                            </Box>
                        )}

                        <Styled.Input
                            {...defaultProps}
                            onChange={(e) => {
                                const rawValue = e.target.value;
                                const masked = props.mask
                                    ? mask(rawValue, [props.mask])
                                    : rawValue;
                                field.onChange(masked);
                            }}
                        />

                        <Typography variant="body2" color="#A91208" mt={0.5}>
                            {error?.message || " "}
                        </Typography>
                    </Stack>
                );
            }}
        />
    )
}