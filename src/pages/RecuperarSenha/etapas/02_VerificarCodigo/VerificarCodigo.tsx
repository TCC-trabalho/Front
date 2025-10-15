import { Stack, TextField, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { useVerificarCodigo } from "./VerificarCodigo.hook"

export const VerificarCodigo = () => {
    const {
        errors,
        handleChange,
        handleKey,
        handlePaste,
        onSubmit,
        refs,
        digits,
        handleReenviarCodigo,
        isReenviandoCodigo,
        isValidandoCodigo,
    } = useVerificarCodigo()

    return (
        <Stack
            gap={3}
            component="form"
            onSubmit={onSubmit}
        >
            <Stack
                direction="row"
                gap={2}
            >
                {digits.map((d, i) => (
                    <TextField
                        key={i}
                        value={d}
                        inputRef={(el) => (refs.current[i] = el!)}
                        onChange={(e) => handleChange(i, e.target.value)}
                        onKeyDown={(e) => handleKey(e, i)}
                        onPaste={handlePaste}
                        disabled={isReenviandoCodigo || isValidandoCodigo}
                        inputProps={{
                            inputMode: "numeric",
                            maxLength: 1,
                            style: { textAlign: "center", fontSize: 32, height: 80 },
                        }}
                        sx={{
                            width: 70,
                            border: `1px solid ${errors.codigo ? "#A91208" : "#064B72"}`,
                        }}
                    />
                ))}
            </Stack>
            {errors.codigo && (
                <Typography
                    color="#A91208"
                    textAlign="center"
                >
                    {errors.codigo.message}
                </Typography>
            )}

            <Stack gap={1.5}>
                <Button
                    type="submit"
                    variante="ButtonBlue"
                    tamanho="md"
                    disabled={isReenviandoCodigo}
                    loading={isValidandoCodigo}
                >
                    Verificar Código
                </Button>
                <Button
                    tamanho="sm"
                    variante="ButtonLink"
                    onClick={handleReenviarCodigo}
                    disabled={isValidandoCodigo}
                    loading={isReenviandoCodigo}
                >
                    Reenviar Código
                </Button>
            </Stack>
        </Stack>
    )
}
