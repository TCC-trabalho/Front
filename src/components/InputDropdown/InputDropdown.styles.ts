import { Estilos } from "./InputDropdown.types"

export const estilos: Estilos = {
    popper: (theme) => ({
        "&.MuiPopper-root": {
            "> div": {
                marginTop: theme.spacing(0.5),
                border: "1px solid #E4E7EC",
                borderRadius: theme.spacing(1),
                boxShadow:
                    "0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)",

                ">ul": {
                    "&::-webkit-scrollbar": {
                        width: 12,
                    },

                    "&::-webkit-scrollbar-thumb": {
                        border: "2px solid #FFF",
                        background: "#E4E7EC",
                        borderRadius: 100,
                    },

                    padding: theme.spacing(0.75),

                    li: {
                        marginTop: 0.25,
                        fontSize: 16,
                        fontWeight: 400,
                        borderRadius: theme.spacing(0.75),
                        padding: theme.spacing(1.25),
                        color: "#475467",
                    },
                },
            },
        },
    }),

    input:
        ({ erro }) =>
        (theme) => ({
            ".MuiInputBase-root": {
                padding: theme.spacing(1.25, 1.75),
                height: 40,
                backgroundColor: "#FFF",

                fieldset: {
                    border: `1px solid ${erro ? "#A91208" : "#064B72"}`,
                    borderRadius: 2,

                    transition: ".2s ease",

                    ...(erro && {
                        border: "1px solid #A91208",
                    }),
                },

                "&.Mui-focused": {
                    fieldset: {
                        border: `2px solid ${erro ? "#A91208" : "#05334A"}`,
                    },
                },

                "&.Mui-disabled": {
                    backgroundColor: "#f9fafb",
                },

                input: {
                    padding: "0 !important",
                    color: "#101828",

                    "&::placeholder": {
                        color: "#667085",
                    },

                    fontSize: 16,
                    fontWeight: 400,
                },
            },

            svg: {
                width: 17,
                height: 17,
                minWidth: 17,

                path: {
                    stroke: "#05334A",
                },
            },

            ".MuiAutocomplete-clearIndicator": {
                svg: {
                    width: 14,
                    height: 14,
                    minWidth: 14,
                },
            },
        }),
}
