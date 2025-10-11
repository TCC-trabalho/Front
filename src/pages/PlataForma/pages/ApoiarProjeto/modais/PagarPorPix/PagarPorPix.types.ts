import { CriarPagamento } from "../../../../../../api/models/MercadoPago.types"

export interface PagarPorPixProps {
    open: boolean
    onClose: () => void
    data: CriarPagamento.Request
}