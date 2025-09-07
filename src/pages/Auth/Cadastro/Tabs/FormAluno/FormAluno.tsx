import { Stack } from "@mui/material"
import { Input } from "../../../../../components/Input/Input"
import { Button } from "../../../../../components/Button/Button"
import { useFormAluno } from "./FormAluno.hook"
import { InputDropdown } from "../../../../../components/InputDropdown"

export const FormALuno = () => {
    const { control, onSubmit, isPending, instituicoesOptions, isLoadingInstituicoes } = useFormAluno()

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

            <InputDropdown.Controlado
                control={control}
                name="instituicao"
                retornarSomenteId
                opcoes={instituicoesOptions.instituicoes}
                renderizarLabel={(inst) =>
                    inst.tipo + " - " + inst.nome ? inst.tipo + " - " + inst.nome : "-"
                }
                isCarregandoDados={isLoadingInstituicoes}
                placeholder="Selecione sua instituição"
                disabled={isPending}
                label="Instituição de ensino"
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
