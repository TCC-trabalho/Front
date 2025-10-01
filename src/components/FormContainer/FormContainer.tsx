import { Stack, Typography } from "@mui/material"
import { useState } from "react"
import * as Styled from "./FormContainer.styled"
import { FormContainerProps } from "./FormContainer.type"
import { Button } from "../Button/Button"
import { useSearchParams } from "react-router"

export const FormContainer = ({ variante = "login", tabs = [], ...props }: FormContainerProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const tabParam = searchParams.get("Tab")

    const initialIndex = tabs.findIndex((tab) => tab.label.toLowerCase() === tabParam?.toLowerCase())

    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0)

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue)
        setSearchParams({ Tab: tabs[newValue].label })
    }

    const selectedTab = tabs[tabIndex]

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
                            <Styled.TabItem
                                key={index}
                                label={tab.label}
                            />
                        ))}
                    </Styled.TabWrapper>
                )}
                {selectedTab?.icon && <selectedTab.icon size={70} />}
                <Typography variant="h4">{selectedTab?.titulo}</Typography>
                <Typography color="#6B9EBD">{selectedTab?.subtitulo}</Typography>
            </Stack>

            <Stack
                gap={3}
                width={"80%"}
            >
                {selectedTab?.content}
                <Button
                    tamanho={"md"}
                    variante="ButtonLink"
                    sx={{ width: "auto" }}
                    to={selectedTab.to}
                    viewTransition
                >
                    {variante == "login" ? <>Criar minha conta</> : <>Já possui uma conta?</>}
                </Button>
            </Stack>

            <Typography
                variant="subtitle2"
                color="#6B9EBD"
            >
                © 2025 Nexus. All rights reserved.
            </Typography>
        </Styled.FormWrapper>
    )
}
