import { Stack, Typography } from "@mui/material"
import { Button } from "../Button/Button"
import { EmptyStateProps } from "./EmptyState.types"

export const EmptyState = ({
    icon: Icon,
    message,
    buttonText,
    button,
    width,
    height,
}: EmptyStateProps) => {
    const { tamanho, ...buttonProps } = button || {}

    return (
        <>
            <Stack
                sx={{
                    width: width,
                    height: height,
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {Icon && (
                    <Icon
                        size={100}
                        color="#00000040"
                    />
                )}
                <Stack
                    gap={2}
                    alignItems="center"
                >
                    <Typography
                        variant="h5"
                        color="#00000040"
                        textAlign={"center"}
                    >
                        {message}
                    </Typography>
                    {button && (
                        <Button
                            {...buttonProps}
                            tamanho={tamanho ?? "md"}
                        >
                            {buttonText}
                        </Button>
                    )}
                </Stack>
            </Stack>
        </>
    )
}
