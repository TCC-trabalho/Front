import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner"
import { validacaoEmpresa } from "./FormEmpresa.schemas";

export const useFormEmpresa = () => {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(validacaoEmpresa) });

    const onSubmit = handleSubmit(async () => {
        toast.promise(async () => {}, {
            loading: "Carregando dados da empresa",
            success: "Login realizado com sucesso",
        })
    })

  return {
    control,
    onSubmit
  }
};
