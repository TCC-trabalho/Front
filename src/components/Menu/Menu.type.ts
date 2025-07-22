import { DrawerProps } from "@mui/material";

export interface MenuProps extends DrawerProps {
  variante: "aluno" | "orientador" | "empresa" | null;
  header?: MenuHeader[];
  loading?: boolean;
}

export interface MenuHeader {
  foto?: string;
  nomeUser: string;
  nomeProjeto?: string;
  area?: string;
}
