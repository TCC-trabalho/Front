import { toast } from "sonner";
import { CadastroProjetoSchema } from "./CadastroProjeto.schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCadastrarProjeto } from "../../../../../../../../api/controllers/projeto";
import { useParams } from "react-router";
import { useUser } from "../../../../../../../../lib/hooks/useUser";
import { useSuccessModal } from "../../../../../../../../lib/hooks/useSuccessModal";

export const useCadastroProjeto = () => {
  const { user } = useUser();
  const { idGrupo } = useParams();
  const idGrupoNumber = Number(idGrupo);

  const { control, handleSubmit, getValues } = useForm({
    resolver: yupResolver(CadastroProjetoSchema),
  });

  const {
    mutateAsync: cadastrarProjeto,
  } = useCadastrarProjeto();

  const {
    open: openModal,
    setOpen: setOpenModal,
    isPending,
    execute: cadastrarComModal,
  } = useSuccessModal(cadastrarProjeto);

  const onSubmit = handleSubmit(async () => {
    const valores = getValues();

    const toastId = toast.loading("Criando projeto...");

    try {
      const response = await cadastrarComModal({
        titulo: valores.titulo,
        descricao: valores.descricao,
        area: valores.area,
        data_criacao: new Date().toISOString().slice(0, 19).replace("T", " "),
        status: "ativo",
        id_grupo: idGrupoNumber,
        id_orientador: user?.id_orientador,
      });

      toast.success("Projeto criado com sucesso!", { id: toastId });
      return response;
    } catch {
      toast.error("Falha ao criar projeto. Verifique os dados.", {
        id: toastId,
      });
    }
  });

  return {
    control,
    onSubmit,
    isPendingCadastrarProjeto: isPending,
    openModal,
    setOpenModal,
  };
};
