import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormOrientador } from "./FormOrientador.hook"

export const FormOrientador = () => {

    const {
        control,
        onSubmit
    } = useFormOrientador()

    return (

        <Stack component={"form"} gap={3}>

            <Input
                placeholder="Digite seu email"
                control={control}
                name={"email"}
                tamanho={"sm"}
                label="Email"
                fullWidth
            />

            <Input
                type="password"
                placeholder="Digite seu senha"
                control={control}
                name={"senha"}
                tamanho={"sm"}
                label="Senha"
                fullWidth
            />

            <Stack alignItems={"center"}>
                <Button tamanho={"lg"} onClick={onSubmit}>
                    Entrar
                </Button>
            </Stack>

        </Stack>
    )
}