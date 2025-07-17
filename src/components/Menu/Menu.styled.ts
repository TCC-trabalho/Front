import { Stack, styled } from "@mui/material";

export const Menu = styled(Stack)(({ theme }) => ({
  backgroundColor: "#FFFCF5",
  borderRight: "1px #B3B3B3 solid",
  minHeight: "100vh",
  gap: theme.spacing(2),
  color: "#3F3F3F",

   [theme.breakpoints.down("lg")]: {
    maxHeight: "500px", 
    overflowY: "auto",   
  },

  ".Usercontent": {
    width: "100%",
    gap: theme.spacing(1),
  },

  ".Projectcontent": {
    width: "100%",
    alignItems: "start",
    gap: theme.spacing(1),
  },

  ".body": {
    width: "100%",
    alignItems: "Start",
    gap: theme.spacing(3),
   
  },
}));
