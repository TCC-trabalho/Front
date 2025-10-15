import { Stack } from "@mui/material"
import { Input } from "../../../../components/Input/Input"
import { Button } from "../../../../components/Button/Button"
import { useVerificarEmail } from "./VerificarEmail.hook"

export const VerificarEmail = () => {
    const { control, onSubmit, isEnviandoCodigo } = useVerificarEmail()

    return (
        <>
            <Stack
                gap={3}
                width={"80%"}
                component={"form"}
                onSubmit={onSubmit}
            >
                <Input
                    control={control}
                    label="E-mail"
                    name="email"
                    type="email"
                    disabled={isEnviandoCodigo}
                    placeholder="Digite seu e-mail"
                    tamanho="md"
                />

                <Button
                    tamanho="md"
                    variante="ButtonBlue"
                    type="submit"
                    loading={isEnviandoCodigo}
                >
                    Enviar
                </Button>
            </Stack>
        </>
    )
}
