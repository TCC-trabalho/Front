import { Stack } from "@mui/material"
import { Button } from "../../../../../../../../components/Button/Button"
import { Modal } from "../../../../../../../../components/Modal"
import { AvaliarEmpresaProps } from "./AvaliarEmpresa.type"
import { Star } from "lucide-react"
import { AvaliacaoEnviada } from "../AvaliacaoEnviada/AvaliacaoEnviada"
import { useState } from "react"

export const AvaliarEmpresa = ({ open, onClose }: AvaliarEmpresaProps) => {
    const [modal, setModal] = useState(false)

    const onFechar = () => {
        onClose()
        setModal(true)
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
                    <Button
                        variante="ButtonLink"
                        tamanho="xl"
                        icon={Star}
                        somenteIcone
                    />
                    <Button
                        variante="ButtonLink"
                        tamanho="xl"
                        icon={Star}
                        somenteIcone
                    />
                    <Button
                        variante="ButtonLink"
                        tamanho="xl"
                        icon={Star}
                        somenteIcone
                    />
                    <Button
                        variante="ButtonLink"
                        tamanho="xl"
                        icon={Star}
                        somenteIcone
                    />
                    <Button
                        variante="ButtonLink"
                        tamanho="xl"
                        icon={Star}
                        somenteIcone
                    />
                </Stack>
                <Modal.Actions sx={{ justifyContent: "center" }}>
                    <Button
                        tamanho="md"
                        onClick={onFechar}
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
