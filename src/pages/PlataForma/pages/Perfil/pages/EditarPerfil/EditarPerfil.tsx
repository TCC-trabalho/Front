import { Skeleton, Stack, Typography } from "@mui/material"
import { useEditarPerfil } from "./EditarPerfil.hook"
import { Input } from "../../../../../../components/Input/Input"
import { Select } from "../../../../../../components/select/Select"
import { Button } from "../../../../../../components/Button/Button"

export const EditarPerfil = () => {
    const { control, user, onSubmit, isPending } = useEditarPerfil()

    return (
        <>
            <Stack
                sx={{
                    width: {
                        xs: "80%",
                        sm: "70%",
                        md: "50%",
                        lg: "30%",
                    },
                    gap: 2,
                }}
            >
                <Stack
                    direction={"row"}
                    gap={3}
                >
                    <Skeleton
                        variant="circular"
                        width={80}
                        height={80}
                    />

                    <Stack justifyContent={"center"}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                        >
                            {user?.nomeUsuario}
                        </Typography>

                        <Typography
                            variant="subtitle2"
                            fontWeight={600}
                        >
                            {user?.email}
                        </Typography>
                    </Stack>
                </Stack>
                <Input
                    tamanho="sm"
                    control={control}
                    name="senha"
                    label="Senha"
                    type="password"
                    placeholder="Nova Senha"
                    disabled={isPending}
                />
                <Input
                    tamanho="sm"
                    control={control}
                    name="nome"
                    label="Nome"
                    disabled={isPending}
                />

                <Input
                    type="tel"
                    control={control}
                    name={"telefone"}
                    tamanho={"sm"}
                    label="Telefone"
                    mask="(99) 99999-9999"
                    fullWidth
                    disabled={isPending}
                />

                {user?.tipoUser === "orientador" && (
                    <Input
                        tamanho="sm"
                        control={control}
                        name="formacao"
                        label="Formação"
                        disabled={isPending}
                    />
                )}
                
                <Input
                    tamanho="md"
                    control={control}
                    name="biografia"
                    label="Biografia"
                    multiline
                    rows={4}
                    disabled={isPending}
                />
                {user?.tipoUser === "aluno" && (
                    <Select
                        control={control}
                        name="curso"
                        label="Curso"
                        options={[
                            { value: "engenharia", label: "Engenharia" },
                            { value: "medicina", label: "Medicina" },
                            { value: "direito", label: "Direito" },
                            { value: "outro", label: "Outro" },
                        ]}
                        disabled={isPending}
                    />
                )}

                <Stack
                    alignItems={"start"}
                    direction={"row"}
                >
                    <Button
                        variante="ButtonOutlinedBlue"
                        tamanho="md"
                        sx={{ paddingInline: 1, width: "auto" }}
                        onClick={onSubmit}
                        loading={isPending}
                    >
                        Salvar Alterações
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
