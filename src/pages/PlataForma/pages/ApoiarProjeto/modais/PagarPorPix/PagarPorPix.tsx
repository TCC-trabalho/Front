import { Copy, HandCoins } from "lucide-react"
import { Button } from "../../../../../../components/Button/Button"
import { Modal } from "../../../../../../components/Modal"
import { PagarPorPixProps } from "./PagarPorPix.types"
import { useCriarPagamento } from "../../../../../../api/controllers/mercadoPago"
import { useEffect, useState } from "react"
import { CircularProgress, Stack, Typography } from "@mui/material"
import { toast } from "sonner"

export const PagarPorPix = ({ open, onClose, data }: PagarPorPixProps) => {
    const { mutateAsync: criarPagamento, isPending: criandoPagamento } = useCriarPagamento()
    const [qrBase64, setQrBase64] = useState<string | null>(null)
    const [qrText, setQrText] = useState<string | null>(null)

    const handleCopy = async () => {
        if (qrText) {
            try {
                await navigator.clipboard.writeText(qrText)
                toast.success("Código Pix copiado para a área de transferência!")
            } catch {
                toast.error("Não foi possível copiar o código Pix.")
            }
        } else {
            toast.warning("Nenhum código Pix disponível para copiar.")
        }
    }

    useEffect(() => {
        const gerarPagamento = async () => {
            if (open && data?.id_projeto && data?.valor > 0) {
                try {
                    const response = await criarPagamento(data)
                    if (response) {
                        setQrBase64(response.qr_base64)
                        setQrText(response.qr_text)
                    }
                } catch {
                    toast.error("Erro ao gerar pagamento PIX:")
                }
            }
        }
        gerarPagamento()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    return (
        <Modal.Wrapper
            open={open}
            onClose={onClose}
        >
            <Modal.Header
                title="Pagar com Pix"
                subtitle="Use o QR Code ou copie o código para realizar o pagamento"
                Icon={HandCoins}
                type="success"
            />
            <Stack
                alignItems="center"
                spacing={2}
            >
                {criandoPagamento && <CircularProgress color="primary" />}

                {!criandoPagamento && qrBase64 && (
                    <>
                        <img
                            src={`data:image/png;base64,${qrBase64}`}
                            alt="QR Code Pix"
                            style={{ width: 200, height: 200 }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                bgcolor: "#f5f5f5",
                                p: 2,
                                borderRadius: 2,
                                wordBreak: "break-all",
                                textAlign: "center",
                                width: "80%",
                                fontFamily: "monospace",
                                fontSize: 14,
                            }}
                        >
                            {qrText || "Código não disponível"}
                        </Typography>
                    </>
                )}
            </Stack>
            <Modal.Actions ocuparEspacoVazio>
                <Button
                    variante="ButtonBlue"
                    tamanho="md"
                    icon={Copy}
                    onClick={handleCopy}
                    loading={!qrText}
                >
                    Copiar código
                </Button>
            </Modal.Actions>
        </Modal.Wrapper>
    )
}
