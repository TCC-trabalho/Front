import { InputBase, styled } from "@mui/material"

export const Input = styled(InputBase, {
    shouldForwardProp: (prop) => prop !== "tamanho" && prop !== "erro",
})<{ tamanho: "sm" | "md"; erro?: string }>(({ tamanho, erro }) => ({
    width: "100%",
    border: `1px solid ${erro ? "#A91208" : "#064B72"}`,
    borderRadius: 8,
    padding: tamanho === "sm" ? "8px 12px 8px 0px" : "14px 16px 14px 0px",
    fontSize: tamanho === "sm" ? 14 : 16,
    backgroundColor: "#fff",
    position: "relative",
    transition: "border-color 0.2s ease",

    "&:focus-within": {
        border: `2px solid ${erro ? "#A91208" : "#05334A"}`,
    },

    "& .MuiInputBase-input": {
        padding: 0,
    },
}))
