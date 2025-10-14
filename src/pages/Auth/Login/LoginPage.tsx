import { Stack } from "@mui/material"
import * as Styled from "../AuthPage.styled"
import { BackGroud } from "../../../assets"
import { FormContainer } from "../../../components/FormContainer/FormContainer"
import { BookOpen, Building2, GraduationCap, HandHelping } from "lucide-react"
import { FormALuno } from "./Tabs/FormAluno/FormAluno"
import { FormOrientador } from "./Tabs/FormOrientador/FormOrientador"
import { FormEmpresa } from "./Tabs/FormEmpresa/FormEmpresa"
import { FormVisitante } from "./Tabs/FormVisitante/FormVisitante"

export const LoginPage = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Stack className="fundo">
                    <BackGroud
                        width="90%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </Stack>
                <Styled.FormBoxLogin>
                    <FormContainer
                        variante={"login"}
                        tabs={[
                            {
                                label: "Aluno",
                                icon: BookOpen,
                                titulo: "Login do estudante",
                                subtitulo: "Insira suas credenciais para acessar seu portal do aluno",
                                to: "/cadastro?Tab=Aluno",
                                toRecuperarSenha: "aluno",
                                content: <FormALuno />,
                            },
                            {
                                label: "Professor",
                                icon: GraduationCap,
                                titulo: "Login do orientador",
                                subtitulo:
                                    "Insira suas credenciais para acessar seu portal do Orientador",
                                to: "/cadastro?Tab=Professor",
                                toRecuperarSenha: "orientador",
                                content: <FormOrientador />,
                            },
                            {
                                label: "Empresa",
                                icon: Building2,
                                titulo: "Login da empresa",
                                subtitulo: "Insira suas credenciais para acessar seu portal da Empresa",
                                to: "/cadastro?Tab=Empresa",
                                toRecuperarSenha: "empresa",
                                content: <FormEmpresa />,
                            },
                            {
                                label: "Visitante",
                                icon: HandHelping,
                                titulo: "Login do visitante",
                                subtitulo:
                                    "Insira suas credenciais para acessar seu portal do Visitante",
                                to: "/cadastro?Tab=Visitante",
                                toRecuperarSenha: "visitante",
                                content: <FormVisitante />,
                            },
                        ]}
                    />
                </Styled.FormBoxLogin>
            </Styled.Content>
        </Styled.Container>
    )
}
