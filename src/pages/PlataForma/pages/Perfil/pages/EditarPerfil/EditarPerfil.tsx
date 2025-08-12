import { Skeleton, Stack, Typography } from "@mui/material"
import { useEditarPerfil } from "./EditarPerfil.hook"
import { Input } from "../../../../../../components/Input/Input"
import { Select } from "../../../../../../components/select/Select"
import { Button } from "../../../../../../components/Button/Button"

export const EditarPerfil = () => {
    const { control, user } = useEditarPerfil()

    return (
        <>
            <Stack
                sx={{
                    width: {
                        xs: "80%",
                        sm: "70%",
                        md: "50%",
                        lg: "50%",
                    },
                    gap: 2,
                }}
            >
                <Stack
                    direction={"row"}
                    gap={2}
                >
                    <Skeleton
                        variant="circular"
                        width={80}
                        height={80}
                    />

                    <Stack justifyContent={"start"}>

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
                    name="nome"
                    label="Nome"
                />
                <Input
                    tamanho="md"
                    control={control}
                    name="biografia"
                    label="Biografia"
                />
                {user?.tipoUser === "aluno" && (
                    <Select
                        control={control}
                        name="curso"
                        label="Curso"
                        value={"engenharia"}
                        options={[
                            { value: "engenharia", label: "Engenharia" },
                            { value: "medicina", label: "Medicina" },
                            { value: "direito", label: "Direito" },
                            { value: "outro", label: "Outro" },
                        ]}
                    />
                )}
                <Stack
                    alignItems={"start"}
                    direction={"row"}
                    gap={1}
                >
                    <Button
                        tamanho="md"
                        type="submit"
                        sx={{ paddingInline: 1, width: "auto" }}
                    >
                        Deletar conta
                    </Button>
                    <Button
                        variante="ButtonOutlinedBlue"
                        tamanho="md"
                        type="submit"
                        sx={{ paddingInline: 1, width: "auto" }}
                    >
                        Salvar Alterações
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}
