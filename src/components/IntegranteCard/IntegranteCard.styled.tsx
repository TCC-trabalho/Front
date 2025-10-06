import { Stack, styled } from "@mui/material"

export const IntegranteCardVariants = styled(Stack)<{ variant: "white" | "blue" }>(
    ({ variant, theme }) => ({
        backgroundColor: variant === "blue" ? "#6B9EBD" : "#fff",
        color: variant === "blue" ? "#fff" : "#000",
        padding: theme.spacing(1),
        borderRadius: theme.spacing(1),
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.35)" },
    })
)
