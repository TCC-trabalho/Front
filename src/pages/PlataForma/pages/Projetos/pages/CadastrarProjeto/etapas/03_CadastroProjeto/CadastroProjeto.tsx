import { Stack } from "@mui/material"
import { ProgressHeader } from "../../../../../../../../components/ProgressHeader/ProgressHeader"
import { Button } from "../../../../../../../../components/Button/Button"
import { useCadastroProjeto } from "./CadastroProjeto.hook"
import { Input } from "../../../../../../../../components/Input/Input"
import { Select } from "../../../../../../../../components/select/Select"
import { ProjetoCadastrado } from "../../modais/projetoCadastrado/projetoCadastrado"
import { InputFoto } from "../../../../../../../../components/InputFoto/InputFoto"
import { InputDropdown } from "../../../../../../../../components/InputDropdown"

export const CadastroProjeto = () => {
    const {
        control,
        onSubmit,
        isPendingCadastrarProjeto,
        openModal,
        opcoes,
        isLoadingOrientadores,
        user,
        idGrupo,
    } = useCadastroProjeto()

    return (
        <>
            <ProgressHeader
                title="Cadastro seu Projeto"
                subtitle="Cadastre seu projeto e consiga o apoio da nossa plataforma"
                progress={80}
            />
            <Stack
                component="form"
                gap={3}
                p={3}
            >
                <Stack gap={2}>
                    <InputFoto
                        label="Foto do projeto"
                        name="foto"
                        control={control}
                        disabled={isPendingCadastrarProjeto}
                    />
                    <Input
                        placeholder="Digite o título do seu projeto"
                        control={control}
                        name={"titulo"}
                        tamanho={"sm"}
                        label="Título"
                        fullWidth
                        disabled={isPendingCadastrarProjeto}
                    />

                    <Input
                        placeholder="Digite a descrição do seu projeto"
                        control={control}
                        name={"descricao"}
                        tamanho={"sm"}
                        label="Descrição"
                        fullWidth
                        multiline
                        rows={3}
                        disabled={isPendingCadastrarProjeto}
                    />

                    <Select
                        disabled={isPendingCadastrarProjeto}
                        control={control}
                        name={"area"}
                        label="Área"
                        placeholder="Selecione a área do seu projeto"
                        options={[
                            { value: "tecnologia", label: "Tecnologia" },
                            { value: "administracao", label: "Administração" },
                            { value: "saude", label: "Saúde" },
                            { value: "educacao", label: "Educação" },
                            { value: "comunidade", label: "Comunidade" },
                            { value: "sustentabilidade", label: "Sustentabilidade" },
                            { value: "infraestrutura", label: "Infraestrutura" },
                        ]}
                    />

                    {user.aluno && (
                        <InputDropdown.Controlado
                            control={control}
                            name="orientador"
                            label="Orientador"
                            placeholder="Selecione o orientador do seu projeto"
                            opcoes={opcoes.orientadores}
                            renderizarLabel={(item) => item.nome}
                            retornarSomenteId
                            isCarregandoDados={isLoadingOrientadores}
                            disabled={isPendingCadastrarProjeto}
                        />
                    )}
                </Stack>
                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    gap={2}
                    justifyContent={"center"}
                >
                    <Button
                        variante="ButtonGrey"
                        tamanho={"lg"}
                        disabled={isPendingCadastrarProjeto}
                        espacamento={20}
                        to={`/plataforma-nexus/cadastrar-projeto/cadastro-integrantes/${idGrupo}`}
                        viewTransition
                    >
                        Voltar
                    </Button>
                    <Button
                        tamanho={"lg"}
                        onClick={onSubmit}
                        loading={isPendingCadastrarProjeto}
                        espacamento={20}
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </Stack>
            <ProjetoCadastrado open={openModal} />
        </>
    )
}
