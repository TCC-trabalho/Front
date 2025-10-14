import { Stack, Typography } from "@mui/material"
import * as Styled from "../Auth/AuthPage.styled"
import * as Component from "./RecuperarSenha.styled"
import { BackGroud } from "../../assets"
import { VerificarEmail } from "./etapas/01_VerificarEmail/VerificarEmail"
import { VerificarCodigo } from "./etapas/02_VerificarCodigo/VerificarCodigo"
import { TrocarSenha } from "./etapas/03_TrocarSenha/TrocarSenha"
import { useSearchParams } from "react-router"

export const RecuperarSenhaPage = () => {
    const [params] = useSearchParams()
    const step = params.get("step") || ""
    
    const renderStep = () => {
        if (step.includes("VerificaCodigo")) return <VerificarCodigo />
        if (step.includes("TrocarSenha")) return <TrocarSenha />
        return <VerificarEmail />
    }

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
            </Styled.Content>
            <Styled.FormBoxLogin>
                <Component.FormWrapper>
                    <Stack className="FormHeader">
                        <Typography variant="h4">Recuperar Senha</Typography>
                        <Typography>Siga os passos para recuperar sua senha</Typography>
                    </Stack>
                    {renderStep()}
                </Component.FormWrapper>
            </Styled.FormBoxLogin>
        </Styled.Container>
    )
}
