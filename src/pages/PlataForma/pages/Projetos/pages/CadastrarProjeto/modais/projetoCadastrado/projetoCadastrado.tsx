import { CircleCheckBig } from "lucide-react"
import { Modal } from "../../../../../../../../components/Modal"
import { Button } from "../../../../../../../../components/Button/Button"
import { projetoCadastradoType } from "./projetoCadastrado.type"

export const ProjetoCadastrado = ({ open }: projetoCadastradoType) => {
    return (
        <Modal.Wrapper
            open={open}
            disabledClose
        >
            <Modal.Header
                title="Projeto cadastrado com sucesso!"
                subtitle="Agora você pode voltar para plataforma e visualizar os detalhes do projeto."
                Icon={CircleCheckBig}
                type="success"
            />

            <Modal.Actions ocuparEspacoVazio>
                <Button
                    variante="ButtonBlue"
                    tamanho="lg"
                    to="/plataforma-nexus/"
                    viewTransition
                >
                    Voltar para plataforma
                </Button>
                <Button
                    tamanho="lg"
                    to="/plataforma-nexus/cadastrar-projeto"
                >
                    Cadastrar outro projeto
                </Button>
            </Modal.Actions>
        </Modal.Wrapper>
    )
}
