import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormEmpresa } from "./FormEmpresa.hook"

export const FormEmpresa = () => {
    const { control, onSubmit } = useFormEmpresa()

    return (
        <Stack
            component={"form"}
            gap={3}
        >
            <Input
                placeholder="Digite o CNPJ da sua empresa"
                control={control}
                name={"cnpj"}
                tamanho={"sm"}
                label="Cnpj"
                fullWidth
            />

            <Input
                type="password"
                placeholder="Digite a senha da sua empresa"
                control={control}
                name={"senha"}
                tamanho={"sm"}
                label="Senha"
                fullWidth
            />

            <Stack alignItems={"center"}>
                <Button
                    tamanho={"lg"}
                    onClick={onSubmit}
                >
                    Entrar
                </Button>
            </Stack>
        </Stack>
    )
}
