import { useForm } from "react-hook-form"
import { useUser } from "../../../../../../lib/hooks/useUser"

export const useEditarPerfil = () => {
    const {user} = useUser()
    const {control} = useForm()

    return{
        user,
        control
    }
}