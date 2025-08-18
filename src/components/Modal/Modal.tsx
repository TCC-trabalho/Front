import { ModalActionsProps, ModalHeaderProps, ModalWrapperProps } from "./Modal.type"
import * as Styled from "./Modal.styled"
import { Fade, Stack, Tooltip, Typography } from "@mui/material"
import { useScreenSize } from "../../lib/hooks/useScreenSize"
import { Button } from "../Button/Button"
import { X } from "lucide-react"

export const Wrapper = ({ open, onClose, disabledClose, sx, children }: ModalWrapperProps) => {
    return (
        <Styled.Wrapper
            onClose={disabledClose ? undefined : onClose}
            closeAfterTransition
            open={open}
        >
            <Fade
                in={open}
                timeout={200}
            >
                <Stack
                    className="modal-card-wrapper"
                    sx={{ maxWidth: 554, ...sx }}
                >
                    {children}
                </Stack>
            </Fade>
        </Styled.Wrapper>
    )
}

export const Header = ({
    title,
    subtitle,
    onClose,
    disabledClose,
    sx,
    Icon,
    type = "normal",
}: ModalHeaderProps) => {
    const { isSmallScreen } = useScreenSize()

    return (
        <Styled.Header sx={{ ...sx }}>
            {Icon && (
                <Icon
                    size={75}
                    className={type}
                />
            )}

            <Stack className="modal-texts-wrapper">
                <Typography component="h1">{title}</Typography>
                {subtitle && <Typography>{subtitle}</Typography>}
            </Stack>

            {onClose && (
                <Tooltip
                    title={"Fechar"}
                    arrow
                    placement="top"
                >
                    <Button
                        somenteIcone
                        tamanho={isSmallScreen ? "md" : "lg"}
                        className="modal-close-button"
                        onClick={onClose}
                        disabled={disabledClose}
                        icon={X}
                    />
                </Tooltip>
            )}
        </Styled.Header>
    )
}

export const Actions = ({ children, sx, ocuparEspacoVazio }: ModalActionsProps) => {
    return (
        <Styled.Actions
            sx={{
                ...(ocuparEspacoVazio && {
                    flex: 1,
                    justifyContent: "space-between",

                    ">*": {
                        flexGrow: 1,
                        maxWidth: "inherit",
                    },
                }),
                ...sx,
            }}
        >
            {children}
        </Styled.Actions>
    )
}
