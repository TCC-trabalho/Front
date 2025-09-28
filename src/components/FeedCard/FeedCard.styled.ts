import { styled, ButtonBase } from "@mui/material"

export const FeedCardWrapper = styled(ButtonBase)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",

    "&:hover": {
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
    },

    backgroundColor: "#FFFFFF",
    width: 510,
    height: 457,
    padding: theme.spacing(2),
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    gap: theme.spacing(3),

    ".header": {
        height: 350,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },

    ".content": {
        gap: theme.spacing(1),
    },

    [theme.breakpoints.down("sm")]: {
        width: 310,
        height: "auto",
        ".header": {
            overflow: "unset",
            height: 180,
            img: {
                width: "100%",
                height: 180,
            },
        },
    },
}))
