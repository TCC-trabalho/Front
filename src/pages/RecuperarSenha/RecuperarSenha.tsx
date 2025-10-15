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

    const tituloStep = () => {
        if (step.includes("VerificaCodigo")) return "Verificar Código"
        if (step.includes("TrocarSenha")) return "Trocar Senha"
        return "Verificar Email"
    }

    const descricaoStep = () => {
        if (step.includes("VerificaCodigo")) return "Insira o código enviado para seu email"
        if (step.includes("TrocarSenha")) return "Insira sua nova senha"
        return "Insira seu email para receber o código de verificação"
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
                        <Typography variant="h4">{tituloStep()}</Typography>
                        <Typography>{descricaoStep()}</Typography>
                    </Stack>
                    {renderStep()}
                </Component.FormWrapper>
            </Styled.FormBoxLogin>
        </Styled.Container>
    )
}
