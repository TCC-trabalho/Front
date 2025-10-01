import { LucideIcon } from "lucide-react";
import { ButtonProp } from "../Button/Button.types";

export interface EmptyStateProps {
    icon?: LucideIcon
    message: string;
    buttonText?: string;
    button?: ButtonProp | null;
    width: number | string | object;
    height: number | string | object;
}