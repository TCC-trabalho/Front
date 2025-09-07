import { useUser } from "./useUser"

export const useUserId = (): number | undefined => {
  const { user } = useUser()

  return (
    user.aluno?.id_aluno ??
    user.orientador?.id_orientador ??
    user.empresa?.id_empresa ??
    undefined
  )
}
