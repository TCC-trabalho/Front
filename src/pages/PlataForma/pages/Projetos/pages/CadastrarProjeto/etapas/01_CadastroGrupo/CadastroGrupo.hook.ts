import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { validacaoGrupo } from "./CadastroGrupo.schemas";
import { toast } from "sonner";
import { useCadastrarGrupo } from "../../../../../../../../api/controllers/projeto";
import { useNavigate } from "react-router";

export const useCadastroGrupo = () => {
  const { control, handleSubmit, getValues } = useForm({
    resolver: yupResolver(validacaoGrupo),
  });

  const navigate = useNavigate();

  const { mutateAsync } = useCadastrarGrupo();

  const onSubmit = handleSubmit(async () => {
    const valores = getValues();

    const toastId = toast.loading("Criando grupo...");

    try {
      const response = await mutateAsync({
        nome: valores.nome,
        descricao: valores.descricao,
        data_criacao: new Date().toISOString().slice(0, 19).replace("T", " "),
      });

      toast.success("Grupo criado com sucesso!", { id: toastId });
      navigate(`/plataforma-nexus/cadastrar-projeto/cadastro-integrantes/${response.id_grupo}`);

    } catch {
      toast.error("Falha ao criar grupo. Verifique os dados.", { id: toastId });
    }
  });

  return {
    control,
    onSubmit,
  };
};
