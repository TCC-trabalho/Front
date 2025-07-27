import { useForm, useFieldArray, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validacaoIntegrantes } from "./CadastroIntegrantes.schemas";
import { useEffect } from "react";

type FormData = FieldValues & {
  emailIntegrante: string[];
};

export const useCadastroIntegrantes = () => {
  const {
    control,
    handleSubmit,
    watch,
    // getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validacaoIntegrantes),
    defaultValues: {
      emailIntegrante: [""],
    },
  });

  const { fields, append } = useFieldArray<FormData>({
    control,
    name: "emailIntegrante",
  });

  const emails = watch("emailIntegrante") || [];

  const onSubmit = (data: FormData) => {
    console.log("Integrantes cadastrados:", data.emailIntegrante);
  };

  const ultimoEmailValido =
    emails.length > 0 &&
    !!emails[emails.length - 1] &&
    !errors.emailIntegrante?.[emails.length - 1];

  useEffect(() => {
    if (fields.length === 0) {
      append(""); // cria o campo inicial
    }
  }, [append, fields]);

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    append,
    fields,
    ultimoEmailValido,
  };
};
