import { Stack } from "@mui/material"
import { Button } from "../../../../../../../../components/Button/Button"
import { Modal } from "../../../../../../../../components/Modal"
import { AvaliarEmpresaProps } from "./AvaliarEmpresa.type"
import { Star } from "lucide-react"
import { AvaliacaoEnviada } from "../AvaliacaoEnviada/AvaliacaoEnviada"
import { useMemo, useState } from "react"
import { useAvaliarEmpresa } from "../../../../../../../../api/controllers/avaliarEmpresa"
import { useParams } from "react-router"

export const AvaliarEmpresa = ({ open, onClose }: AvaliarEmpresaProps) => {
    const { idEmpresa } = useParams()

    const [rating, setRating] = useState<number>(0)
    const [hover, setHover] = useState<number | null>(null)
    const [modal, setModal] = useState(false)

    const { mutateAsync: avaliarEmpresa, isPending } = useAvaliarEmpresa()

    const stars = useMemo(() => [1, 2, 3, 4, 5], [])

    const activeUntil = hover ?? rating

    const enviar = async () => {
        if (!rating || isPending) return
        try {
            const payload = {
                id_empresa: Number(idEmpresa),
                estrelas: rating,
            }
            await avaliarEmpresa(payload)
            onClose()
            setModal(true)
            setRating(0)
            setHover(null)
        } catch {
            // aqui você pode plugar um toast de erro, se tiver
        }
    }

    return (
        <>
            <Modal.Wrapper
                open={open}
                onClose={onClose}
            >
                <Modal.Header
                    title="Avaliar Empresa"
                    subtitle="Avalie como foi sua experiência com essa Empresa!"
                    onClose={onClose}
                />
                <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    gap={4}
                >
                    {stars.map((star) => {
                        const isActive = star <= activeUntil
                        return (
                            <Button
                                variante="ButtonLink"
                                tamanho="xl"
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(null)}
                                onClick={() => setRating(star)}
                                aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                                sx={{
                                    transform: isActive ? "scale(1.05)" : "none",
                                    transition: "transform .15s ease",
                                }}
                            >
                                <Star
                                    size={36}
                                    strokeWidth={1.75}
                                    fill={isActive ? "currentColor" : "none"}
                                />
                            </Button>
                        )
                    })}
                </Stack>
                <Modal.Actions sx={{ justifyContent: "center" }}>
                    <Button
                        tamanho="md"
                        onClick={enviar}
                        loading={isPending}
                        espacamento={20}
                    >
                        Avaliar
                    </Button>
                </Modal.Actions>
            </Modal.Wrapper>
            <AvaliacaoEnviada
                onClose={() => setModal(false)}
                open={modal}
            />
        </>
    )
}
