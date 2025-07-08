import { ButtonProp } from "./Button.types"
import { Link } from "react-router"
import * as Component from "./Button.styled"

export const Button = (
    {
        variante = "ButtonRed",
        tamanho,
        loading,
        disabled,
        children,
        icon: Icon,
        somenteIcone = false,
        ...props
    }: ButtonProp) => {

    const iconSizeMap = {
        sm: 15,
        md: 20,
        lg: 25,
        xl: 30
    };

    const iconSize = iconSizeMap[tamanho] || 20;

    return (
        <Component.ButtonVariants
            disabled={disabled || loading}
            LinkComponent={Link}
            className={variante}
            tamanho={tamanho}
            somenteIcone={somenteIcone}
            {...props}
        >
            {!somenteIcone && <span>{children}</span>}
            {Icon && <Icon size={iconSize} />}
        </Component.ButtonVariants>
    )
}