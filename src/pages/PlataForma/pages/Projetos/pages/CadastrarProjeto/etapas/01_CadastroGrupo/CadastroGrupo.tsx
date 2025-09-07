import { Stack } from "@mui/material"
import { Input } from "../../../../../../../../components/Input/Input"
import { Button } from "../../../../../../../../components/Button/Button"
import { useCadastroGrupo } from "./CadastroGrupo.hook"
import { ProgressHeader } from "../../../../../../../../components/ProgressHeader/ProgressHeader"

export const CadastroGrupo = () => {
    const { control, onSubmit, isPending } = useCadastroGrupo()

    return (
        <>
            <ProgressHeader
                title="Cadastro de Grupo"
                subtitle="Crie um grupo para organizar seus projetos"
                progress={20}
            />

            <Stack
                component={"form"}
                gap={3}
                p={3}
            >
                <Input
                    placeholder="Digite o nome do seu grupo"
                    control={control}
                    name={"nome"}
                    tamanho={"sm"}
                    label="Nome"
                    fullWidth
                    disabled={isPending}
                />

                <Input
                    placeholder="Digite a descrição do seu grupo"
                    control={control}
                    name={"descricao"}
                    tamanho={"sm"}
                    label="Descrição"
                    multiline
                    rows={3}
                    fullWidth
                    disabled={isPending}
                />

                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    justifyContent={"center"}
                    gap={2}
                >
                    <Button
                        variante="ButtonGrey"
                        tamanho={"lg"}
                        to="/plataforma-nexus/"
                        viewTransition
                        espacamento={20}
                        disabled={isPending}
                    >
                        Voltar
                    </Button>
                    <Button
                        tamanho={"lg"}
                        onClick={onSubmit}
                        viewTransition
                        loading={isPending}
                        espacamento={20}
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
