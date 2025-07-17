import { Stack, Typography } from "@mui/material"
import * as Styled from "./PaginaNaoEncontrada.styled"
import { BackGroud } from "../../assets"
import { CircleQuestionMark } from "lucide-react"
import { Button } from "../../components/Button/Button"

export const PaginaNaoEncontrada = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Stack className="fundo">
                    <BackGroud width="90%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </Stack>
                <Styled.NaoEncontradaBox>
                    <Stack className="questionIcon">
                        <CircleQuestionMark size={110} color={"white"} />
                    </Stack>
                    <Typography
                        variant="h5"
                    >
                        Pagina Não encontrada! Verique a url do site.
                    </Typography>
                    <Button
                        tamanho={"md"}
                        variante="ButtonBlue"
                        sx={{ width: 125 }}
                        to="/conheca-nexus"
                        viewTransition
                    >
                        Voltar à home
                    </Button>
                </Styled.NaoEncontradaBox>
            </Styled.Content>
        </Styled.Container>
    )
}