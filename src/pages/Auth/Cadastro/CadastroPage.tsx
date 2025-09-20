import { Stack } from "@mui/material"
import * as Styled from "../AuthPage.styled"
import { BackGroud } from "../../../assets"
import { FormContainer } from "../../../components/FormContainer/FormContainer"
import { BookOpen, Building2, GraduationCap } from "lucide-react"
import { FormALuno } from "./Tabs/FormAluno/FormAluno"
import { FormOrientador } from "./Tabs/FormOrientador/FormOrientador"
import { FormEmpresa } from "./Tabs/FormEmpresa/FormEmpresa"

export const CadastroPage = () => {
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
                <Styled.FormBoxCadastro>
                    <FormContainer
                        variante={"cadastro"}
                        tabs={[
                            {
                                label: "Aluno",
                                icon: BookOpen,
                                titulo: "Cadastro do estudante",
                                subtitulo: "Faça sua conta e comece a navegar",
                                content: <FormALuno />,
                            },
                            {
                                label: "Professor",
                                icon: GraduationCap,
                                titulo: "Cadastro do orientador",
                                subtitulo: "Faça sua conta e comece a navegar",
                                content: <FormOrientador />,
                            },
                            {
                                label: "Empresa",
                                icon: Building2,
                                titulo: "Cadastro da empresa",
                                subtitulo: "Faça sua conta e comece a navegar",
                                content: <FormEmpresa />,
                            },
                        ]}
                    />
                </Styled.FormBoxCadastro>
            </Styled.Content>
        </Styled.Container>
    )
}
