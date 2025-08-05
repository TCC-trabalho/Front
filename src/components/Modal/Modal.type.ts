import { SxProps } from "@mui/material";
import { LucideIcon } from "lucide-react";

export type ModalWrapperProps = {
  open: boolean;
  onClose?: () => void;
  disabledClose?: boolean;
  sx?: SxProps;
  children: React.ReactNode;
};

export type ModalHeaderProps = {
  title?: string;
  subtitle?: string;
  onClose?: () => void;
  disabledClose?: boolean;
  sx?: SxProps;
  Icon?: LucideIcon;
  type?: "normal" | "alert" | "success" | "warning";
};

export type ModalActionsProps = {
  children: React.ReactNode;
  sx?: SxProps;
  ocuparEspacoVazio?: boolean;
};
