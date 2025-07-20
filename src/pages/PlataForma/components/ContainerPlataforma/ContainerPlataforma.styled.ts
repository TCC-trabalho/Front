import { Stack, styled } from "@mui/material";

export const Container = styled(Stack)(({ theme }) => ({
  minHeight: "100vh",
  overflowX: "hidden",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.up("xs")]: {
    padding: 0,
  },

  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(16),
    paddingTop: theme.spacing(5),
  },

  [theme.breakpoints.up("lg")]: {
    padding: 0,
  },
}));

export const Content = styled(Stack)(() => ({
  minHeight: "100vh",
  overflow: "hidden",
  backgroundColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const CardSugestao = styled(Stack)(({ theme }) => ({
  width: 200,
  position: "fixed",
  top: "45%",
  right: "2rem",
  transform: "translateY(-50%)",
  zIndex: 1000,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),

  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const CardEquipe = styled(Stack)(({ theme }) => ({
  width: 200,
  position: "fixed",
  top: "40%",
  right: 32,
  transform: "translateY(-50%)",
  zIndex: 1000,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),

  [theme.breakpoints.down("md")]: {
    display: "none",
    right: 10
  },

  [theme.breakpoints.down("lg")]: {
    right: 10,
    scale: "0.85"
  },
}));
