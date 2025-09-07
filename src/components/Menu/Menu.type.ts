import { DrawerProps } from "@mui/material"
import { Enum } from "../../api/enum/enum"

export interface MenuProps extends DrawerProps {
    variante: Enum.TipoUsuario | null
    header?: MenuHeader[]
    loading?: boolean
}

export interface MenuHeader {
    foto?: string
    nomeUser: string
    quatidadeProjetos?: string
    area?: string
}
