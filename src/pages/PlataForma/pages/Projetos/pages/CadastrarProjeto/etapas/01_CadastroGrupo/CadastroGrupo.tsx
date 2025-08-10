import { Stack } from "@mui/material"
import { Input } from "../../../../../../../../components/Input/Input"
import { Button } from "../../../../../../../../components/Button/Button"
import { useCadastroGrupo } from "./CadastroGrupo.hook"
import { ProgressHeader } from "../../../../../../../../components/ProgressHeader/ProgressHeader"

export const CadastroGrupo = () => {
    const { control, onSubmit } = useCadastroGrupo()

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
                />

                <Input
                    placeholder="Digite a descrição do seu grupo"
                    control={control}
                    name={"descricao"}
                    tamanho={"sm"}
                    label="Descrição"
                    fullWidth
                    sx={{ minHeight: "150px" }}
                />

                <Stack alignItems={"center"}>
                    <Button
                        tamanho={"lg"}
                        onClick={onSubmit}
                        viewTransition
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
