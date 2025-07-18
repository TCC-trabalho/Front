import { ButtonBase, styled } from "@mui/material";
export const ButtonVariants = styled(ButtonBase)<{ tamanho: "sm" | "md" | "lg" | "xl"; somenteIcone?: boolean; }>(({ tamanho, className, somenteIcone }) => {
    const sizeMap = {
        sm: { width: 80, height: 25, fontSize: 15 },
        md: { width: 110, height: 32, fontSize: 18 },
        lg: { width: 140, height: 39, fontSize: 21.6 },
        xl: { width: 170, height: 46, fontSize: 25.2 },
    };

    const { width, height, fontSize } = sizeMap[tamanho] || sizeMap["md"];

    return {
        width: somenteIcone ? "auto" : width,
        height: somenteIcone ? "auto" : height,
        paddingInline: 2,
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


        ...(className?.includes("ButtonRed") && {
            backgroundColor: "#B83229",
            color: "#FFFFFF"
        }),

        ...(className?.includes("ButtonBlue") && {
            backgroundImage: "linear-gradient( #064B72, #0B6091)",
            color: "#FFFFFF"
        }),

        ...(className?.includes("ButtonGrey") && {
            background: "#D9D9D9",
            color: "#000000"
        }),

        ...(className?.includes("ButtonOutlinedBlue") && {
            background: "#FFFCF5",
            color: "#05334A",
            border: "3px #05334A solid"
        }),

        ...(className?.includes("ButtonOutlinedWhite") && {
            background: "transparent",
            color: "white",
            border: "3px white solid"

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


    };
});
