import { AppBarProps } from "@mui/material"

export interface headerProps extends AppBarProps {
    variante: "LigthHeader" | "BlueHeader"
    logo?: boolean
}