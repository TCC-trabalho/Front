import { Card, Stack, Typography } from "@mui/material"
import { Button } from "../../../../components/Button/Button"
import { ArrowRightLeft, BanknoteArrowDown, ChevronRight, Handshake } from "lucide-react"
import { InputDropdown } from "../../../../components/InputDropdown"
import { useConfiguracoes } from "./Configuracoes.hook"

export const Configuracoes = () => {
    const { user, opcoes, isFetching, control, temProjetoSelecionado, valorExibido, isLoadingValor } =
        useConfiguracoes()

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
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    color: "white",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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

                <Stack
                    direction={"row"}
                    gap={1.5}
                >
                    <Button
                        variante="ButtonGrey"
                        tamanho="lg"
                        icon={ArrowRightLeft}
                        ladoIcon="direita"
                        espacamento={15}
                        disabled={user?.aluno ? true : false}
                    >
                        Transferir
                    </Button>
                    <Button
                        variante="ButtonGrey"
                        tamanho="lg"
                        icon={BanknoteArrowDown}
                        ladoIcon="direita"
                        espacamento={15}
                        disabled={user?.aluno ? true : false}
                    >
                        Sacar
                    </Button>
                </Stack>
            </Card>

            <Stack
                gap={1.5}
                sx={{
                    bgcolor: "#fff",
                    p: 2,
                    borderRadius: 1,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Typography
                    variant="h6"
                    color="#064B72"
                >
                    Vincular Conta Bancária
                </Typography>

                <Typography>Vincule sua conta Mercado Pago para receber pagamentos.</Typography>

                <Button
                    tamanho="md"
                    variante="ButtonBlue"
                    ladoIcon="direita"
                    icon={Handshake}
                    sx={{
                        width: {
                            xs: "100%",
                            md: "25%",
                        },
                    }}
                >
                    Vincular Conta
                </Button>
            </Stack>

            <Stack
                gap={1.5}
                sx={{
                    bgcolor: "#000000d8",
                    p: 2,
                    borderRadius: 1,
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
            >
                <Typography
                    variant="h6"
                    color="#B83229"
                >
                    Deletar Conta
                </Typography>

                <Typography color="#B83229">
                    Depois de excluir sua conta, não há como voltar atrás.
                </Typography>

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
