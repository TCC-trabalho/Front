import { Stack, styled } from "@mui/material"

export const Container = styled(Stack)(() => ({
    minHeight: "100vh",
    overflowX: "hidden",
}))

export const Content = styled(Stack)(({ theme }) => ({
    minHeight: "90vh",
    padding: "40px 30%",
    position: "relative",
    backgroundImage: "linear-gradient(#6B9EBD, #0C79B0)",
    overflow: "hidden",

    [theme.breakpoints.down("xl")]: {
        minHeight: "100vh",
    },

    [theme.breakpoints.down("lg")]: {
        padding: "40px 25%",
    },

    [theme.breakpoints.down("md")]: {
        padding: "40px 20%",
    },

    [theme.breakpoints.down("sm")]: {
        padding: "40px 1%",
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
    },
}))

export const FormBoxLogin = styled(Stack)(({ theme }) => ({
    zIndex: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "550px",
    maxWidth: "600px",
    transform: "translate(-50%, -50%)",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",

    [theme.breakpoints.down("xl")]: {
        width: "90%",
    },
}))

export const FormBoxCadastro = styled(Stack)(() => ({
    zIndex: 1,
    position: "relative",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
}))
