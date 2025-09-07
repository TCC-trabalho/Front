import { useObterEmpresas } from "../../../../api/controllers/empresa"

export const useEmpresas = () => {
    const { data, isPending } = useObterEmpresas()

    return {
        feed: data ?? [],
        isFetching: isPending,
    }
}
