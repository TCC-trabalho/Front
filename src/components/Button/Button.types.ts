import { ButtonBaseProps } from "@mui/material";
import { LucideIcon } from "lucide-react";

export interface ButtonProp extends ButtonBaseProps {
  variante?:
    | "ButtonRed"
    | "ButtonBlue"
    | "ButtonGrey"
    | "ButtonOutlinedBlue"
    | "ButtonOutlinedWhite"
    | "ButtonLink"
    | "ButtonLinkLight"
    | "ButtonLinkBlack"
    | "ButtonLinkWhite"
  tamanho: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  to?: string;
  href?: string;
  viewTransition?: boolean;
  icon?: LucideIcon;
  ladoIcon?: "direita" | "esquerda"
  somenteIcone?: boolean;
}
