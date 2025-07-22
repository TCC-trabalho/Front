import { Skeleton, Stack, Typography } from "@mui/material"
import { Header } from "../../../../components/Header/Header"
import { Menu } from "../../../../components/Menu/Menu"
import * as Styled from "./ContainerPlataforma.styled"
import { Input } from "../../../../components/Input/Input"
import { Bell, CircleUserRound, Search } from "lucide-react"
import { Button } from "../../../../components/Button/Button"
import { Outlet } from "react-router"
import { useContainerPlataforma } from "./ContainerPlataforma.hook"
import { useControleExibicao } from "../../../../lib/utils/controleExibicao"

export const ContainerPlataforma = () => {

    const { user, control } = useContainerPlataforma()
    const { tituloPagina, exibirSugestao, exibirEquipe } = useControleExibicao()

    return (
        <Styled.Container>

            <Menu
                variante={user?.tipoUser ?? null}
                header={
                    [{
                        foto: user?.foto ?? "https://via.placeholder.com/80",
                        nomeUser: user?.nomeUsuario ?? "Usuário",
                        nomeProjeto: user?.nomeProjeto ?? null,
                        area: user?.area ?? null,
                    }]

                }
            />

            <Header variante="BlueHeader" MobileMenu={false}>
                <Stack
                    sx={{
                        flexDirection: "row",
                        justifyContent: "end",
                        alignItems: "center",
                        gap: 2,
                        width: {
                            xs: "90%",
                            lg: "60%",
                        },
                    }}
                >
                    <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 34 } }}>{tituloPagina()}</Typography>
                    <Input
                        Icon={Search}
                        placeholder="Pesquisar"
                        control={control}
                        name={""}
                        tamanho={"sm"}
                        sx={{
                            width: {
                                xs: 60,
                                sm: 300
                            },
                            height: 35,
                            borderRadius: 10,
                            p: 2
                        }}
                    />
                </Stack>
                <Stack direction={"row"} gap={2}>
                    <Button
                        tamanho={"lg"}
                        variante="ButtonLinkWhite"
                        icon={Bell}
                        somenteIcone
                    />
                    <Button
                        tamanho={"lg"}
                        variante="ButtonLinkWhite"
                        icon={CircleUserRound}
                        to="meu-perfil"
                        somenteIcone
                        viewTransition
                    />
                </Stack>
            </Header>

            <Styled.Content>
                <Outlet />
            </Styled.Content>

            {exibirSugestao && (
                <Styled.CardSugestao>
                    <Typography variant="h6" color="#797979">
                        Sugestões
                    </Typography>

                    {[...Array(5)].map((_, index) => (
                        <Stack key={index} alignItems="center" direction="row" gap={2}>
                            <Skeleton variant="circular" width={50} height={50} />
                            <Stack>
                                <Typography variant="subtitle1">Nome da Empresa</Typography>
                                <Typography variant="body2">Área da Empresa</Typography>
                            </Stack>
                        </Stack>
                    ))}

                    <Typography variant="caption" color="#797979" textAlign={"center"}>
                        Sobre • Ajuda • Privacidade • Termos • Dúvidas Frequentes • Acessibilidade
                    </Typography>
                </Styled.CardSugestao>
            )}

            {exibirEquipe && (
                <Styled.CardEquipe>
                    <Typography variant="h6" color="#797979">
                        Equipe
                    </Typography>

                    {[...Array(4)].map((_, index) => (
                        <Stack key={index} alignItems="center" direction="row" gap={2}>
                            <Skeleton variant="circular" width={50} height={50} />
                            <Stack>
                                <Typography variant="subtitle1">Nome Integrante</Typography>
                                <Typography variant="body2">Funcão</Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Styled.CardEquipe>
            )}

        </Styled.Container>
    )
}