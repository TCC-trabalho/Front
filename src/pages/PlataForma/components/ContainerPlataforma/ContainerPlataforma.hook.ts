import { useForm } from "react-hook-form";

export const useContainerPlataforma = () => {
  const { control } = useForm();
  

  return {
    control,
  };
};
