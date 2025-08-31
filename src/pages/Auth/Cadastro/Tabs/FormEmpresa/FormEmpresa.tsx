import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormEmpresa } from "./FormEmpresa.hook"
import { Select } from "../../../../../components/select/Select"

export const FormEmpresa = () => {
    const { control, onSubmit, isPending } = useFormEmpresa()

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
                    placeholder="Digite seu CNPJ"
                    control={control}
                    name={"cnpj"}
                    tamanho={"sm"}
                    label="CNPJ"
                    mask="99.999.999/9999-99"
                    fullWidth
                    disabled={isPending}
                />

                <Input
                    placeholder="Ex: UF-PAIS"
                    control={control}
                    name={"endereco"}
                    tamanho={"sm"}
                    label="Endereço"
                    mask="AA-AAAAAAAAAAAAAAA"
                    fullWidth
                    disabled={isPending}
                />
            </Stack>

            <Select
                control={control}
                name="setor"
                label="Setor"
                placeholder="Selecione seu setor"
                tamanho="md"
                options={[
                    { value: "AGRO", label: "AGRO" },
                    { value: "TEC", label: "TEC" },
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
                    loading={isPending}
                >
                    Cadastrar
                </Button>
            </Stack>
        </Stack>
    )
}
