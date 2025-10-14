import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormOrientador } from "./FormOrientador.hook"

export const FormOrientador = () => {
    const { control, onSubmit, isPending } = useFormOrientador()

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

            <Stack
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                    },
                    gap: 2,
                }}
            >
                <Input
                    placeholder="Digite seu telefone"
                    type="tel"
                    control={control}
                    name={"telefone"}
                    tamanho={"sm"}
                    label="Telefone"
                    mask="(99) 99999-9999"
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
            </Stack>

            <Input
                placeholder="Digite sua formação"
                control={control}
                name={"formacao"}
                tamanho={"sm"}
                label="Formação"
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
                    loading={isPending}
                    espacamento={40}
                >
                    Cadastrar
                </Button>
            </Stack>
        </Stack>
    )
}
