import { Skeleton, Stack, Typography } from "@mui/material"
import { useEditarGrupo } from "./EditarGrupo.hook"
import { InputDropdown } from "../../../../../../../../components/InputDropdown"
import { IntegranteCard } from "../../../../../../../../components/IntegranteCard/IntegranteCard"
import { Button } from "../../../../../../../../components/Button/Button"

export const EditarGrupo = () => {
    const {
        opcoesAlunos,
        integrantesIds,
        isAlunosPending,
        control,
        onSubmit,
        isCadastrarPending,
        isLoading,
        integrantesData,
        handleExcluir,
        isExcluirPending,
        idProjeto,
    } = useEditarGrupo()

    return (
        <Stack
            component={"form"}
            gap={3}
            p={3}
            onSubmit={onSubmit}
            sx={{
                gap: 4,
                bgcolor: "#FFF",
                mt: 6,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                minWidth: { xs: "50%", md: 500 },
            }}
        >
            <InputDropdown.Controlado
                control={control}
                name="aluno"
                opcoes={opcoesAlunos.alunos}
                renderizarLabel={(opcao) => opcao.nome}
                retornarSomenteNome
                isCarregandoDados={isAlunosPending}
                label="Selecione um integrante"
                placeholder="Selecione um integrante"
                deveDesabilitarOpcao={(opcao) => integrantesIds.includes(opcao.id)}
                disabled={isCadastrarPending}
            />

            <Stack gap={1}>
                <Typography>Integrantes da sua equipe:</Typography>

                <Stack
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
                        gap: 3,
                    }}
                >
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, index) => (
                              <Skeleton
                                  key={index}
                                  variant="rectangular"
                                  height={80}
                                  sx={{ borderRadius: 1 }}
                              />
                          ))
                        : integrantesData?.map((integrante) => (
                              <IntegranteCard
                                  key={integrante.id_aluno}
                                  nome={integrante.nome}
                                  email={integrante.email}
                                  variant="blue"
                                  OnExcluir={() => handleExcluir(integrante.id_aluno)}
                                  loadingExcluir={isExcluirPending}
                                  disabledExcluir={integrantesData.length === 1}
                              />
                          ))}
                </Stack>
            </Stack>

            <Stack
                alignItems={"center"}
                direction={"row"}
                gap={2}
                justifyContent={"center"}
            >
                <Button
                    tamanho={"lg"}
                    variante="ButtonOutlinedBlue"
                    viewTransition
                    espacamento={20}
                    disabled={isCadastrarPending}
                    to={`/plataforma-nexus/detalhes-projeto/${idProjeto}`}
                >
                    Voltar
                </Button>
                <Button
                    tamanho={"lg"}
                    type="submit"
                    variante="ButtonBlue"
                    espacamento={20}
                    loading={isCadastrarPending}
                >
                    Salvar Alterações
                </Button>
            </Stack>
        </Stack>
    )
}
