import { Stack, Typography } from "@mui/material"
import { IntegranteCardProps } from "./IntegranteCard.types"
import { Button } from "../Button/Button"
import { CircleOff, X } from "lucide-react"
import { truncateText } from "../../lib/utils/truncateText"
import * as Component from "./IntegranteCard.styled"

export const IntegranteCard = ({
    nome,
    email,
    OnExcluir,
    disabledExcluir,
    loadingExcluir,
    variant,
}: IntegranteCardProps) => {
    return (
        <Component.IntegranteCardVariants
            variant={variant ?? "white"}
            gap={1.5}
        >
            <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="body1">{truncateText(nome, 13)}</Typography>

                <Button
                    variante="ButtonGrey"
                    tamanho="sm"
                    onClick={OnExcluir}
                    disabled={disabledExcluir}
                    loading={loadingExcluir}
                    somenteIcone
                    icon={disabledExcluir ? CircleOff : X}
                />
            </Stack>
            <Typography variant="body2">{truncateText(email, 30)}</Typography>
        </Component.IntegranteCardVariants>
    )
}
