import { Controller, FieldValues } from "react-hook-form"
import { InputFotoProps } from "./InputFoto.types"
import { Box, Stack, Typography } from "@mui/material"
import { Button } from "../Button/Button"
import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export const InputFoto = <TFieldValues extends FieldValues>({
    label,
    initialUrl = null,
    disabled = false,
    name,
    control,
}: InputFotoProps<TFieldValues>) => {
    const [preview, setPreview] = useState<string | null>(initialUrl)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [dragOver, setDragOver] = useState(false)

    // sincroniza prévia quando initialUrl muda (edição)
    useEffect(() => {
        setPreview(initialUrl ?? null)
    }, [initialUrl])

    const clearInputEl = () => {
        if (inputRef.current) inputRef.current.value = ""
    }

    const handleSelectFile = (file: File | null, onChange: (v: File | null) => void) => {
        onChange(file)
        if (!file) {
            setPreview(null)
            clearInputEl()
            return
        }
        const url = URL.createObjectURL(file)
        setPreview((old) => {
            if (old && old.startsWith("blob:")) URL.revokeObjectURL(old)
            return url
        })
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => (
                <Stack
                    gap={1}
                    alignItems="center"
                >
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                    >
                        {label}
                    </Typography>

                    {preview ? (
                        <Box sx={{ position: "relative", display: "inline-block" }}>
                            <Box
                                component="img"
                                src={preview}
                                alt="Prévia da foto"
                                sx={{
                                    maxWidth: 360,
                                    maxHeight: 220,
                                    objectFit: "cover",
                                    borderRadius: 2,
                                    boxShadow: 1,
                                }}
                            />
                            <Button
                                disabled={disabled}
                                somenteIcone
                                icon={X}
                                variante="ButtonLinkWhite"
                                tamanho="md"
                                onClick={() => handleSelectFile(null, onChange)}
                                sx={{ position: "absolute", top: 6, right: 6 }}
                                aria-label="Remover foto"
                            />
                        </Box>
                    ) : (
                        <Box
                            onClick={() => inputRef.current?.click()}
                            onDragOver={(e) => {
                                e.preventDefault()
                                setDragOver(true)
                            }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={(e) => {
                                e.preventDefault()
                                setDragOver(false)
                                const file = e.dataTransfer.files?.[0] ?? null
                                handleSelectFile(file, onChange)
                            }}
                            sx={{
                                border: "2px dashed",
                                borderColor: dragOver ? "primary.main" : "divider",
                                borderRadius: 2,
                                p: 3,
                                cursor: "pointer",
                                backgroundColor: dragOver ? "action.hover" : "transparent",
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ mb: 1 }}
                                paddingInline={10}
                            >
                                Arraste e solte a imagem que deseja aqui, ou clique no botão para selecionar o arquivo em seu dispositivo.
                            </Typography>

                            <Button
                                disabled={disabled}
                                tamanho="sm"
                                variante="ButtonLink"
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    inputRef.current?.click()
                                }}
                            >
                                Selecionar foto
                            </Button>

                            <input
                                id="foto-input"
                                disabled={disabled}
                                ref={inputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={(e) => {
                                    const file = e.target.files?.[0] ?? null
                                    handleSelectFile(file, onChange)
                                }}
                            />
                        </Box>
                    )}

                    <Typography
                        variant="body2"
                        color="#A91208"
                        mt={0.5}
                    >
                        {error?.message || " "}
                    </Typography>
                </Stack>
            )}
        />
    )
}
