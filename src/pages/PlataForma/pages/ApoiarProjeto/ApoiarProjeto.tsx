import { Select } from "../../../../components/select/Select"
import { Input } from "../../../../components/Input/Input"
import { useApoiarProjeto } from "./ApoiarProjeto.hook"
import { Button } from "../../../../components/Button/Button"
import { Stack, Typography } from "@mui/material"
import { truncateText } from "../../../../lib/utils/truncateText"

export const ApoiarProjeto = () => {
    const { control, onSubmit, projeto, isPending, isPatrocinarPending } = useApoiarProjeto()

    return (
        <Stack
            component={"form"}
            onSubmit={onSubmit}
            justifyContent={"center"}
            sx={{
                width: {
                    xs: "90%",
                    md: "55%",
                },
                pt: 2,
                gap: 2,
            }}
        >
            <Select
                control={control}
                disabled={isPending || isPatrocinarPending}
                name="tipoApoio"
                label="Tipo de Apoio"
                tamanho="md"
                placeholder="Selecione o tipo de apoio"
                options={[
                    { label: "Dinheiro", value: "dinheiro" },
                    { label: "Divulgação", value: "divulgacao" },
                    { label: "Equipamentos", value: "equipamentos" },
                    { label: "Capacitação", value: "capacitacao" },
                ]}
            />

            <Typography
                variant="h4"
                fontWeight={500}
            >
                {projeto?.titulo}
            </Typography>

            <Typography variant="h6">{projeto?.area}</Typography>

            <Typography variant="subtitle1">Status: {projeto?.status}</Typography>

            <Typography variant="subtitle1">Professor Orientador: {projeto?.id_orientador}</Typography>

            <Typography sx={{ width: "90%" }}>{truncateText(projeto?.descricao || "", 460)}</Typography>

            <Stack gap={2}>
                <Input
                    control={control}
                    name="valorApoio"
                    label="Selecione a quantia para cotribuir"
                    tamanho="md"
                    placeholder="R$ 0,00"
                    mask="R$ 999.999.999,99"
                    disabled={isPending || isPatrocinarPending}
                />

                <Input
                    control={control}
                    name="mensagemApoio"
                    label="Escreva uma mensagem para os estudantes!"
                    tamanho="md"
                    placeholder="Sua mensagem..."
                    multiline
                    rows={4}
                    disabled={isPending || isPatrocinarPending}
                />

                <Button
                    type="submit"
                    tamanho="lg"
                    loading={isPatrocinarPending}
                    sx={{
                        width: {
                            xs: "100%",
                            md: "25%",
                        },
                    }}
                >
                    Apoiar Projeto
                </Button>
            </Stack>
        </Stack>
    )
}
