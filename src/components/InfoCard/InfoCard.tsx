import { Stack, Typography } from "@mui/material";
import * as Component from "./InfoCard.styled";
import { InfoCardProps } from "./InfoCard.types";

export const InfoCard = ({
    header = false,
    title,
    variante,
    cor,
    children,
    Click,
    ...props
}: InfoCardProps) => {
    return (
        <Component.InfoCardVariants
            header={header}
            variante={variante}
            cor={cor}
            onClick={Click}
            {...props}
        >
            {header && (
                <Stack className="Header">

                    <Typography variant="h4" fontWeight="600" textAlign={"center"}>
                        {title}
                    </Typography>

                </Stack>
            )}

            <Stack sx={{ alignItems: "center", p: 3, minHeight: 250}}>
               {children}
            </Stack>
        </Component.InfoCardVariants>
    );
};
