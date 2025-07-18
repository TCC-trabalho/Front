import { Stack } from "@mui/material"
import * as Styled from "../AuthPage.styled"
import { BackGroud } from "../../../assets"
import { FormContainer } from "../../../components/FormContainer/FormContainer"
import { BookOpen, Building2, GraduationCap } from "lucide-react"
import { FormALuno } from "./Tabs/FormAluno/FormAluno"
import { FormOrientador } from "./Tabs/FormOrientador/FormOrientador"
import { FormEmpresa } from "./Tabs/FormEmpresa/FormEmpresa"

export const LoginPage = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Stack className="fundo">
                    <BackGroud width="90%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </Stack>
                <Styled.FormBox>
                    <FormContainer
                        variante={"login"}
                        tabs={[
                            {
                                label: "Aluno",
                                icon: BookOpen,
                                titulo: "Login do estudante",
                                subtitulo: "Insira suas credenciais para acessar seu portal do aluno",
                                content: <FormALuno/>,
                            },
                            {
                                label: "Professor",
                                icon: GraduationCap,
                                titulo: "Login do orientador",
                                subtitulo: "Insira suas credenciais para acessar seu portal do Orientador",
                                content: <FormOrientador/>,
                            },
                            {
                                label: "Empresa",
                                icon: Building2,
                                titulo: "Login da empresa",
                                subtitulo: "Insira suas credenciais para acessar seu portal da Empresa",
                                content: <FormEmpresa/>,
                            },
                        ]}
                    />
                </Styled.FormBox>
            </Styled.Content>
        </Styled.Container>
    )
}