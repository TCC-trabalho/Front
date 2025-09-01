import { Stack, styled } from "@mui/material"

export const Menu = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "ocultarDetalhesMenu",
})<{ ocultarDetalhesMenu: boolean }>(({ theme, ocultarDetalhesMenu }) => ({
    backgroundColor: "#FFFCF5",
    minHeight: "100%",
    gap: theme.spacing(4),
    color: "#3F3F3F",
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
        maxHeight: "500px",
        overflowY: "auto",
    },

    ".Usercontent": {
        width: "100%",
        alignItems: "center",
        gap: theme.spacing(2),
    },

    ".Projectcontent": {
        width: "100%",
        alignItems: "center",
        gap: theme.spacing(1),
    },

    ".body": {
        width: "100%",
        alignItems: "center",
        gap: ocultarDetalhesMenu ? theme.spacing(3) : theme.spacing(5),
    },
}))
