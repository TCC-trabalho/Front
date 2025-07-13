import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import * as Styled from "./FormContainer.styled";
import { FormContainerProps } from "./FormContainer.type";
import { Button } from "../Button/Button";

export const FormContainer = ({
    variante = "login",
    tabs = [],
    ...props
}: FormContainerProps) => {
    const [tabIndex, setTabIndex] = useState(0);
    const selectedTab = tabs[tabIndex];

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <Styled.FormWrapper {...props}>

            <Stack className="FormHeader">
                {tabs.length > 1 && (
                    <Styled.TabWrapper
                        value={tabIndex}
                        onChange={handleTabChange}
                        variant="fullWidth"
                    >
                        {tabs.map((tab, index) => (
                            <Styled.TabItem key={index} label={tab.label} />
                        ))}
                    </Styled.TabWrapper>
                )}
                {selectedTab?.icon && <selectedTab.icon size={70} />}
                <Typography variant="h4">{selectedTab?.titulo}</Typography>
                <Typography color="#6B9EBD">{selectedTab?.subtitulo}</Typography>
            </Stack>

            <Stack gap={3} width={"80%"}>
                {selectedTab?.content}
                <Button
                    tamanho={"md"}
                    variante="ButtonLink"
                    sx={{ width: "auto" }}
                    to={variante == "cadastro" ? "/login" : "/cadastro"}
                    viewTransition
                >
                    
                    {variante == "login" ? (<>Criar minha conta</>) : (<>Já possui uma conta?</>)}
                </Button>
            </Stack>

            <Typography variant="subtitle2" color="#6B9EBD">
                © 2025 Nexus. All rights reserved.
            </Typography>
        </Styled.FormWrapper>
    );
};
