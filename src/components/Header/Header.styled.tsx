import { AppBar, styled } from "@mui/material";

export const HeaderContainer = styled(AppBar)(({ className }) => ({
    top: 0,
    position: "fixed",
    minHeight: 70,
    paddingInline: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",


    ...(className?.includes("LigthHeader") && {
        backgroundColor: "#FFFCF5",
        color: "#05334A"
    }),

    ...(className?.includes("BlueHeader") && {
        backgroundColor: "#064B72",
        color: "white"
    })

}))