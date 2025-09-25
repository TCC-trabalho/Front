import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormVisitante } from "./FormVisitante.hook"

export const FormVisitante = () => {
    const { control, onSubmit, isPending } = useFormVisitante()

    return (
        <Stack
            component={"form"}
            gap={3}
        >
            <Input
                placeholder="Digite seu email"
                control={control}
                name={"email"}
                tamanho={"sm"}
                label="Email"
                fullWidth
                disabled={isPending}
            />

            <Input
                type="password"
                placeholder="Digite seu senha"
                control={control}
                name={"senha"}
                tamanho={"sm"}
                label="Senha"
                fullWidth
                disabled={isPending}
            />

            <Stack alignItems={"center"}>
                <Button
                    tamanho={"lg"}
                    onClick={onSubmit}
                    loading={isPending}
                    espacamento={50}
                >
                    Entrar
                </Button>
            </Stack>
        </Stack>
    )
}
