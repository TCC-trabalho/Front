import { Stack, styled } from "@mui/material"

export const FormWrapper = styled(Stack)(({ theme }) => ({
    width: "100%",
    backgroundColor: "#fffcf5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    gap: 20,
    paddingBottom: theme.spacing(5),

    ".FormHeader": {
        textAlign: "center",
        paddingBlock: "30px",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient( #A91208, #C4423A)",
        width: "100%",
        borderRadius: "10px 10px 0px 0px",
        color: "white",
        gap: 10,
    },
}))
