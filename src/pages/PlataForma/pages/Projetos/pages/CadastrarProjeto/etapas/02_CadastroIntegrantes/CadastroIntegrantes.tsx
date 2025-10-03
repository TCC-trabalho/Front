import { Skeleton, Stack, Typography } from "@mui/material"
import { ProgressHeader } from "../../../../../../../../components/ProgressHeader/ProgressHeader"
import { Button } from "../../../../../../../../components/Button/Button"
import { useCadastroIntegrantes } from "./CadastroIntegrantes.hook"
import { InputDropdown } from "../../../../../../../../components/InputDropdown"
import { IntegranteCard } from "../../../../../../../../components/IntegranteCard/IntegranteCard"

export const CadastroIntegrantes = () => {
    const {
        opcoesAlunos,
        integrantesIds,
        isAlunosPending,
        control,
        user,
        onSubmit,
        isCadastrarPending,
        integrantesData,
        isIntegrantesPending,
        handleExcluir,
        isExcluirPending,
        idGrupo,
    } = useCadastroIntegrantes()

    return (
        <>
            <ProgressHeader
                title="Cadastro de Integrantes"
                subtitle="Adicione integrantes ao seu grupo"
                progress={60}
            />

            <Stack
                component="form"
                gap={3}
                p={3}
                onSubmit={onSubmit}
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
                    deveDesabilitarOpcao={(opcao) =>
                        opcao.id === user?.aluno?.id_aluno || integrantesIds.includes(opcao.id)
                    }
                    disabled={isCadastrarPending}
                />

                <Stack gap={1}>
                    {(integrantesData?.length ?? 0) > 0 && <Typography>Integrantes:</Typography>}

                    <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1 }}>
                        {isIntegrantesPending
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
                                      OnExcluir={() => handleExcluir(integrante.id_aluno)}
                                      loadingExcluir={isExcluirPending}
                                      disabledExcluir={user.aluno?.email === integrante.email}
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
                    {(integrantesData?.length ?? 0) > 0 && (
                        <Button
                            tamanho={"lg"}
                            variante="ButtonBlue"
                            viewTransition
                            espacamento={20}
                            disabled={isCadastrarPending}
                            to={`/plataforma-nexus/cadastrar-projeto/cadastro-projeto/${idGrupo}`}
                        >
                            Avançar
                        </Button>
                    )}
                    <Button
                        tamanho={"lg"}
                        type="submit"
                        espacamento={20}
                        loading={isCadastrarPending}
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
