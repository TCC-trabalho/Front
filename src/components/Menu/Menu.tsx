import { Avatar, Drawer, Skeleton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import * as Styled from "./Menu.styled"
import { Button } from "../Button/Button"
import { LogoNexus } from "../../assets"
import { Building2, Lightbulb, LogOut, MenuIcon, MessageCircle, Settings, UserRound } from "lucide-react"
import { useState } from "react"
import { MenuProps } from "./Menu.type"
import { useControleExibicao } from "../../lib/utils/controleExibicao"
import { EncerrarSessao } from "../../pages/PlataForma/pages/Perfil/modais/EncerrarSessao/EncerrarSessao"
import { useUser } from "../../lib/hooks/useUser"

export const Menu = ({ variante, header, loading = false, ...props }: MenuProps) => {
    const { ocultarDetalhesMenu } = useControleExibicao()

    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const { user } = useUser()

    const menuContent = (
        <Styled.Menu
            {...props}
            ocultarDetalhesMenu={ocultarDetalhesMenu}
        >
            <Stack
                gap={5}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <LogoNexus width={150} />

                {ocultarDetalhesMenu && (
                    <Stack className="Usercontent">
                        {loading ? (
                            <Skeleton
                                variant="circular"
                                width={80}
                                height={80}
                            />
                        ) : (
                            <Button
                                tamanho="lg"
                                variante="ButtonLinkBlack"
                                sx={{ width: "auto", height: "auto" }}
                                to="meu-perfil"
                                viewTransition
                            >
                                <Avatar
                                    src={header?.[0]?.foto}
                                    alt="Foto do usuário"
                                    sx={{ width: 80, height: 80 }}
                                />
                            </Button>
                        )}
                        <Typography>{header?.[0]?.nomeUser ?? "Nome de Usuário"}</Typography>

                        <Stack className="Projectcontent">
                            <Typography variant="h6">
                                {header?.[0].quatidadeProjetos} Projetos{" "}
                                {user.empresa ? "Patrocinados" : ""}
                            </Typography>
                        </Stack>
                    </Stack>
                )}
            </Stack>

            <Stack className="body">
                <Typography
                    variant="subtitle1"
                    color="#797979"
                >
                    Navegação
                </Typography>

                <Button
                    tamanho={"sm"}
                    variante="ButtonLinkBlack"
                    icon={Lightbulb}
                    to="/plataforma-nexus/projetos"
                    viewTransition
                    ladoIcon="direita"
                >
                    Projetos
                </Button>

                <Button
                    tamanho={"sm"}
                    variante="ButtonLinkBlack"
                    icon={Building2}
                    to="/plataforma-nexus/empresas"
                    viewTransition
                    ladoIcon="direita"
                >
                    Empresas
                </Button>

                <Button
                    tamanho={"sm"}
                    variante="ButtonLinkBlack"
                    icon={MessageCircle}
                    to="/plataforma-nexus/chat"
                    viewTransition
                    ladoIcon="direita"
                >
                    Chat
                </Button>

                {ocultarDetalhesMenu && !user.empresa && (
                    <Button
                        tamanho={"sm"}
                        variante="ButtonLinkBlack"
                        icon={Settings}
                        to="/plataforma-nexus/configuracoes"
                        viewTransition
                        ladoIcon="direita"
                    >
                        Configurações
                    </Button>
                )}

                {variante === "orientador" &&
                    ocultarDetalhesMenu &&
                    header &&
                    !header[0]?.quatidadeProjetos && (
                        <Button
                            tamanho="sm"
                            sx={{ width: "70%" }}
                            to="/plataforma-nexus/cadastrar-projeto"
                            viewTransition
                        >
                            Cadastrar um projeto
                        </Button>
                    )}

                {!ocultarDetalhesMenu && (
                    <Stack className="body">
                        <Button
                            tamanho={"sm"}
                            icon={user.aluno ? UserRound : user.orientador ? UserRound : Building2}
                            to="/plataforma-nexus/meu-perfil"
                            viewTransition
                            variante="ButtonLinkBlack"
                            ladoIcon="direita"
                        >
                            {user.aluno
                                ? "Meu Perfil"
                                : user.orientador
                                ? "Meu Perfil"
                                : "Minha Empresa"}
                        </Button>

                        {!user.empresa && (
                            <Button
                                tamanho={"sm"}
                                variante="ButtonLinkBlack"
                                icon={Settings}
                                to="/plataforma-nexus/configuracoes"
                                viewTransition
                                ladoIcon="direita"
                            >
                                Configurações
                            </Button>
                        )}

                        <Button
                            tamanho={"sm"}
                            variante="ButtonLinkBlack"
                            icon={LogOut}
                            ladoIcon="direita"
                            onClick={() => setOpenModal(true)}
                        >
                            Encerrar Sessão
                        </Button>
                    </Stack>
                )}
            </Stack>
        </Styled.Menu>
    )

    return (
        <>
            {!isDesktop && (
                <Button
                    tamanho="lg"
                    variante="ButtonLinkWhite"
                    onClick={() => setOpen(true)}
                    sx={{ position: "fixed", top: 15, left: 25, zIndex: 1300 }}
                    icon={MenuIcon}
                />
            )}

            {isDesktop ? (
                <Drawer
                    variant="permanent"
                    open
                    PaperProps={{
                        sx: {
                            width: 150,
                            borderRight: "1px solid #B3B3B3",
                            backgroundColor: "#FFFCF5",
                            paddingInline: 5,
                            color: "#3F3F3F",
                        },
                    }}
                >
                    {menuContent}
                </Drawer>
            ) : (
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                    PaperProps={{
                        sx: {
                            width: 150,
                            backgroundColor: "#FFFCF5",
                            paddingInline: 5,
                            color: "#3F3F3F",
                        },
                    }}
                >
                    {menuContent}
                </Drawer>
            )}
            <EncerrarSessao
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    )
}
