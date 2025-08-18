import { CheckCircle } from "lucide-react"
import { Modal } from "../../../../../../../../../../components/Modal"
import { Button } from "../../../../../../../../../../components/Button/Button"
import { ProjetoAtualizadoProps } from "./ProjetoAtualizado.type"
import { useParams } from "react-router"

export const ProjetoAtualizado = ({ onClose, open }: ProjetoAtualizadoProps) => {
    const { idProjeto } = useParams()

    return (
        <Modal.Wrapper
            open={open}
            onClose={onClose}
        >
            <Modal.Header
                title="Projeto Atualizado"
                onClose={onClose}
                Icon={CheckCircle}
                type="success"
            />
            <Modal.Actions ocuparEspacoVazio>
                <Button
                    tamanho="lg"
                    variante="ButtonGrey"
                    onClick={onClose}
                >
                    Fechar
                </Button>
                <Button
                    variante="ButtonBlue"
                    tamanho="lg"
                    to={`/plataforma-nexus/detalhes-projeto/${idProjeto}`}
                    viewTransition
                >
                    Entendi
                </Button>
            </Modal.Actions>
        </Modal.Wrapper>
    )
}
