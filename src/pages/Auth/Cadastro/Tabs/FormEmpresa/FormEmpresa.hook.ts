import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner"
import { validacaoEmpresa } from "./FormEmpresa.schemas";
import { useNavigate } from "react-router";
import { useCadastroEmpresa } from "../../../../../api/controllers/auth";

export const useFormEmpresa = () => {
 const navigate = useNavigate()

  const { control, handleSubmit, getValues, reset } = useForm({
    resolver: yupResolver(validacaoEmpresa),
  })

  const { mutateAsync } = useCadastroEmpresa()

  const onSubmit = handleSubmit(async () => {
    const valores = getValues()

    const payload = {
      nome: valores.nome,
      cnpj: valores.cnpj.replace(/\D/g, ""),
      endereco: valores.endereco,
      setor: valores.setor, 
      email: valores.email,
      telefone: valores.telefone.replace(/\D/g, ""),
      senha: valores.senha,
    }

    const toastId = toast.loading("Enviando dados da empresa...")

    try {
      await mutateAsync(payload)
      toast.success("Cadastro da empresa realizado com sucesso!", { id: toastId })

      reset()
      navigate("/login")
    } catch {
      toast.error("Erro ao cadastrar. Verifique os dados.", { id: toastId })
    }
  })

  return {
    control,
    onSubmit
  }
};
