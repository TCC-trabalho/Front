import { TriangleAlert } from "lucide-react"
import { Button } from "../../../../../../components/Button/Button"
import { Modal } from "../../../../../../components/Modal"
import { DeletarContaProps } from "./DeletarConta.types"
import { useDeletarConta } from "../../../../../../api/controllers/user"
import { useLogout, useUser } from "../../../../../../lib/hooks/useUser"

export const DeletarConta = ({ open, onClose }: DeletarContaProps) => {
    const { user } = useUser()

    const { handleLogout } = useLogout()

    const { mutateAsync: deletarConta, isPending: isDeleting } = useDeletarConta()

    const handleDeleteAccount = async () => {
        await deletarConta({
            id: user.aluno?.id_aluno || user.orientador?.id_orientador || 0,
            tipo: user.aluno?.tipoUser || user.orientador?.tipoUser || null,
        })
        onClose()
        handleLogout()
    }

    return (
        <Modal.Wrapper
            open={open}
            onClose={onClose}
            disabledClose={isDeleting}
        >
            <Modal.Header
                title="Deletar Conta"
                subtitle="Tem certeza que deseja deletar sua conta? Não será possível reverter essa ação."
                Icon={TriangleAlert}
                type="alert"
                onClose={onClose}
                disabledClose={isDeleting}
            />
            <Modal.Actions ocuparEspacoVazio>
                <Button
                    tamanho="lg"
                    variante="ButtonGrey"
                    onClick={onClose}
                    disabled={isDeleting}
                >
                    Cancelar
                </Button>
                <Button
                    tamanho="lg"
                    onClick={handleDeleteAccount}
                    loading={isDeleting}
                >
                    Confirmar
                </Button>
            </Modal.Actions>
        </Modal.Wrapper>
    )
}
