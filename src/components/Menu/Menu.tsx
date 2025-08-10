import { Avatar, Drawer, Skeleton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import * as Styled from "./Menu.styled"
import { Button } from "../Button/Button"
import { LogoNexus } from "../../assets"
import {
    Building2,
    FolderCog,
    Lightbulb,
    LogOut,
    MenuIcon,
    MessageCircle,
    Settings,
    UserRound,
} from "lucide-react"
import { useState } from "react"
import { MenuProps } from "./Menu.type"
import { useControleExibicao } from "../../lib/utils/controleExibicao"
import { useLogout } from "../../lib/hooks/useUser"

export const Menu = ({ variante, header, loading = false, ...props }: MenuProps) => {
    const { ocultarDetalhesMenu } = useControleExibicao()
    const { handleLogout } = useLogout()

    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
    const [open, setOpen] = useState(false)

    const podeMostrarProjeto = (variante === "aluno" || variante === "orientador") && header

    const menuContent = (
        <Styled.Menu {...props}>
            <Stack
                gap={2}
                justifyContent={"start"}
            >
                <LogoNexus width={150} />

                {ocultarDetalhesMenu && (
                    <>
                        <Stack className="Usercontent">
                            {loading ? (
                                <Skeleton
                                    variant="circular"
                                    width={80}
                                    height={80}
                                />
                            ) : (
                                <Avatar
                                    src={header?.[0]?.foto}
                                    alt="Foto do usuário"
                                    sx={{ width: 80, height: 80 }}
                                />
                            )}
                            <Typography>{header?.[0]?.nomeUser ?? "Nome de Usuário"}</Typography>
                        </Stack>

                        {podeMostrarProjeto ? (
                            <Stack className="Projectcontent">
                                {header[0].quatidadeProjetos && (
                                    <Typography
                                        variant="caption"
                                        color="#797979"
                                    >
                                        Quantidade de projetos
                                    </Typography>
                                )}
                                <Typography variant="h6">
                                    {header[0].quatidadeProjetos} projetos
                                </Typography>
                            </Stack>
                        ) : null}
                    </>
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
                >
                    Projetos
                </Button>

                <Button
                    tamanho={"sm"}
                    variante="ButtonLinkBlack"
                    icon={Building2}
                    to="/plataforma-nexus/empresas"
                    viewTransition
                >
                    Empresas
                </Button>

                <Button
                    tamanho={"sm"}
                    variante="ButtonLinkBlack"
                    icon={MessageCircle}
                    to="/plataforma-nexus/chat"
                    viewTransition
                >
                    Chat
                </Button>

                {variante === "aluno" || variante === "orientador" ? (
                    <Button
                        tamanho={"sm"}
                        variante="ButtonLinkBlack"
                        icon={FolderCog}
                        to="/plataforma-nexus/meu-projeto"
                        viewTransition
                    >
                        Meus Projetos
                    </Button>
                ) : (
                    <Button
                        tamanho={"sm"}
                        variante="ButtonLinkBlack"
                        icon={FolderCog}
                        to="/plataforma-nexus/projeto-patrocinados"
                        viewTransition
                    >
                        Projetos apoiados
                    </Button>
                )}

                {ocultarDetalhesMenu && (
                    <Button
                        tamanho={"sm"}
                        variante="ButtonLinkBlack"
                        icon={Settings}
                        to="/plataforma-nexus/configuracoes"
                        viewTransition
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
                        <Typography
                            variant="subtitle1"
                            color="#797979"
                        >
                            Pefil
                        </Typography>

                        <Button
                            tamanho={"sm"}
                            icon={UserRound}
                            variante="ButtonLinkBlack"
                        >
                            Meu Perfil
                        </Button>

                        <Button
                            tamanho={"sm"}
                            variante="ButtonLinkBlack"
                            icon={Settings}
                            to="/plataforma-nexus/configuracoes"
                            viewTransition
                        >
                            Configurações
                        </Button>

                        <Button
                            tamanho={"sm"}
                            variante="ButtonLinkBlack"
                            icon={LogOut}
                            onClick={handleLogout}
                        >
                            Terminar Sessão
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
                            width: 250,
                            borderRight: "1px solid #B3B3B3",
                            backgroundColor: "#FFFCF5",
                            padding: "0px 0px 0px 40px",
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
                            width: 230,
                            backgroundColor: "#FFFCF5",
                            padding: "0px 0px 0px 40px",
                            color: "#3F3F3F",
                        },
                    }}
                >
                    {menuContent}
                </Drawer>
            )}
        </>
    )
}
