import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormVisitante } from "./FormVisitante.hook"

export const FormVisitante = () => {
    const { control, onSubmit, isPending} = useFormVisitante()

    return (
        <Stack
            component={"form"}
            gap={3}
        >
            <Input
                placeholder="Digite seu nome completo"
                control={control}
                name={"nome"}
                tamanho={"sm"}
                label="Nome completo"
                fullWidth
                disabled={isPending}
            />

            <Input
                placeholder="Digite seu nome de usuário"
                control={control}
                name={"nomeUser"}
                tamanho={"sm"}
                label="Nome de usuário"
                fullWidth
                disabled={isPending}
            />

            <Input
                placeholder="Digite seu email"
                type="email"
                control={control}
                name={"email"}
                tamanho={"sm"}
                label="Email"
                fullWidth
                disabled={isPending}
            />

            <Stack
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                    },
                    gap: 2,
                }}
            >
                <Input
                    placeholder="Digite sua senha"
                    type="password"
                    control={control}
                    name={"senha"}
                    tamanho={"sm"}
                    label="Senha"
                    fullWidth
                    disabled={isPending}
                />

                <Input
                    placeholder="Confirme sua senha"
                    type="password"
                    control={control}
                    name={"confirmarSenha"}
                    tamanho={"sm"}
                    label="Confirme sua senha"
                    fullWidth
                    disabled={isPending}
                />
            </Stack>

            <Stack alignItems={"center"}>
                <Button
                    tamanho={"lg"}
                    onClick={onSubmit}
                    to="/login"
                    viewTransition
                    loading={isPending}
                    espacamento={40}
                >
                    Cadastrar
                </Button>
            </Stack>
        </Stack>
    )
}
