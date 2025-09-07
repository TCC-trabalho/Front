import { Button } from "../../../../../../../../components/Button/Button"
import { Modal } from "../../../../../../../../components/Modal"
import { AvaliacaoEnviadaProps } from "./AvaliacaoEnviada.types"

export const AvaliacaoEnviada = ({ onClose, open }: AvaliacaoEnviadaProps) => {
    return (
        <Modal.Wrapper
            onClose={onClose}
            open={open}
        >
            <Modal.Header
                title="Avaliação enviada com sucesso!"
                subtitle="Obrigado por avaliar esta empresa. Sua opinião é muito importante!"
                onClose={onClose}
                sx={{ pb: "0px !important" }}
            />
            <Modal.Actions>
                <Button
                    tamanho="md"
                    variante="ButtonBlue"
                    onClick={onClose}
                >
                    Fechar
                </Button>
            </Modal.Actions>
        </Modal.Wrapper>
    )
}
