import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { CodigoRecuperacaoSchema } from "../../RecuperarSenha.schema"
import { useRef, useState } from "react"
import { toast } from "sonner"
import { useNavigate, useSearchParams } from "react-router"

export const useVerificarCodigo = () => {

    const [params] = useSearchParams()
    const tipoUser = params.get("User")
    const email = params.get("Email")

    const navigate = useNavigate()

    const {
        setValue,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<{ codigo: string }>({
        resolver: yupResolver(CodigoRecuperacaoSchema),
        defaultValues: { codigo: "" },
    })


    const refs = useRef<HTMLInputElement[]>([])
    const [digits, setDigits] = useState(Array(4).fill(""))

    const updateCode = (vals: string[]) => {
        const code = vals.join("")
        setValue("codigo", code)
        if (code.length === 4) trigger("codigo")
    }

    const handleChange = (i: number, v: string) => {
        const d = [...digits]
        d[i] = v.replace(/\D/g, "").slice(-1)
        setDigits(d)
        updateCode(d)
        if (d[i] && i < 3) refs.current[i + 1]?.focus()
    }

    const handleKey = (e: React.KeyboardEvent, i: number) => {
        const key = e.key
        const d = [...digits]
        if (key === "Backspace") {
            if (!d[i] && i > 0) refs.current[i - 1]?.focus()
            d[i] = ""
        }
        if (key === "ArrowLeft" && i > 0) refs.current[i - 1]?.focus()
        if (key === "ArrowRight" && i < 3) refs.current[i + 1]?.focus()
        setDigits(d)
        updateCode(d)
    }

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const text = e.clipboardData.getData("Text").replace(/\D/g, "").slice(0, 4)
        if (!text) return
        const arr = [...text.padEnd(4)].slice(0, 4)
        setDigits(arr)
        updateCode(arr)
        refs.current[Math.min(text.length - 1, 3)]?.focus()
    }

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        navigate(`/recuperar-senha?step=TrocarSenha&User=${tipoUser}&Email=${email}`)
    })

    const handleReenviarCodigo = () => {
        console.log("reenviar codigo")
        toast.success("Código reenviado com sucesso!")
    }

    return {
        errors,
        handleChange,
        handleKey,
        handlePaste,
        onSubmit,
        refs,
        digits,
        handleReenviarCodigo,
    }
}
