import { LinearProgress, Stack, Typography } from "@mui/material";
import { ProgressHeaderProps } from "./ProgressHeader.types";

export const ProgressHeader = ({ title, subtitle, progress }: ProgressHeaderProps) => {
  return (
    <Stack 
    spacing={1} 
    sx={{
        backgroundImage: "linear-gradient( #064B72, #0B6091)",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        p: 3
    }}
    >
      <Typography variant="h4" color="#FFFFFF">{title}</Typography>
      {subtitle && <Typography variant="subtitle1" color="#FFFFFF">{subtitle}</Typography>}
      <LinearProgress variant="determinate" value={progress} color="error" />
    </Stack>
  );
};
