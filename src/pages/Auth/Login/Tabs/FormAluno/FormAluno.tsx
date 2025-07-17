import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { useFormAluno } from "./FormAluno.hook"
import { Button } from "../../../../../components/Button/Button"

export const FormALuno = () => {

    const {
        control,
        onSubmit
    } = useFormAluno()

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
                <Button 
                tamanho={"lg"} 
                onClick={onSubmit}
                to="plataforma-nexus"
                viewTransition
                >
                    Entrar
                </Button>
            </Stack>

        </Stack>
    )
}