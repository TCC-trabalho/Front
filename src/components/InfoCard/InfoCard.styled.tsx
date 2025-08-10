import { Card, styled } from "@mui/material"

export const InfoCardVariants = styled(Card)<{
    variante: "Transparent" | "White"
    header?: boolean
    cor: "vermelho" | "azul" | "branca"
}>(({ variante, header, cor, theme }) => {
    const borderColor = cor === "vermelho" ? "#B83229" : cor === "azul" ? "#064B72" : "#FFFCF5"
    const bgColor = variante === "White" ? "#FFFFFF" : "transparent"
    const headerColor = borderColor

    return {
        backgroundColor: bgColor,
        border: `5px solid ${borderColor}`,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        transition: "transform 0.2s ease-in-out",

        [theme.breakpoints.down("md")]: {
            maxWidth: 350,
        },

        "&:hover": {
            transform: "scale(1.05, 1.05)",
        },

        ...(header && {
            ".Header": {
                backgroundColor: headerColor,
                color: "#FFFFFF",
                width: "100%",
                height: 90,
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
            },
        }),
    }
})
