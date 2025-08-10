import { LinearProgress, Stack, Typography } from "@mui/material"
import { ProgressHeaderProps } from "./ProgressHeader.types"

export const ProgressHeader = ({ title, subtitle, progress }: ProgressHeaderProps) => {
    return (
        <Stack
            sx={{
                alignItems: "center",
                backgroundImage: "linear-gradient( #064B72, #0B6091)",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                p: 3,
            }}
        >
            <Typography
                variant="h4"
                color="#FFFFFF"
            >
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    variant="subtitle1"
                    color="#6B9EBD"
                >
                    {subtitle}
                </Typography>
            )}
            <Stack
                width={"100%"}
                textAlign={"end"}
            >
                <Typography
                    variant="body2"
                    color="#FFFFFF"
                >
                    {progress}%
                </Typography>
                <LinearProgress
                    variant="determinate"
                    value={progress}
                    color="error"
                    sx={{
                        bgcolor: "#FFFCF5",
                        borderRadius: "10px",
                        height: 5,
                        width: "100%",
                    }}
                />
            </Stack>
        </Stack>
    )
}
