import { useForm } from "react-hook-form";
import { useUser } from "../../../../lib/hooks/useUser";

export const useContainerPlataforma = () => {
  const { control } = useForm();
  const { user } = useUser();

  return {
    control,
    user,
  };
};
