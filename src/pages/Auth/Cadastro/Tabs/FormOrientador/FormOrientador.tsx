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
                placeholder="Digite seu nome completo"
                control={control}
                name={"nome"}
                tamanho={"sm"}
                label="Nome completo"
                fullWidth
            />

            <Input
                placeholder="Digite seu nome de usuário"
                control={control}
                name={"nomeUser"}
                tamanho={"sm"}
                label="Nome de usuário"
                fullWidth
            />

            <Stack
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)"
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
                />

                <Input
                    placeholder="Digite seu email"
                    type="email"
                    control={control}
                    name={"email"}
                    tamanho={"sm"}
                    label="Email"
                    fullWidth
                />

                <Input
                    placeholder="Digite seu CPF"
                    control={control}
                    name={"cpf"}
                    tamanho={"sm"}
                    label="CPF"
                    mask="999.999.999-99"
                    fullWidth
                />

                <Input
                    placeholder="Digite seu RG"
                    control={control}
                    name={"rg"}
                    tamanho={"sm"}
                    label="RG"
                    mask="99.999.999-9"
                    fullWidth
                />

            </Stack>

            <Stack
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)"
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
                />

                <Input
                    placeholder="Confirme sua senha"
                    type="password"
                    control={control}
                    name={"confirmarSenha"}
                    tamanho={"sm"}
                    label="Confirme sua senha"
                    fullWidth
                />

            </Stack>


            <Stack alignItems={"center"}>
                <Button tamanho={"lg"} onClick={onSubmit}>
                    Cadastrar
                </Button>
            </Stack>

        </Stack>
    )
}