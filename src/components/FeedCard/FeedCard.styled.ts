import { Stack, styled } from "@mui/material";

export const FeedCardWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: "transparent",
  width: 600,
  scale: 0.85,

  gap: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    scale: 0.65,
    height: 450,
  },

  ".header": {
    height: 350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },

  ".content": {
    gap: theme.spacing(1),
  },
}));
