import { ButtonProp } from "./Button.types"
import { Link } from "react-router"
import * as Component from "./Button.styled"
import { LoaderCircle } from "lucide-react"

export const Button = ({
    variante = "ButtonRed",
    tamanho,
    loading,
    disabled,
    children,
    icon: Icon,
    ladoIcon = "esquerda",
    somenteIcone = false,
    espacamento,
    ...props
}: ButtonProp) => {
    const iconSizeMap = {
        sm: 15,
        md: 20,
        lg: 25,
        xl: 30,
    }

    const iconSize = iconSizeMap[tamanho] || 20

    return (
        <Component.ButtonVariants
            disabled={disabled || loading}
            LinkComponent={Link}
            className={variante}
            tamanho={tamanho}
            somenteIcone={somenteIcone}
            espacamento={espacamento || 0}
            {...props}
        >
           {loading ? (
                <LoaderCircle
                    size={iconSize}
                    style={{
                        animation: "spin 1s linear infinite",
                    }}
                />
            ) : (
                <>
                    {ladoIcon == "esquerda" && Icon && <Icon size={iconSize} />}
                    {!somenteIcone && <span>{children}</span>}
                    {ladoIcon == "direita" && Icon && <Icon size={iconSize} />}
                </>
            )}
        </Component.ButtonVariants>
    )
}
