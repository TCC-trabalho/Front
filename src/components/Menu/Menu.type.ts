import { DrawerProps } from "@mui/material";

export interface MenuProps extends DrawerProps {
  variante: "user" | "empresa";
  header?: MenuHeader[];
  loading?: boolean;
}

export interface MenuHeader {
  foto: string;
  nomeUser: string;
  nomeProjeto?: string;
  area?: string;
}
