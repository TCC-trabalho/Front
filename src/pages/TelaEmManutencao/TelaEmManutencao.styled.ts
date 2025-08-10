import { Stack, styled } from "@mui/material"

export const Container = styled(Stack)(() => ({
    minHeight: "100vh",
    overflowX: "hidden",
}))

export const Content = styled(Stack)(() => ({
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",

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
        opacity: "0.5",
    },
}))

export const EmManutencaoBox = styled(Stack)(({ theme }) => ({
    width: 500,
    textAlign: "center",
    color: "#11425E",
    zIndex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
        width: 300,
    },

    ".questionIcon": {
        width: 150,
        height: 150,
        backgroundColor: "#11425E",
        borderRadius: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
}))
