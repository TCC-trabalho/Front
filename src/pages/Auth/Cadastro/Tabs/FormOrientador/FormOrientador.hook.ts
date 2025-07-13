import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { validacaoOrientador } from "./FormOrientador.schemas";

export const useFormOrientador = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validacaoOrientador),
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
