import { Box, Stack, Typography } from "@mui/material"
import { ProgressHeader } from "../../../../../../../../components/ProgressHeader/ProgressHeader"
import { Button } from "../../../../../../../../components/Button/Button"
import { useCadastroProjeto } from "./CadastroProjeto.hook"
import { Input } from "../../../../../../../../components/Input/Input"
import { Select } from "../../../../../../../../components/select/Select"
import { ProjetoCadastrado } from "../../modais/projetoCadastrado/projetoCadastrado"
import { Controller } from "react-hook-form"
import { X } from "lucide-react"

export const CadastroProjeto = () => {
    const {
        control,
        onSubmit,
        isPendingCadastrarProjeto,
        openModal,
        preview,
        setPreview,
        inputRef,
        dragOver,
        setDragOver,
        setValue,
    } = useCadastroProjeto()

    return (
        <>
            <ProgressHeader
                title="Cadastro seu Projeto"
                subtitle="Cadastre seu projeto e consiga o apoio da nossa plataforma"
                progress={80}
            />
            <Stack
                component="form"
                gap={3}
                p={3}
            >
                <Stack gap={2}>
                    <Controller
                        control={control}
                        name="foto"
                        render={({ field: { onChange } }) => (
                            <Stack
                                gap={1}
                                alignItems="center"
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                >
                                    Foto do projeto
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
                                            disabled={isPendingCadastrarProjeto}
                                            somenteIcone
                                            icon={X}
                                            variante="ButtonLinkWhite"
                                            tamanho="md"
                                            onClick={() => {
                                                onChange(null) // limpa no RHF
                                                setValue("foto", null) // garante limpeza
                                                setPreview(null) // esconde a prévia
                                                if (inputRef.current) inputRef.current.value = "" // permite reescolher o mesmo arquivo
                                            }}
                                            sx={{
                                                position: "absolute",
                                                top: 6,
                                                right: 6,
                                            }}
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
                                            onChange(file)
                                            setPreview(file ? URL.createObjectURL(file) : null)
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
                                        >
                                            Arraste e solte a imagem do seu projeto aqui, ou clique no
                                            botão
                                        </Typography>
                                        <Button
                                            disabled={isPendingCadastrarProjeto}
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
                                            disabled={isPendingCadastrarProjeto}
                                            ref={inputRef}
                                            type="file"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={(e) => {
                                                const file = e.target.files?.[0] ?? null
                                                onChange(file)
                                                setPreview(file ? URL.createObjectURL(file) : null)
                                            }}
                                        />
                                    </Box>
                                )}
                            </Stack>
                        )}
                    />
                    <Input
                        placeholder="Digite o título do seu projeto"
                        control={control}
                        name={"titulo"}
                        tamanho={"sm"}
                        label="Título"
                        fullWidth
                        disabled={isPendingCadastrarProjeto}
                    />

                    <Input
                        placeholder="Digite a descrição do seu projeto"
                        control={control}
                        name={"descricao"}
                        tamanho={"sm"}
                        label="Descrição"
                        fullWidth
                        multiline
                        rows={3}
                        disabled={isPendingCadastrarProjeto}
                    />

                    <Select
                        disabled={isPendingCadastrarProjeto}
                        control={control}
                        name={"area"}
                        label="Área"
                        placeholder="Selecione a área do seu projeto"
                        options={[
                            { value: "tecnologia", label: "Tecnologia" },
                            { value: "administracao", label: "Administração" },
                            { value: "saude", label: "Saúde" },
                            { value: "educacao", label: "Educação" },
                            { value: "comunidade", label: "Comunidade" },
                            { value: "sustentabilidade", label: "Sustentabilidade" },
                            { value: "infraestrutura", label: "Infraestrutura" },
                        ]}
                    />
                </Stack>
                <Stack
                    alignItems={"center"}
                    direction={"row"}
                    gap={2}
                    justifyContent={"center"}
                >
                    <Button
                        tamanho={"lg"}
                        onClick={onSubmit}
                        loading={isPendingCadastrarProjeto}
                        espacamento={20}
                    >
                        Cadastrar
                    </Button>
                </Stack>
            </Stack>
            <ProjetoCadastrado open={openModal} />
        </>
    )
}
