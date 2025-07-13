import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validacaoAluno } from "./FormAluno.schemas";
import { toast } from "sonner";

export const useFormAluno = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validacaoAluno),
  });

  const onSubmit = handleSubmit(async () => {
    toast.promise(async () => {}, {
      loading: "Carregando seus dados",
      success: "Login realizado com sucesso",
    });
  });

  return {
    control,
    onSubmit,
  };
};
