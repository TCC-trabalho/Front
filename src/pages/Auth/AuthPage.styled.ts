import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(() => ({
  minHeight: "100vh",
  overflowX: "hidden",
}));

export const Content = styled(Stack)(({ theme }) => ({
  minHeight: "90vh",
  padding: "40px 30%",
  position: "relative",
  backgroundImage: "linear-gradient(#6B9EBD, #0C79B0)",
  overflow: "hidden",

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
}));

export const FormBox = styled(Stack)(() => ({
  zIndex: 1,
  position: "relative",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
}));
