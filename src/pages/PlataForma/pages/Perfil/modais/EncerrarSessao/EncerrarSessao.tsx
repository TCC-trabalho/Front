import { TriangleAlert } from "lucide-react"
import { Modal } from "../../../../../../components/Modal"
import { Button } from "../../../../../../components/Button/Button"
import { encerrarSessaoProps } from "./EncerrarSessao.type"
import { useLogout } from "../../../../../../lib/hooks/useUser"

export const EncerrarSessao = ({ open, onClose }: encerrarSessaoProps) => {
    const { handleLogout } = useLogout()

    return (
        <Modal.Wrapper
            open={open}
            onClose={onClose}
        >
            <Modal.Header
                title="Deseja encerrar a sessão?"
                subtitle="Você será redirecionado para a página inicial."
                type="warning"
                Icon={TriangleAlert}
                onClose={onClose}
            />
            <Modal.Actions ocuparEspacoVazio>
                <Button
                    variante="ButtonGrey"
                    tamanho="lg"
                    onClick={onClose}
                >
                    Cancelar
                </Button>
                <Button
                    variante="ButtonRed"
                    tamanho="lg"
                    onClick={handleLogout}
                >
                    Encerrar sessão
                </Button>
            </Modal.Actions>
        </Modal.Wrapper>
    )
}
