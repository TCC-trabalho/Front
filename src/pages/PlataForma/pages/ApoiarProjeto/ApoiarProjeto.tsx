import { Select } from "../../../../components/select/Select"
import { Input } from "../../../../components/Input/Input"
import { useApoiarProjeto } from "./ApoiarProjeto.hook"
import { Button } from "../../../../components/Button/Button"
import { Stack, Typography } from "@mui/material"
import { truncateText } from "../../../../lib/utils/truncateText"
import { ChevronLeft, HandHelping } from "lucide-react"

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
                ml: {
                    xs: 0,
                    md: 20,
                    lg: 0,
                },
                bgcolor: "#FFF",
                padding: 4,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                gap: 2,
            }}
        >
            <Stack
                direction={"row"}
                alignItems={"center"}
                gap={1.5}
            >
                <Typography
                    variant="h3"
                    fontWeight={500}
                >
                    Apoiar Projeto
                </Typography>
                <HandHelping size={50} />
            </Stack>
            <Select
                control={control}
                disabled={isPending || isPatrocinarPending}
                name="tipoApoio"
                label="Tipo de Apoio"
                tamanho="md"
                placeholder="Selecione o tipo de apoio"
                options={[
                    { label: "Dinheiro", value: "dinheiro" },
                    { label: "Divulgação", value: "divulgacao", disabled: true },
                    { label: "Equipamentos", value: "equipamentos", disabled: true },
                    { label: "Capacitação", value: "capacitacao", disabled: true },
                ]}
            />

            <Typography
                variant="h4"
                fontWeight={500}
            >
                {projeto?.titulo}
            </Typography>

            <Typography variant="h6">{projeto?.area}</Typography>

            <Typography variant="subtitle1">
                Status: <strong>{projeto?.status}</strong>
            </Typography>

            <Typography variant="subtitle1">
                Professor Orientador: <strong>{projeto?.nome_orientador}</strong>
            </Typography>

            <Typography sx={{ width: "90%" }}>{truncateText(projeto?.descricao || "", 460)}</Typography>

            <Stack gap={2}>
                <Input
                    control={control}
                    name="valorApoio"
                    label="Selecione uma quantia para contribuir"
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

                <Stack
                    direction={"row"}
                    gap={2}
                >
                    <Button
                        variante="ButtonOutlinedRed"
                        type="submit"
                        tamanho="md"
                        icon={ChevronLeft}
                        disabled={isPatrocinarPending}
                        to={`/plataforma-nexus/detalhes-projeto/${projeto?.id_projeto}`}
                        viewTransition
                        espacamento={10}
                    >
                        Voltar
                    </Button>
                    <Button
                        type="submit"
                        tamanho="md"
                        loading={isPatrocinarPending}
                        espacamento={10}
                    >
                        Enviar apoio
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
