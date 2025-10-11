import { Enum } from "../enum/enum";

export enum MercadoPagoQueryKes {
    statusConta = "status-conta-mercado-pago",
}

export namespace ObterStatusConta {
    export type Request = {
        id_usuario: number;
        tipo_usuario: Enum.TipoUsuario | null;
    }

    export type Response = {
        vinculado: boolean;
        data_vinculo: string | null;
        expira_em: string | null;
    }
}

export namespace ConectarConta {
    export type Request = {
        id_usuario: number;
        tipo_usuario: Enum.TipoUsuario | null;
    }

    export type Response = {
        url: string;
    }
}

export namespace CriarPagamento {
    export type Request = {
        id_usuario: number;
        valor: number;
        email: string;
        nome: string;
    }

    export type Response = {
        status: string;
        id: string;
        qr_base64: string;
        qr_text: string;
        valor: number;
        comissao: number;
    }
}