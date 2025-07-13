import { ButtonBaseProps } from "@mui/material";
import { LucideIcon } from "lucide-react";

export interface ButtonProp extends ButtonBaseProps {
  variante?: "ButtonRed" | "ButtonBlue " | "ButtonOutlinedBlue" | "ButtonLink" | "ButtonLinkLight";
  tamanho: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  to?: string;
    href?: string;
  viewTransition?: boolean;
  icon?: LucideIcon;
  somenteIcone?: boolean;
}
