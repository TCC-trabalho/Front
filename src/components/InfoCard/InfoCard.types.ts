import { CardProps } from "@mui/material";

export interface InfoCardProps extends CardProps {
  header?: boolean;
  title?: string
  variante: "Transparent" | "White";
  cor: "vermelho" | "azul" | "branca";
  Click?: () => void
}
