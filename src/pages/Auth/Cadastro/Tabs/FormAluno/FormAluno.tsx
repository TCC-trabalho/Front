import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormAluno } from "./FormAluno.hook"
import { Select } from "../../../../../components/select/Select"

export const FormALuno = () => {

    const {
        control,
        onSubmit
    } = useFormAluno()

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

                <Input
                    placeholder="Digite sua data de nascimento"
                    type="date"
                    control={control}
                    name={"dataNascimento"}
                    tamanho={"sm"}
                    label="Data de nascimento"
                    fullWidth
                />

                <Input
                    placeholder="Digite seu curso"
                    control={control}
                    name={"curso"}
                    tamanho={"sm"}
                    label="Curso"
                    fullWidth
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
            />

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
                <Button
                    tamanho={"lg"}
                    onClick={onSubmit}
                    to="/login"
                    viewTransition
                >
                    Cadastrar
                </Button>
            </Stack>

        </Stack>
    )
}