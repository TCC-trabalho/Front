import { Enum } from "../../../../../../api/enum/enum"
import { CriarPagamento } from "../../../../../../api/models/MercadoPago.types"

export interface PagarPorPixProps {
    open: boolean
    onClose: () => void
    data: CriarPagamento.Request
}

export namespace Payment {
    export type Response = {
        payment: {
            amount: number
            id: string
            status: Enum.StatusPagamento
        }
    }
}
