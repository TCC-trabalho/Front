import { Stack, styled } from "@mui/material"

export const Container = styled(Stack)(() => ({
    minHeight: "100vh",
    overflowX: "hidden",
}))

export const Session = styled(Stack)(({ theme }) => ({
    minHeight: "80vh",
    padding: "80px 15%",

    ".indice": {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 50,
        height: 45,
        borderRadius: "50%",
        border: "3px #B83229 solid",
        color: "#B83229",
    },

    ".fundo": {
        flexDirection: "row",
        justifyContent: "end",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.5,
    },

    [theme.breakpoints.down("lg")]: {
        padding: "80px 5%",
    },
}))

export const Footer = styled(Stack)(() => ({
    padding: "80px 5% 15px",
    backgroundColor: "#064B72",
    minHeight: "60vh",
    color: "#6B9EBD",
    justifyContent: "space-between",
}))

export const DevCardsContainer = styled(Stack)(() => ({
    flexDirection: "row",
    gap: 16,
    overflowX: "auto",
    padding: "16px 0",
    scrollBehavior: "smooth",
    borderRight: "5px black solid",
    borderLeft: "5px black solid",

    /* Scrollbar personalizado */
    "&::-webkit-scrollbar": {
        height: 12,
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundImage: "linear-gradient(#064B72, #0B6091)",
        borderRadius: 20,
        border: "3px solid #FFFCF5",
    },
}))
