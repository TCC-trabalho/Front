import { Stack, styled } from "@mui/material"

export const Container = styled(Stack)(() => ({
    minHeight: "100vh",
    overflowX: "hidden",
    justifyContent: "center",
    alignItems: "center",
}))

export const Content = styled(Stack)(({ theme }) => ({
    minHeight: "100vh",
    overflow: "hidden",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(6),
}))

export const CardSugestao = styled(Stack)(({ theme }) => ({
    width: 200,
    position: "fixed",
    top: "40%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(1),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    right: 30,
    transform: "translateY(-40%)",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "start",
    gap: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
        display: "none",
        right: 10,
    },

    [theme.breakpoints.down("lg")]: {
        right: 0,
        scale: "0.85",
    },
}))

export const CardEquipe = styled(Stack)(({ theme }) => ({
    width: 200,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: theme.spacing(2),
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: "40%",
    right: 52,
    transform: "translateY(-50%)",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "start",
    gap: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
        display: "none",
        right: 10,
    },

    [theme.breakpoints.down("lg")]: {
        right: 10,
        scale: "0.85",
    },
}))
