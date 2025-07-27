import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validacaoGrupo } from "./CadastroGrupo.schemas";
import { toast } from "sonner";
import { useCadastrarGrupo } from "../../../../../../../../api/controllers/projeto";

export const useCadastroGrupo = () => {
    const { control, handleSubmit, getValues } = useForm({
        resolver: yupResolver(validacaoGrupo),
    });
    
    const { mutateAsync } = useCadastrarGrupo();
    
    const onSubmit = handleSubmit(async () => {
        const valores = getValues();
    
        const toastId = toast.loading("Criando grupo...");
    
        try {
        await mutateAsync({
            nome: valores.nome,
            descricao: valores.descricao,
            data_criacao: new Date(),
        });
    
        toast.success("Grupo criado com sucesso!", { id: toastId });
        } catch {
        toast.error("Falha ao criar grupo. Verifique os dados.", { id: toastId });
        }
    });
    
    return {
        control,
        onSubmit,
    };
}