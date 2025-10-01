import { Stack, Typography } from "@mui/material"
import { IntegranteCardProps } from "./IntegranteCard.types"
import { Button } from "../Button/Button"
import { X } from "lucide-react"
import { truncateText } from "../../lib/utils/truncateText"

export const IntegranteCard = ({ nome, email, OnExcluir, disabledExcluir }: IntegranteCardProps) => {
    return (
        <Stack
            gap={1.5}
            sx={{
                bgcolor: "#fff",
                p: 1,
                borderRadius: 1,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                "&:hover": { boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.35)" },
                transition: "box-shadow 0.3s ease-in-out",
            }}
        >
            <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="body1">{truncateText(nome, 13)}</Typography>

                <Button
                    variante="ButtonLinkBlack"
                    tamanho="sm"
                    onClick={OnExcluir}
                    loading={disabledExcluir}
                    somenteIcone
                    icon={X}
                />
            </Stack>
            <Typography variant="body2">{truncateText(email, 30)}</Typography>
        </Stack>
    )
}
