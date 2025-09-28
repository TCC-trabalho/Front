import { ButtonBase, styled } from "@mui/material"
export const ButtonVariants = styled(ButtonBase)<{
    tamanho: "sm" | "md" | "lg" | "xl"
    somenteIcone?: boolean
    espacamento: number
}>(({ tamanho, className, somenteIcone, espacamento }) => {
    const sizeMap = {
        sm: { height: 25, fontSize: 15 },
        md: { height: 32, fontSize: 18 },
        lg: { height: 39, fontSize: 21.6 },
        xl: { height: 46, fontSize: 25.2 },
    }

    const { height, fontSize } = sizeMap[tamanho] || sizeMap["md"]

    return {
        width: "auto",
        height: somenteIcone ? "auto" : height,
        paddingInline: somenteIcone ? 0 : espacamento,
        fontSize,

        fontFamily: '"Inter", sans-serif',
        borderRadius: 5,
        fontWeight: 500,
        alignItems: "center",
        gap: 10,
        transition: "opacity 0.3s",

        textDecoration: "none",
        color: "inherit",

        "&:hover": {
            opacity: 0.8,
        },

        "&:disabled": {
            opacity: 0.8,
            background: "grey !important",
            color: "white !important",
            cursor: "not-allowed",
            pointerEvents: "none",
        },

        ...(className?.includes("ButtonRed") && {
            backgroundImage: "linear-gradient( #A91208, #C4423A)",
            color: "#FFFFFF",
        }),

        ...(className?.includes("ButtonBlue") && {
            backgroundImage: "linear-gradient( #064B72, #0B6091)",
            color: "#FFFFFF",
        }),

        ...(className?.includes("ButtonGrey") && {
            background: "#D9D9D9",
            color: "#000000",
        }),

        ...(className?.includes("ButtonOutlinedRed") && {
            background: "#FFFFFF",
            color: "#B83229",
            border: "3px #B83229 solid",
        }),

        ...(className?.includes("ButtonOutlinedBlue") && {
            background: "#FFFCF5",
            color: "#05334A",
            border: "3px #05334A solid",
        }),

        ...(className?.includes("ButtonOutlinedWhite") && {
            background: "transparent",
            color: "white",
            border: "3px white solid",
        }),

        ...(className?.includes("ButtonLink") && {
            background: "transparent",
            color: "#05334A",
            width: "auto",

            "&:hover": {
                opacity: 0.5,
                textDecoration: "underline",
            },
        }),

        ...(className?.includes("ButtonLinkLight") && {
            background: "transparent",
            color: "#6B9EBD",
            width: "auto",

            "&:hover": {
                opacity: 0.5,
                textDecoration: "underline",
            },
        }),

        ...(className?.includes("ButtonLinkBlack") && {
            background: "transparent",
            color: "#3F3F3F",
            width: "auto",

            "&:hover": {
                opacity: 0.5,
            },
        }),

        ...(className?.includes("ButtonLinkWhite") && {
            background: "transparent",
            color: "white",
            width: "auto",

            "&:hover": {
                opacity: 0.5,
            },
        }),

        "@keyframes spin": {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
        },
    }
})
