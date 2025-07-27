import { Stack } from "@mui/material";
import * as Styled from "./CadastrarProjeto.styled";
import { BackGroud } from "../../../../../../assets";
import { Outlet } from "react-router";

export const CadastrarProjeto = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Stack className="fundo">
                    <BackGroud width="90%" height="100%" preserveAspectRatio="xMidYMid slice" />
                </Stack>
                <Styled.FormBox>
                   <Outlet />
                </Styled.FormBox>
            </Styled.Content>
        </Styled.Container>
    )
}