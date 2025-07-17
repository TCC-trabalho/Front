import { createTheme } from "@mui/material"
import { getRandomSkeletonColor } from "../utils/getRandomSkeletonColor"

export const theme = createTheme({
    typography: {
        fontFamily: '"Inter", sans-serif',
    },
    components: {
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    backgroundColor: getRandomSkeletonColor(),

                }
            }
        }
    }

})