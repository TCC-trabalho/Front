import { Drawer, Stack, useMediaQuery, useTheme } from "@mui/material"
import * as Component from "./Header.styled"
import { headerProps } from "./Header.type"
import { LogoNexus } from "../../assets"
import { useState } from "react"
import { Button } from "../Button/Button"
import { Menu } from "lucide-react"

export const Header = ({ variante = "LigthHeader", logo = false, children, ...props }: headerProps) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Component.HeaderContainer {...props} className={variante}>

            {logo ? (
                <Stack direction={"row"}><LogoNexus /></Stack>
            ) : (
                <></>
            )}

            {isMobile ? (
                <>
                    <Button
                        onClick={() => setMenuOpen(true)}
                        color="inherit"
                        tamanho={"xl"}
                        icon={Menu}
                        somenteIcone
                    />
                    <Drawer
                        anchor="right"
                        open={menuOpen}
                        onClose={() => setMenuOpen(false)}
                    >
                        <Stack width={250} minHeight={"90%"} padding={2} spacing={2} justifyContent={"space-between"}>
                            {children}
                        </Stack>
                    </Drawer>
                </>
            ) : (
                <Stack direction={"row"} gap={10}>
                    {children}
                </Stack>
            )}

        </Component.HeaderContainer>
    )
} 