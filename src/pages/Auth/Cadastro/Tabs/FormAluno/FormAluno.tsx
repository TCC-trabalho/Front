import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormAluno } from "./FormAluno.hook"
import { Select } from "../../../../../components/select/Select"

export const FormALuno = () => {
    const { control, onSubmit, isPending } = useFormAluno()

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
                <Input
                    placeholder="Digite sua data de nascimento"
                    type="date"
                    control={control}
                    name={"dataNascimento"}
                    tamanho={"sm"}
                    label="Data de nascimento"
                    fullWidth
                    disabled={isPending}
                />

                <Input
                    placeholder="Digite seu curso"
                    control={control}
                    name={"curso"}
                    tamanho={"sm"}
                    label="Curso"
                    fullWidth
                    disabled={isPending}
                />
            </Stack>

            <Select
                control={control}
                name="instituicao"
                label="Instituição"
                placeholder="Selecione sua instituição"
                tamanho="md"
                options={[
                    { value: 2, label: "ETEC" },
                    { value: 3, label: "FATEC" },
                ]}
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
                >
                    Cadastrar
                </Button>
            </Stack>
        </Stack>
    )
}
