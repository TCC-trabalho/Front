import { Stack, styled, Tab, Tabs } from "@mui/material"

export const FormWrapper = styled(Stack)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#fffcf5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    gap: 20,
    paddingBottom: theme.spacing(1),

    ".FormHeader": {
        textAlign: "center",
        paddingBottom: "30px",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(#064B72, #0B6091)",
        width: "100%",
        borderRadius: "10px 10px 0px 0px",
        color: "white",
        gap: 10,
    },
}))

export const TabWrapper = styled(Tabs)(() => ({
    width: "100%",
    ".MuiTabs-indicator": {
        display: "none",
    },
}))

export const TabItem = styled(Tab)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: "#11425E",
    color: "white",
    opacity: 0.5,
    fontWeight: "bold",
    minHeight: 48,
    "&.Mui-selected": {
        opacity: 1,
        color: "white",
        backgroundColor: "transparent",
    },
}))
