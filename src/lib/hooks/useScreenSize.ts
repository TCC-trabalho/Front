import useMediaQuery from "@mui/material/useMediaQuery"
import { Theme } from "@mui/system"

export const useScreenSize = () => {
    const isExtraLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("xl"))

    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"))
    const isMediumScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"))
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"))
    const isExtraSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("xs"))
    const isOnlyLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.only("lg"))

    return {
        isExtraLargeScreen,
        isLargeScreen,
        isMediumScreen,
        isSmallScreen,
        isExtraSmallScreen,
        isOnlyLargeScreen,
    }
}
