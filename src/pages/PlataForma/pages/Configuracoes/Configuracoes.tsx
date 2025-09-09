import { Card, Divider, Stack, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { ArrowRightLeft, BanknoteArrowDown, ChevronRight } from "lucide-react"
import { InputDropdown } from "../../../../components/InputDropdown"
import { useConfiguracoes } from "./Configuracoes.hook"

export const Configuracoes = () => {
    const {
        user,
        opcoes,
        isFetching,
        control,
        // projetoSelecionado,
        temProjetoSelecionado,
        valorExibido,
        isLoadingValor,
    } = useConfiguracoes()

    const formatarBR = (v: number) =>
        (v ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    return (
        <Stack
            justifyContent={"center"}
            sx={{
                width: {
                    xs: "90%",
                    md: "50%",
                },
            }}
            gap={3}
        >
            <Card
                sx={{
                    bgcolor: "#B83229",
                    paddingInline: 4,
                    pb: 4,
                    pt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    color: "white",
                }}
            >
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Typography variant="subtitle1">Conta</Typography>
                    <Button
                        tamanho="sm"
                        variante="ButtonLinkWhite"
                        ladoIcon="direita"
                        icon={ChevronRight}
                    >
                        Ver extrato
                    </Button>
                </Stack>

                <Stack gap={2}>
                    <Typography variant="h4">
                        {temProjetoSelecionado ? "Saldo do projeto" : "Saldo total"}
                    </Typography>

                    {isLoadingValor ? (
                        <Typography variant="h3">Carregando...</Typography>
                    ) : (
                        <Typography variant="h3">R$ {formatarBR(valorExibido)}</Typography>
                    )}

                    <InputDropdown.Controlado
                        control={control}
                        name="projeto"
                        isCarregandoDados={isFetching}
                        placeholder="Veja o saldo respectivo de cada projeto"
                        opcoes={opcoes.projetos}
                        renderizarLabel={(opcao) => opcao.nome}
                        retornarSomenteId
                    />
                </Stack>
            </Card>

            <Stack
                width={"100%"}
                gap={2}
            >
                <Typography variant="h6">Ações</Typography>

                <Divider sx={{ height: 1, bgcolor: "black" }} />

                <Stack
                    direction={"row"}
                    gap={1.5}
                >
                    <Button
                        variante="ButtonBlue"
                        tamanho="lg"
                        icon={ArrowRightLeft}
                        ladoIcon="direita"
                        espacamento={15}
                        disabled={user?.aluno ? true : false}
                    >
                        Transferir
                    </Button>
                    <Button
                        variante="ButtonBlue"
                        tamanho="lg"
                        icon={BanknoteArrowDown}
                        ladoIcon="direita"
                        espacamento={15}
                        disabled={user?.aluno ? true : false}
                    >
                        Sacar
                    </Button>
                </Stack>
            </Stack>

            <Stack
                width={"100%"}
                gap={1.5}
            >
                <Typography
                    variant="h6"
                    color="#B83229"
                >
                    Deletar Conta
                </Typography>

                <Divider sx={{ height: 1, bgcolor: "black" }} />

                <Typography>Depois de excluir sua conta, não há como voltar atrás.</Typography>

                <Button
                    tamanho="md"
                    sx={{
                        width: {
                            xs: "100%",
                            md: "25%",
                        },
                    }}
                >
                    Deletar minha Conta
                </Button>
            </Stack>
        </Stack>
    )
}
