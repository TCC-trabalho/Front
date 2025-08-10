import { Modal, Stack, styled } from "@mui/material"

export const Wrapper = styled(Modal)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100dvh",
    display: "flex",
    overflowY: "auto",
    padding: theme.spacing(2),

    ">.modal-card-wrapper": {
        outline: "none",
        margin: "auto",
        width: "100%",
        boxShadow: `
                0 8px 8px -4px #10182808,
                0 20px 24px -4px #10182814
            `,
        backgroundColor: "white",
        borderRadius: theme.spacing(1.5),
    },
}))

export const Header = styled(Stack)(({ theme }) => ({
    position: "relative",
    alignItems: "flex-start",
    padding: theme.spacing(2.5, 2),
    gap: theme.spacing(2),

    ".normal": {
        color: "#101828",
    },
    ".alert": {
        color: "#D92D2A",
    },
    ".success": {
        color: "#007A33",
    },
    ".warning": {
        color: "#B47C00",
    },

    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(3),
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    ">.modal-close-button": {
        position: "absolute",
        right: 12,
        top: 12,

        svg: {
            width: 16,
            height: 16,

            path: { stroke: "#98A2B3" },
        },
    },

    ">.modal-texts-wrapper": {
        gap: theme.spacing(0.5),

        ">h1": { ...theme.typography.h5, color: "#101828" },

        p: {
            ...theme.typography.subtitle1,
            color: "#475467",

            "b, strong": { ...theme.typography.subtitle1 },
        },
    },
}))

export const Actions = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(4, 3, 3),
    flexDirection: "row",
    gap: theme.spacing(1.5),
    justifyContent: "flex-end",
}))
