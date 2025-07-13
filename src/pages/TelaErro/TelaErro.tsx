import { Stack, Typography } from "@mui/material"
import * as Styled from "./TelaErro.styled"
import { BackGroud } from "../../assets"
import { MonitorX } from "lucide-react"

export const TelaErro = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Stack className="fundo">
                    <BackGroud width="90%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </Stack>
                <Styled.ErrorBox>
                    <Stack className="errorIcon">
                        <MonitorX size={110} color={"#FF4C4C"}/>
                    </Stack>
                    <Typography
                        variant="h5"
                    >
                        Parece que houve algum problema, estamos trabalhando para resolver isso!
                    </Typography>
                </Styled.ErrorBox>
            </Styled.Content>
        </Styled.Container>
    )
}