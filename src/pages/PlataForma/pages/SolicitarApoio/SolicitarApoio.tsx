import { Chip, Skeleton, Stack, Typography } from "@mui/material"
import { ChevronLeft, HandHelping } from "lucide-react"
import { Select } from "../../../../components/select/Select"
import { InputDropdown } from "../../../../components/InputDropdown"
import { Input } from "../../../../components/Input/Input"
import { Button } from "../../../../components/Button/Button"
import { useSolicitarApoio } from "./SolicitarApoio.hook"

export const SolicitarApoio = () => {
    const { control, onSubmit, opcoes, isFetching, id_empresa, empresa, isFetchingEmpresa } =
        useSolicitarApoio()

    return (
        <Stack
            component={"form"}
            onSubmit={onSubmit}
            justifyContent={"center"}
            sx={{
                width: {
                    xs: "90%",
                    md: "55%",
                },
                ml: {
                    xs: 0,
                    md: 20,
                    lg: 0,
                },
                bgcolor: "#FFF",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                gap: 2,
            }}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={1.5}
            >
                <Typography
                    variant="h3"
                    fontWeight={500}
                >
                    Solicitar Apoio
                </Typography>
                <HandHelping size={50} />
            </Stack>

            <Stack
                direction={"row"}
                gap={1}
            >
                {isFetchingEmpresa ? (
                    <>
                        <Skeleton
                            variant="rounded"
                            width={120}
                            height={32}
                        />
                        <Skeleton
                            variant="rounded"
                            width={120}
                            height={32}
                        />
                    </>
                ) : (
                    <>
                        <Chip
                            label={empresa?.nome}
                            variant="outlined"
                        />
                        <Chip
                            label={empresa?.email}
                            variant="outlined"
                        />
                    </>
                )}
            </Stack>

            <Select
                control={control}
                name="tipoApoio"
                label="Tipo de Apoio"
                tamanho="sm"
                placeholder="Selecione o tipo de apoio"
                options={[
                    { label: "Dinheiro", value: "dinheiro" },
                    { label: "Divulgação", value: "divulgacao", disabled: true },
                    { label: "Equipamentos", value: "equipamentos", disabled: true },
                    { label: "Capacitação", value: "capacitacao", disabled: true },
                ]}
            />
            <InputDropdown.Controlado
                control={control}
                name="projeto"
                isCarregandoDados={isFetching}
                placeholder="Escolha um projeto para pedir apoio"
                label="Projeto"
                opcoes={opcoes.projetos}
                renderizarLabel={(opcao) => opcao.nome}
                retornarSomenteNome
            />

            <Input
                control={control}
                name="mensagemApoio"
                label="Escreva uma mensagem para a empresa"
                tamanho="md"
                placeholder="Sua mensagem..."
                multiline
                rows={4}
            />
            <Stack
                direction={"row"}
                gap={2}
            >
                <Button
                    variante="ButtonOutlinedRed"
                    type="submit"
                    tamanho="md"
                    icon={ChevronLeft}
                    to={`/plataforma-nexus/detalhes-empresa/${id_empresa}`}
                    viewTransition
                    espacamento={10}
                >
                    Voltar
                </Button>
                <Button
                    type="submit"
                    tamanho="md"
                    espacamento={10}
                >
                    Enviar solicitação
                </Button>
            </Stack>
        </Stack>
    )
}
