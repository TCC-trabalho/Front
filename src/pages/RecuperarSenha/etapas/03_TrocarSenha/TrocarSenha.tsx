import { Stack } from "@mui/material"
import { Input } from "../../../../components/Input/Input"
import { Button } from "../../../../components/Button/Button"
import { useTrocarSenha } from "./TrocarSenha.hook"

export const TrocarSenha = () => {
    const { control, onSubmit, isRedefinindoSenha } = useTrocarSenha()

    return (
        <Stack
            gap={3}
            component={"form"}
            width={"80%"}
            onSubmit={onSubmit}
        >
            <Input
                control={control}
                name="senha"
                label="Nova Senha"
                type="password"
                tamanho="md"
                disabled={isRedefinindoSenha}
            />
            <Input
                control={control}
                name="confirmarSenha"
                type="password"
                label="Confirmar Nova Senha"
                tamanho="md"
                disabled={isRedefinindoSenha}
            />

            <Button
                tamanho="md"
                variante="ButtonBlue"
                type="submit"
                loading={isRedefinindoSenha}
            >
                Redefinir Senha
            </Button>
        </Stack>
    )
}
